import type { ISubmittableResult } from "dedot/types"
import type { FrameSystemEventRecord } from "dedot/chaintypes"
import type { TxFinalizedPayload } from "polkadot-api"
import type { Unsub } from "dedot/types"
import type { CreateCollectionData, MintExtrinsicData, SetAttributeData, SetMetadataData } from "./types"

export type ExtrinsicResult = ISubmittableResult<FrameSystemEventRecord> | TxFinalizedPayload

export type ExtrinsicCallback = (result: ExtrinsicResult) => void

export type TransactionReturn = Unsub | ExtrinsicResult | void

export interface IExtrinsicManager<T extends TransactionReturn = TransactionReturn> {
  getCollections(): Promise<number[]>
  getTokens(collectionId: number): Promise<number[]>
  getTokenData(
    collectionId: number,
    itemId: number,
  ): Promise<{
    metadata: string | null
    attributes: string[][]
  }>

  createCollection(data: CreateCollectionData, callback: ExtrinsicCallback): Promise<T>
  mintItem(data: MintExtrinsicData, callback: ExtrinsicCallback): Promise<T>
  setMetadata(data: SetMetadataData, callback: ExtrinsicCallback): Promise<T>
  setAttribute(data: SetAttributeData, callback: ExtrinsicCallback): Promise<T>
}
