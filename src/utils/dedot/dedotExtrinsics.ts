import { DedotClient } from "dedot";
import { AccountId32 } from "dedot/codecs";
import { InjectedSigner, ISubmittableResult } from "dedot/types";
import { FrameSystemEventRecord } from "dedot/chaintypes";
import { leToString } from "../le";
import {
  CreateCollectionData,
  SetAttributeData,
  SetMetadataData,
  MintExtrinsicData,
} from "../common/types";
import { Signer } from "@polkadot/types/types";

export class DedotExtrinsicManager {
  protected readonly client: DedotClient;
  protected signerAddress: string;
  protected signer: Signer;
  protected polkadotSigner: InjectedSigner;

  constructor(signerAddress: string, client: DedotClient) {
    this.client = client;
    this.signerAddress = signerAddress;
  }

  async setSigner(account: InjectedSigner, address: string) {
    this.client.setSigner(account);
    this.signerAddress = address;
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

  async getBalance() {
    const acc = new AccountId32(this.signerAddress);
    const accountInfo = await this.client.query.system.account(acc);
    return accountInfo.data.free.toString();
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
