import type { ISubmittableResult } from "dedot/types"
import type { FrameSystemEventRecord } from "dedot/chaintypes"
import type { TxFinalizedPayload } from "polkadot-api"

export type ExtrinsicResult = ISubmittableResult<FrameSystemEventRecord> | TxFinalizedPayload

export function isDedotResult(result: ExtrinsicResult): result is ISubmittableResult<FrameSystemEventRecord> {
  return "status" in result && "txHash" in result
}

export function isPapiResult(result: ExtrinsicResult): result is TxFinalizedPayload {
  return "ok" in result
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

