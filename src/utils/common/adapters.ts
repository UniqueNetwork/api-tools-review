import type { ApiType, CreateCollectionData, ExtrinsicManager, ExtrinsicResult, MintExtrinsicData, SetAttributeData, SetMetadataData } from "./types"
import type { DedotExtrinsicManager } from "../dedot/dedotExtrinsics"
import type { PapiExtrinsicManager } from "../papi/papiExtrinsics"
import type { ISubmittableResult } from "dedot/types"
import type { FrameSystemEventRecord } from "dedot/chaintypes"
import type { TxFinalizedPayload } from "polkadot-api"

export function isDedotManager(manager: ExtrinsicManager, apiType: ApiType): manager is DedotExtrinsicManager {
  return apiType === "DEDOT"
}

export function isPapiManager(manager: ExtrinsicManager, apiType: ApiType): manager is PapiExtrinsicManager {
  return apiType === "PAPI"
}

export function isDedotResult(result: ExtrinsicResult): result is ISubmittableResult<FrameSystemEventRecord> {
  return "status" in result && "txHash" in result
}

export function isPapiResult(result: ExtrinsicResult): result is TxFinalizedPayload {
  return "ok" in result
}

export async function createCollection(
  apiType: ApiType,
  manager: ExtrinsicManager,
  data: CreateCollectionData,
  callback: (result: ExtrinsicResult) => void,
) {
  if (isDedotManager(manager, apiType)) {
    return manager.createCollectionExtrinsic(data, callback)
  } else {
    const result = await (manager as PapiExtrinsicManager).createCollectionExtrinsic(data)
    callback(result)
    return result
  }
}

export async function mintItem(
  apiType: ApiType,
  manager: ExtrinsicManager,
  data: MintExtrinsicData,
  callback: (result: ExtrinsicResult) => void,
) {
  if (isDedotManager(manager, apiType)) {
    return manager.mintExtrinsic(data, callback)
  } else {
    const result = await (manager as PapiExtrinsicManager).mintExtrinsic(data)
    callback(result)
    return result
  }
}

export async function setMetadata(
  apiType: ApiType,
  manager: ExtrinsicManager,
  data: SetMetadataData,
  callback: (result: ExtrinsicResult) => void,
) {
  if (isDedotManager(manager, apiType)) {
    return manager.setMetadata(data, callback)
  } else {
    const result = await (manager as PapiExtrinsicManager).setMetadata(data)
    callback(result)
    return result
  }
}

export async function setAttribute(
  apiType: ApiType,
  manager: ExtrinsicManager,
  data: SetAttributeData,
  callback: (result: ExtrinsicResult) => void,
) {
  if (isDedotManager(manager, apiType)) {
    return manager.setAttributes(data, callback)
  } else {
    const result = await (manager as PapiExtrinsicManager).setAttributes(data)
    callback(result)
    return result
  }
}

export function extractTransactionStatus(result: ExtrinsicResult) {
  if (isDedotResult(result)) {
    return {
      status: result.status?.type || null,
      hash: result.txHash || null,
      error: result.dispatchError?.type || null,
    }
  } else {
    return {
      status: result.ok ? "Finalized" : "Failed",
      hash: result.txHash || null,
      error: result.dispatchError?.type || null,
    }
  }
}

