import { DedotClient } from "dedot";
import { AccountId32 } from "dedot/codecs";
import { ISubmittableResult } from "dedot/types";
import { FrameSystemEventRecord } from "dedot/chaintypes";
import { leToString } from "../le";
import { CreateCollectionData, SetAttributeData, SetMetadataData, MintExtrinsicData } from "../types";
import { Signer } from "@polkadot/types/types";
import { PolkadotSigner } from "polkadot-api";
import { getPolkadotSigner } from "polkadot-api/signer";
import { web3Enable, web3FromAddress } from "@polkadot/extension-dapp";

export class DedotExtrinsicManager {
  protected readonly client: DedotClient;
  protected signerAddress: string;
  protected signer: Signer;
  protected polkadotSigner: PolkadotSigner;


  constructor(signerAddress: string, client: DedotClient) {
    this.client = client;
    this.signerAddress = signerAddress;
  }

  protected readonly getSigner = async (signerAddress: string) => {
    await web3Enable("polkadot-js");

    const injector = await web3FromAddress(signerAddress);

    const signer = injector.signer;

    if (!signer) {
      return;
    }

    return signer;
  };

  async setSigner(signerAddress: string) {
    this.signerAddress = signerAddress;

    const signer = await this.getSigner(this.signerAddress);

    this.polkadotSigner = getPolkadotSigner(
      Buffer.from(this.signerAddress),
      "Sr25519",
      (input) =>
        this.signer
          .signRaw({
            data: input.toString(),
            type: "bytes",
            address: this.signerAddress,
          })
          .then((res) => Buffer.from(JSON.stringify(res)))
    );

    this.signer = signer;
  }


  async getCollections() {
    const acc = new AccountId32(this.signerAddress);

    const allCollections =
      await this.client.query.nfts.collectionAccount.entries();

    const collections = allCollections
      .filter(([[accId]]) => accId.eq(acc))
      .map(([[_, colId]]) => colId);

    return collections;
  }

  async getTokenData(collectionId: number, itemId: number) {
    const [metadata, attributes] = await Promise.all([
      this.getTokenMetadata(collectionId, itemId),
      this.getTokenAttributes(collectionId, itemId),
    ]);

    return {
      metadata,
      attributes,
    };
  }

  async getTokenMetadata(collectionId: number, itemId: number) {
    return this.client.query.nfts
      .itemMetadataOf([collectionId, itemId])
      .then((res) => leToString(res.data));
  }

  async getTokenAttributes(collectionId: number, itemId: number) {
    const allAttributes = await this.client.query.nfts.attribute.entries();

    return allAttributes
      .filter(
        ([[collectionId_, itemId_]]) =>
          collectionId_ === collectionId && itemId_ === itemId
      )
      .map(([[, , , key], [value]]) => {
        return [leToString(key), leToString(value)];
      });
  }

  async getTokens(collectionId: number) {
    const allTokens = await this.client.query.nfts.item.entries();

    const tokens = allTokens
      .filter(([[colId]]) => colId === collectionId)
      .map(([[_, tokenId]]) => tokenId);

    return tokens;
  }

  async createCollectionExtrinsic(
    { mintSettings, settings }: CreateCollectionData,
    callback: (data: ISubmittableResult<FrameSystemEventRecord>) => void
  ) {
    await this.client.tx.nfts
      .create(this.signerAddress, {
        settings: BigInt(settings),
        mintSettings: {
          mintType: {
            type: mintSettings.mintType.type,
            value: mintSettings.mintType.value,
          },
          defaultItemSettings: mintSettings.defaultItemSettings,
        },
      })
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        (data) => {
          callback(data);
        }
      );
  }

  async setAttributes(
    data: SetAttributeData,
    callback: (data: ISubmittableResult<FrameSystemEventRecord>) => void
  ) {
    await this.client.tx.nfts
      .setAttribute(
        data.collectionId,
        data.itemId,
        {
          type: data.namespace.type,
          value: data.namespace.value
            ? new AccountId32(data.namespace.value)
            : undefined,
        },
        data.key,
        data.value
      )
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        (data) => {
          callback(data);
        }
      );
  }

  async setMetadata(
    data: SetMetadataData,
    callback: (data: ISubmittableResult<FrameSystemEventRecord>) => void
  ) {
    await this.client.tx.nfts
      .setMetadata(data.collectionId, data.itemId, data.data)
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        (data) => {
          callback(data);
        }
      );
  }

  async mintExtrinsic(
    data: MintExtrinsicData,
    callback: (data: ISubmittableResult<FrameSystemEventRecord>) => void
  ) {
    await this.client.tx.nfts
      .mint(data.collectionId, data.itemId, this.signerAddress, {})
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        (data) => {
          callback(data);
        }
      );
  }
}
