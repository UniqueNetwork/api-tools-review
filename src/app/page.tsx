"use client";

import { useExtension } from "@/context/walletConnectContext";
import { ChainProperties } from "dedot/types/json-rpc";
import { useState, useEffect } from "react";

import { useDedot } from "@/hooks/useDedot";
import { DispatchError } from "dedot/codecs";

type CreateCollectionData = {
  mintType: {
    type: "Public" | "Issuer" | "HolderOf";
    value: number;
  };
  defaultSettings: number;
  settings: number;
};

type SetAttributesData = {
  collectionId: string;
  itemId: string;
  namespace: {
    type: "Pallet" | "CollectionOwner" | "ItemOwner" | "Account";
    value: string;
  };
  key: string;
  value: string;
};

export default function Home() {
  const {
    client,
    connected,
    connecting,
    error,
    connect,
    chainId,
    extrinsicManager,
  } = useDedot();
  const { selectedAccount, connectExtension, accounts, selectAccount } =
    useExtension();
  const [signerEnabled, setSignerEnabled] = useState(false);
  const [createCollectionData, setCreateCollectionData] =
    useState<CreateCollectionData>({
      mintType: {
        type: "Public",
        value: 0,
      },
      defaultSettings: 0,
      settings: 0,
    });
  const [mintData, setMintData] = useState({
    collectionId: "",
    itemId: "",
  });
  const [metadataData, setMetadataData] = useState({
    collectionId: "",
    itemId: "",
    data: "",
  });
  const [attributesData, setAttributesData] = useState<SetAttributesData>({
    collectionId: "",
    itemId: "",
    namespace: {
      type: "Pallet",
      value: "",
    },
    key: "",
    value: "",
  });
  const [extrinsicError, setExtrinsicError] = useState("");
  const [extrinsicSubmitting, setExtrinsicSubmitting] = useState(false);
  const [extrinsicStatus, setExtrinsicStatus] = useState(null);
  const [extrinsicTx, setExtrinsicTx] = useState(null);
  const [balance, setBalance] = useState(null);

  // Connect to default endpoint on page load
  useEffect(() => {
    if (!connected && !connecting) {
      connect();
    }
  }, []);

  useEffect(() => {
    setSignerEnabled(false);

    if (!selectedAccount) {
      return;
    }

    extrinsicManager.setSigner(selectedAccount.address).then(() => {
      setSignerEnabled(true);
    });
  }, [selectedAccount]);

  // Get chain properties when connected
  const [chainProperties, setChainProperties] = useState<ChainProperties>(null);

  useEffect(() => {
    if (!connected) return;

    getChainProperties();
  }, [client, connected]);

  const getChainProperties = async () => {
    if (client && connected) {
      try {
        const properties = await client.rpc.system_properties();
        setChainProperties(properties);
      } catch (err) {
        console.error("Failed to get chain properties:", err);
      }
    }
  };

  const handleMintFormChange = (e) => {
    const { name, value } = e.target;
    setMintData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMetadataFormChange = (e) => {
    const { name, value } = e.target;

    setMetadataData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAttributesFormChange = (e) => {
    const { name, value } = e.target;
    setAttributesData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMint = async (e) => {
    e.preventDefault();

    await extrinsicManager.mintExtrinsic(
      {
        collectionId: +mintData.collectionId,
        itemId: +mintData.itemId,
        owner: selectedAccount.address,
      },
      ({ txHash, status, dispatchError }) =>
        updateStatus(status.type, txHash, dispatchError)
    );

    setMintData({
      collectionId: "",
      itemId: "",
    });
  };

  const handleCreateCollection = async (e) => {
    e.preventDefault();

    extrinsicManager.createCollectionExtrinsic(
      {
        mintSettings: {
          defaultItemSettings: BigInt(createCollectionData.defaultSettings),
          mintType: createCollectionData.mintType,
        },
        settings: BigInt(createCollectionData.settings),
      },
      ({ txHash, status, dispatchError }) =>
        updateStatus(status.type, txHash, dispatchError)
    );

    setCreateCollectionData({
      mintType: {
        type: "Public",
        value: 0,
      },
      defaultSettings: 0,
      settings: 0,
    });
  };

  const handleSetMetadata = async (e) => {
    e.preventDefault();

    extrinsicManager.setMetadata(
      {
        collectionId: +metadataData.collectionId,
        itemId: +metadataData.itemId,
        data: metadataData.data,
      },
      ({ txHash, status, dispatchError }) =>
        updateStatus(status.type, txHash, dispatchError)
    );

    setMetadataData({
      collectionId: "",
      itemId: "",
      data: "",
    });
  };

  const handleSetAttributes = async (e) => {
    e.preventDefault();

    extrinsicManager.setAttributes(
      {
        collectionId: +attributesData.collectionId,
        itemId: +attributesData.itemId,
        namespace: attributesData.namespace,
        key: attributesData.key,
        value: attributesData.value,
      },
      ({ txHash, status, dispatchError }) =>
        updateStatus(status.type, txHash, dispatchError)
    );

    setAttributesData({
      collectionId: "",
      itemId: "",
      namespace: {
        type: "Pallet",
        value: "",
      },
      key: "",
      value: "",
    });
  };

  const updateStatus = (status: string, hash: string, error: DispatchError) => {
    setExtrinsicSubmitting(true);
    if (status) {
      setExtrinsicStatus(status);
    }
    if (hash) {
      setExtrinsicTx(hash);
    }
    if (status === "Finalized") {
      setExtrinsicSubmitting(false);
      setExtrinsicStatus(null);
      setExtrinsicTx(null);
    }
    if (error) {
      setExtrinsicError(error.type);
    }
  };

  const getBalance = () => {
    if (client && selectedAccount) {
      client.query.system.account(selectedAccount.address).then((balance) => {
        setBalance(
          +balance.data.free.toString() / 10 ** +chainProperties.tokenDecimals
        );
      });
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div>
            {
              <button onClick={connectExtension}>
                Connect account
              </button>
            }
          </div>
          <div>
            {accounts.map((acc) => {
              const isSelected = acc.address === selectedAccount?.address;
              return (
                <button
                  key={acc.address}
                  onClick={() => {
                    selectAccount(acc.address);
                  }}
                >
                  {isSelected ? <b>{acc.address}</b> : <p>{acc.address}</p>}
                </button>
              );
            })}
          </div>

          <div>
            <button onClick={getBalance}>Get balance</button>
          </div>
          <p>{balance}</p>
        </header>

        <div className="p-6 rounded-lg border border-gray-200 mb-8 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          <div className="flex items-center mb-4">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${connected ? "bg-green-500" : "bg-red-500"}`}
            ></div>
            <span>{connected ? "Connected" : "Disconnected"}</span>
          </div>

          {connecting && <p className="text-blue-600">Connecting...</p>}
          {error && <p className="text-red-500">Error: {error.message}</p>}

          <div className="mt-4">
            <div className="flex mb-4">
              <p>{chainId}</p>
            </div>
          </div>
        </div>

        {connected && signerEnabled && (
          <>
            <div className="p-6 rounded-lg border border-gray-200 mb-8 bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Chain Information</h2>
              {chainProperties ? (
                <div className="space-y-2">
                  <p>
                    <strong>Token Symbol:</strong>{" "}
                    {chainProperties.tokenSymbol?.toString() || "Unknown"}
                  </p>
                  <p>
                    <strong>Token Decimals:</strong>{" "}
                    {chainProperties.tokenDecimals?.toString() || "Unknown"}
                  </p>
                  <p>
                    <strong>SS58 Format:</strong>{" "}
                    {chainProperties.ss58Format?.toString() || "Unknown"}
                  </p>
                </div>
              ) : (
                <p>Loading chain information...</p>
              )}
            </div>

            <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
              <h2>
                {extrinsicSubmitting
                  ? "Extrinsic submitting..."
                  : "Extrinsic submitted"}
              </h2>
              <h2>{extrinsicStatus}</h2>
              <h2>{extrinsicTx}</h2>
              <h2 className="text-red">{extrinsicError}</h2>
            </div>

            <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
              <h2 className="text-lg font-semibold mb-4">Create Collection</h2>

              <form onSubmit={handleCreateCollection} className="space-y-3">
                <div>
                  <label
                    htmlFor="collectionMintType"
                    className="block text-sm mb-1"
                  >
                    Collection Mint Type
                  </label>
                  <select
                    id="mintType"
                    name="mintType"
                    value={createCollectionData.mintType.type}
                    onChange={(e) => {
                      setCreateCollectionData((prev) => ({
                        ...prev,
                        mintType: {
                          value: 0,
                          type: e.target.value as any,
                        },
                      }));
                    }}
                    required
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="Public">Public</option>
                    <option value="Issuer">Issuer</option>
                    <option value="HolderOf">HolderOf</option>
                  </select>
                  {createCollectionData.mintType.type === "HolderOf" && (
                    <>
                      <label
                        htmlFor="collectionMintValue"
                        className="block text-sm mb-1"
                      >
                        Collection Mint Value
                      </label>
                      <input
                        id="mintValue"
                        name="mintValue"
                        type="number"
                        value={createCollectionData.mintType.value.toString()}
                        onChange={(e) => {
                          e.preventDefault();

                          setCreateCollectionData((prev) => ({
                            ...prev,
                            mintType: {
                              ...prev.mintType,
                              value: +e.target.value,
                            },
                          }));
                        }}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </>
                  )}
                  <label
                    htmlFor="defaultSettings"
                    className="block text-sm mb-1"
                  >
                    Default Settings
                  </label>
                  <input
                    id="defaultSettings"
                    name="defaultSettings"
                    type="number"
                    value={createCollectionData.defaultSettings.toString()}
                    onChange={(e) => {
                      e.preventDefault();

                      setCreateCollectionData((prev) => ({
                        ...prev,
                        defaultSettings: +e.target.value,
                      }));
                    }}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <label htmlFor="settings" className="block text-sm mb-1">
                  Default Settings
                </label>
                <input
                  id="settings"
                  name="settings"
                  type="number"
                  value={createCollectionData.settings.toString()}
                  onChange={(e) => {
                    e.preventDefault();

                    setCreateCollectionData((prev) => ({
                      ...prev,
                      settings: +e.target.value,
                    }));
                  }}
                  className="w-full px-3 py-2 border rounded"
                />
                <button
                  disabled={!selectedAccount}
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create Collection
                </button>
              </form>
            </div>

            <div className="max-w-md mx-auto p-4 bg-white rounded shadow  m-10">
              <h2 className="text-lg font-semibold mb-4">Mint Item</h2>

              <form onSubmit={handleMint} className="space-y-3">
                <div className="space-y-5">
                  <label htmlFor="collectionId" className="block text-sm mb-1">
                    Collection ID
                  </label>
                  <input
                    type="number"
                    id="collectionId"
                    name="collectionId"
                    value={mintData.collectionId}
                    onChange={handleMintFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="itemId" className="block text-sm mb-1">
                    Item ID
                  </label>
                  <input
                    type="number"
                    id="itemId"
                    name="itemId"
                    value={mintData.itemId}
                    onChange={handleMintFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <button
                  disabled={!selectedAccount}
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Mint Item
                </button>
              </form>
            </div>

            <div className="max-w-md mx-auto p-4 bg-white rounded shadow  m-10">
              <h2 className="text-lg font-semibold mb-4">Set Metadata</h2>

              <form onSubmit={handleSetMetadata} className="space-y-3">
                <div className="space-y-5">
                  <label htmlFor="collectionId" className="block text-sm mb-1">
                    Collection ID
                  </label>
                  <input
                    type="number"
                    id="collectionId"
                    name="collectionId"
                    value={metadataData.collectionId}
                    onChange={handleMetadataFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="itemId" className="block text-sm mb-1">
                    Item ID
                  </label>
                  <input
                    type="number"
                    id="itemId"
                    name="itemId"
                    value={metadataData.itemId}
                    onChange={handleMetadataFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="metadata" className="block text-sm mb-1">
                    Data
                  </label>
                  <input
                    type="string"
                    id="metadataData"
                    name="data"
                    value={metadataData.data}
                    onChange={handleMetadataFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <button
                  disabled={!selectedAccount}
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Set Metadata
                </button>
              </form>
            </div>

            <div className="max-w-md mx-auto p-4 bg-white rounded shadow  m-10">
              <h2 className="text-lg font-semibold mb-4">Set Attribute</h2>
              <form onSubmit={handleSetAttributes} className="space-y-3">
                <div className="space-y-5">
                  <label htmlFor="collectionId" className="block text-sm mb-1">
                    Collection ID
                  </label>
                  <input
                    type="number"
                    id="collectionId"
                    name="collectionId"
                    value={attributesData.collectionId}
                    onChange={handleAttributesFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="itemId" className="block text-sm mb-1">
                    Item ID
                  </label>
                  <input
                    type="number"
                    id="itemId"
                    name="itemId"
                    value={attributesData.itemId}
                    onChange={handleAttributesFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="metadata" className="block text-sm mb-1">
                    Key
                  </label>
                  <input
                    type="string"
                    id="attributeKey"
                    name="key"
                    value={attributesData.key}
                    onChange={handleAttributesFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                  <label htmlFor="metadata" className="block text-sm mb-1">
                    Value
                  </label>
                  <input
                    type="string"
                    id="attributeValue"
                    name="value"
                    value={attributesData.value}
                    onChange={handleAttributesFormChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />

                  <select
                    id="attributeNamespace"
                    name="attributeNamespace"
                    value={attributesData.namespace.type}
                    onChange={(e) => {
                      setAttributesData((prev) => ({
                        ...prev,
                        namespace: {
                          ...prev.namespace,
                          type: e.target.value as any,
                        },
                      }));
                    }}
                    required
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="Pallet">Pallet</option>
                    <option value="CollectionOwner">CollectionOwner</option>
                    <option value="ItemOwner">ItemOwner</option>
                    <option value="Account">Account</option>
                  </select>
                  {attributesData.namespace.type === "Account" && (
                    <>
                      <label htmlFor="AccountId" className="block text-sm mb-1">
                        AccountId
                      </label>
                      <input
                        id="accountId"
                        name="accountId"
                        type="string"
                        value={attributesData.namespace.value.toString()}
                        onChange={(e) => {
                          e.preventDefault();

                          setAttributesData((prev) => ({
                            ...prev,
                            namespace: {
                              ...prev.namespace,
                              value: e.target.value,
                            },
                          }));
                        }}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </>
                  )}
                </div>
                <button
                  disabled={!selectedAccount}
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Set Attribute
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
