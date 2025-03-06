import {
  Binary,
  ChainDefinition,
  TypedApi,
  SS58String,
  Enum,
} from "polkadot-api";
import { dot } from "@polkadot-api/descriptors";
import { PolkadotSigner } from "@polkadot-api/polkadot-signer";

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

export class PapiExtrinsicManager {
  protected readonly client: TypedApi<typeof dot>;
  protected signerAddress: string;
  protected signer: PolkadotSigner;

  constructor(signer: PolkadotSigner, client: TypedApi<typeof dot>) {
    this.signer = signer;
    this.client = client;
  }

  setSigner(signer: PolkadotSigner) {
    this.signer = signer;
  }

  async createCollectionExtrinsic(data: CreateCollectionData) {
    return this.client.tx.Nfts.create({
      admin: {
        type: "Id",
        value: this.signerAddress,
      },
      config: {
        mint_settings: {
          default_item_settings: data.mintSettings.defaultItemSettings,
          mint_type: Enum(
            data.mintSettings.mintType.type,
            data.mintSettings.mintType.value
          ),
          end_block: undefined,
          price: undefined,
          start_block: undefined,
        },
        settings: data.settings,
        max_supply: undefined,
      },
    }).signAndSubmit(this.signer);
  }

  async mintExtrinsic(data: MintExtrinsicData) {
    return this.client.tx.Nfts.mint({
      collection: data.collectionId,
      item: data.itemId,
      mint_to: {
        type: "Id",
        value: data.owner,
      },
      witness_data: {
        owned_item: 0,
        mint_price: BigInt(0),
      },
    }).signAndSubmit(this.signer);
  }

  async setAttributes(data: SetAttributeData) {
    return this.client.tx.Nfts.set_attribute({
      collection: data.collectionId,
      maybe_item: data.itemId,
      key: Binary.fromText(data.key),
      value: Binary.fromText(data.value),
      namespace: Enum(data.namespace.type, data.namespace.value || undefined),
    }).signAndSubmit(this.signer);
  }

  async setMetadata(data: SetMetadataData) {
    return this.client.tx.Nfts.set_metadata({
      collection: data.collectionId,
      item: data.itemId,
      data: Binary.fromText(data.data),
    });
  }
}
