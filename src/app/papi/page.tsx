"use client";

import { useExtension } from "@/context/walletConnectContext"
import { useState, useEffect } from "react"
import { usePapi } from "@/hooks/usePapi"
import type { PolkadotSigner } from "polkadot-api"
import { ConnectionStatus } from "@/components/common/ConnectionStatus"
import { AccountSelector } from "@/components/common/AccountSelector"
import { CollectionsExplorer } from "@/components/common/CollectionsExplorer"
import { ErrorAlert } from "@/components/common/ErrorAlert"
import { NFTForms } from "@/components/common/NFTForms"

export default function PapiPage() {
  const { connected, connecting, error: connectionError, connect, extrinsicManager, client } = usePapi()
  const { selectedAccount, connectExtension, accounts, selectAccount, error: walletError } = useExtension()

  const [balance] = useState(null)
  const [chainProperties, setChainProperties] = useState(null)
  const [signerEnabled, setSignerEnabled] = useState(false)

  const handleConnectWallet = async () => {
    try {
      await connectExtension()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  useEffect(() => {
    if (!connected && !connecting) {
      connect()
    }
  }, [])

  useEffect(() => {
    if (!selectedAccount) {
      setSignerEnabled(false)
      return
    }

    extrinsicManager.setSigner(selectedAccount.polkadotSigner as PolkadotSigner, selectedAccount.address)
    setSignerEnabled(true)
    if (client) {
      //TODO - update with actual chain info
      setChainProperties({
        tokenSymbol: "WND",
        tokenDecimals: 12,
        ss58Format: 42,
      })
    }

  }, [selectedAccount, extrinsicManager, client])

  const chainInfo = chainProperties
    ? {
        tokenSymbol: chainProperties.tokenSymbol,
        tokenDecimals: chainProperties.tokenDecimals,
        ss58Format: chainProperties.ss58Format,
      }
    : null

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Papi Interface</h1>

        {walletError && <ErrorAlert message={`Wallet Error: ${walletError.message}`} />}

        {connectionError && (
          <ErrorAlert message={`Connection Error: ${connectionError.message}`} onDismiss={() => {}} />
        )}

        <ConnectionStatus connected={connected} connecting={connecting} error={connectionError} chainInfo={chainInfo} />

        <div className="my-8">
          <AccountSelector
            accounts={accounts}
            selectedAccount={selectedAccount}
            onConnect={handleConnectWallet}
            onSelectAccount={selectAccount}
            balance={balance}
          />
        </div>

        {connected && signerEnabled && (
          <>
            <CollectionsExplorer
              apiType="PAPI"
              extrinsicManager={extrinsicManager}
              signerAddress={selectedAccount?.address}
            />

            <NFTForms
              apiType="PAPI"
              extrinsicManager={extrinsicManager}
              isSignerEnabled={signerEnabled}
              signerAddress={selectedAccount?.address}
            />
          </>
        )}
      </div>
    </main>
  )
}

