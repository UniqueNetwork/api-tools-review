import type { DedotExtrinsicManager } from "../dedot/dedotExtrinsics"
import type { PapiExtrinsicManager } from "../papi/papiExtrinsics"
import type { ISubmittableResult } from "dedot/types"
import type { FrameSystemEventRecord } from "dedot/chaintypes"
import type { TxFinalizedPayload } from "polkadot-api"

export type ApiType = "DEDOT" | "PAPI"

export type ExtrinsicManager = DedotExtrinsicManager | PapiExtrinsicManager

export type ExtrinsicResult = ISubmittableResult<FrameSystemEventRecord> | TxFinalizedPayload

export interface CommonComponentProps {
  extrinsicManager: ExtrinsicManager
  isSignerEnabled: boolean
  signerAddress?: string
  onExtrinsicResult?: (result: ExtrinsicResult) => void
}

export type CreateCollectionData = {
  settings: bigint
  mintSettings: {
    mintType: {
      type: "Issuer" | "Public" | "HolderOf"
      value: number
    }
    defaultItemSettings: bigint
  };
};

export type SetAttributeData = {
  collectionId: number
  itemId: number
  namespace: {
    type: "Pallet" | "CollectionOwner" | "ItemOwner" | "Account"
    value: string
  }
  key: string
  value: string
}

export type MintExtrinsicData = {
  collectionId: number;
  itemId: number;
  owner: string;
};

export type SetMetadataData = {
  collectionId: number;
  itemId: number;
  data: string;
};

export type ItemData = {
  metadata: string | null
  attributes: string[][]
}

export type ChainInfo = {
  tokenSymbol?: string
  tokenDecimals?: string | number
  ss58Format?: string | number
}

export type TransactionStatus = {
  submitting: boolean
  status: string | null
  hash: string | null
  error: string | null
}
