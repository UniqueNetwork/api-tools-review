import type { DedotClient } from "dedot"
import { AccountId32 } from "dedot/codecs"
import type { InjectedSigner } from "dedot/types"
import { leToString } from "../le"
import type { CreateCollectionData, SetAttributeData, SetMetadataData, MintExtrinsicData } from "../common/types"
import type { Signer } from "@polkadot/types/types"
import type { IExtrinsicManager, ExtrinsicCallback } from "../common/extrinsicManager"

export class DedotExtrinsicManager implements IExtrinsicManager {
  protected readonly client: DedotClient
  protected signerAddress: string
  protected signer: Signer
  protected polkadotSigner: InjectedSigner

  constructor(signerAddress: string, client: DedotClient) {
    this.client = client
    this.signerAddress = signerAddress
  }

  async setSigner(account: InjectedSigner, address: string) {
    this.client.setSigner(account)
    this.signerAddress = address
  }

  async getCollections() {
    const acc = new AccountId32(this.signerAddress)

    const allCollections = await this.client.query.nfts.collectionAccount.entries()

    const collections = allCollections.filter(([[accId]]) => accId.eq(acc)).map(([[_, colId]]) => colId)

    return collections
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

  async getTokenMetadata(collectionId: number, itemId: number) {
    return this.client.query.nfts.itemMetadataOf([collectionId, itemId]).then((res) => leToString(res.data))
  }

  async getTokenAttributes(collectionId: number, itemId: number) {
    const allAttributes = await this.client.query.nfts.attribute.entries()

    return allAttributes
      .filter(([[collectionId_, itemId_]]) => collectionId_ === collectionId && itemId_ === itemId)
      .map(([[, , , key], [value]]) => {
        return [leToString(key), leToString(value)]
      })
  }

  async getTokens(collectionId: number) {
    const allTokens = await this.client.query.nfts.item.entries()

    const tokens = allTokens.filter(([[colId]]) => colId === collectionId).map(([[_, tokenId]]) => tokenId)

    return tokens
  }

  async getBalance() {
    const acc = new AccountId32(this.signerAddress)
    const accountInfo = await this.client.query.system.account(acc)
    return accountInfo.data.free.toString()
  }

  async createCollection(data: CreateCollectionData, callback: ExtrinsicCallback) {
    return this.client.tx.nfts
      .create(this.signerAddress, {
        settings: BigInt(data.settings),
        mintSettings: {
          mintType: {
            type: data.mintSettings.mintType.type,
            value: data.mintSettings.mintType.value,
          },
          defaultItemSettings: data.mintSettings.defaultItemSettings,
        },
      })
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        callback,
      )
  }

  async setAttribute(data: SetAttributeData, callback: ExtrinsicCallback) {
    return this.client.tx.nfts
      .setAttribute(
        data.collectionId,
        data.itemId,
        {
          type: data.namespace.type,
          value: data.namespace.value ? new AccountId32(data.namespace.value) : undefined,
        },
        data.key,
        data.value,
      )
      .signAndSend(
        this.signerAddress,
        {
          signer: this.signer,
        },
        callback,
      )
  }

  async setMetadata(data: SetMetadataData, callback: ExtrinsicCallback) {
    return this.client.tx.nfts.setMetadata(data.collectionId, data.itemId, data.data).signAndSend(
      this.signerAddress,
      {
        signer: this.signer,
      },
      callback,
    )
  }

  async mintItem(data: MintExtrinsicData, callback: ExtrinsicCallback) {
    return this.client.tx.nfts.mint(data.collectionId, data.itemId, this.signerAddress, {}).signAndSend(
      this.signerAddress,
      {
        signer: this.signer,
      },
      callback,
    )
  }
}

