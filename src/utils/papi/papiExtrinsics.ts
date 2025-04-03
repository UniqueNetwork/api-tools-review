import { Binary, type TypedApi, Enum } from "polkadot-api"
import type { dot } from "@polkadot-api/descriptors"
import type { PolkadotSigner } from "@polkadot-api/polkadot-signer"
import type { CreateCollectionData, MintExtrinsicData, SetAttributeData, SetMetadataData } from "../common/types"
import type { IExtrinsicManager, ExtrinsicCallback } from "../common/extrinsicManager"

export class PapiExtrinsicManager implements IExtrinsicManager {
  protected readonly client: TypedApi<typeof dot>
  protected signerAddress: string
  protected signer: PolkadotSigner

  constructor(signer: PolkadotSigner, client: TypedApi<typeof dot>) {
    this.signer = signer
    this.client = client
  }

  setSigner(signer: PolkadotSigner, signerAddress: string) {
    this.signerAddress = signerAddress
    this.signer = signer
  }

  async getTokenData(collectionId: number, itemId: number) {
    const [metadata, attributes] = await Promise.all([
      this.getTokenMetadata(collectionId, itemId),
      this.getTokenAttributes(collectionId, itemId),
    ])

    return {
      metadata,
      attributes,
    }
  }

  async getCollections() {
    return this.client.query.Nfts.CollectionAccount.getEntries(this.signerAddress).then((res) =>
      res.map(({ keyArgs }) => keyArgs[1]),
    )
  }

  async getTokens(collectionId: number) {
    return this.client.query.Nfts.Item.getEntries(collectionId).then((res) => {
      return res.filter(({ value }) => value.owner === this.signerAddress).map(({ keyArgs }) => keyArgs[1])
    })
  }

  async getTokenMetadata(collectionId: number, itemId: number) {
    return this.client.query.Nfts.ItemMetadataOf.getEntries(collectionId).then((res) =>
      res.find(({ keyArgs }) => keyArgs[1] === itemId)?.value?.data?.asText(),
    )
  }

  async getTokenAttributes(collectionId: number, itemId: number) {
    return this.client.query.Nfts.Attribute.getEntries(collectionId, itemId).then((res) =>
      res.map(({ value, keyArgs }) => {
        return [keyArgs[3]?.asText(), value[0]?.asText()]
      }),
    )
  }

  async createCollection(data: CreateCollectionData, callback: ExtrinsicCallback) {
    const result = await this.client.tx.Nfts.create({
      admin: {
        type: "Id",
        value: this.signerAddress,
      },
      config: {
        mint_settings: {
          default_item_settings: data.mintSettings.defaultItemSettings,
          mint_type: Enum(data.mintSettings.mintType.type, data.mintSettings.mintType.value),
          end_block: undefined,
          price: undefined,
          start_block: undefined,
        },
        settings: data.settings,
        max_supply: undefined,
      },
    }).signAndSubmit(this.signer)

    callback(result)
    return result
  }

  async mintItem(data: MintExtrinsicData, callback: ExtrinsicCallback) {
    const result = await this.client.tx.Nfts.mint({
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
    }).signAndSubmit(this.signer)

    callback(result)
    return result
  }

  async setAttribute(data: SetAttributeData, callback: ExtrinsicCallback) {
    const result = await this.client.tx.Nfts.set_attribute({
      collection: data.collectionId,
      maybe_item: data.itemId,
      key: Binary.fromText(data.key),
      value: Binary.fromText(data.value),
      namespace: Enum(data.namespace.type, data.namespace.value || undefined),
    }).signAndSubmit(this.signer)

    callback(result)
    return result
  }

  async setMetadata(data: SetMetadataData, callback: ExtrinsicCallback) {
    const result = await this.client.tx.Nfts.set_metadata({
      collection: data.collectionId,
      item: data.itemId,
      data: Binary.fromText(data.data),
    }).signAndSubmit(this.signer)

    callback(result)
    return result
  }
}

