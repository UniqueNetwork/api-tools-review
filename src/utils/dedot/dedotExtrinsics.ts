import { web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import { DedotClient } from "dedot";
import { Signer } from "@polkadot/types/types";
import { AccountId32 } from "dedot/codecs";
import { ISubmittableResult } from "dedot/types";
import { FrameSystemEventRecord } from "dedot/chaintypes";
import { ExtrinsicManager } from "../extrinsicManager";

type CreateCollectionData = {
  settings: bigint;
  mintSettings: {
    mintType: {
      type: "Issuer" | "Public" | "HolderOf";
      value: number;
    };
    defaultItemSettings: bigint;
  };
};

type SetAttributeData = {
  collectionId: number;
  itemId: number;
  namespace: {
    type: "Pallet" | "CollectionOwner" | "ItemOwner" | "Account";
    value: string;
  };
  key: string;
  value: string;
};

type MintExtrinsicData = {
  collectionId: number;
  itemId: number;
  owner: string;
};

type SetMetadataData = {
  collectionId: number;
  itemId: number;
  data: string;
};

export class DedotExtrinsicsManager extends ExtrinsicManager<DedotClient> {
  constructor(signerAddress: string, client: DedotClient) {
    super(signerAddress, client);
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
