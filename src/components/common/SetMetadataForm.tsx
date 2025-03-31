"use client"

import type React from "react"
import { useState } from "react"
import type {
  CommonComponentProps,
  MetadataData,
  TransactionStatus as TransactionStatusType,
} from "@/utils/common/types"
import { setMetadata } from "@/utils/common/adapters"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/adapters"

export const SetMetadataForm = ({
  apiType,
  extrinsicManager,
  isSignerEnabled,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [metadataData, setMetadataData] = useState<MetadataData>({
    collectionId: "",
    itemId: "",
    data: "",
  })

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatusType>({
    submitting: false,
    status: null,
    hash: null,
    error: null,
  })

  const handleMetadataFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMetadataData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSetMetadata = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!extrinsicManager) {
      console.error("Extrinsic manager is not initialized")
      return
    }

    try {
      setTransactionStatus({
        submitting: true,
        status: null,
        hash: null,
        error: null,
      })

      await setMetadata(
        apiType,
        extrinsicManager,
        {
          collectionId: +metadataData.collectionId,
          itemId: +metadataData.itemId,
          data: metadataData.data,
        },
        (result) => {
          const { status, hash, error } = extractTransactionStatus(result)

          setTransactionStatus({
            submitting: status !== "Finalized",
            status,
            hash,
            error,
          })

          onExtrinsicResult(result)
        },
      )

      setMetadataData({
        collectionId: "",
        itemId: "",
        data: "",
      })
    } catch (error) {
      console.error("Failed to set metadata:", error)
      setTransactionStatus({
        submitting: false,
        status: "Failed",
        hash: null,
        error: error.message || "Transaction failed",
      })
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Set Metadata</h2>

      <form onSubmit={handleSetMetadata} className="space-y-3">
        <div className="space-y-5">
          <label htmlFor="collectionId" className="block text-sm mb-1">
            Collection ID
          </label>
          <input
            type="number"
            id="collectionId"
            name="collectionId"
            value={metadataData.collectionId}
            onChange={handleMetadataFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="itemId" className="block text-sm mb-1">
            Item ID
          </label>
          <input
            type="number"
            id="itemId"
            name="itemId"
            value={metadataData.itemId}
            onChange={handleMetadataFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="metadata" className="block text-sm mb-1">
            Data
          </label>
          <input
            type="text"
            id="metadataData"
            name="data"
            value={metadataData.data}
            onChange={handleMetadataFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          disabled={!isSignerEnabled || transactionStatus.submitting}
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {transactionStatus.submitting ? "Processing..." : "Set Metadata"}
        </button>
      </form>

      {(transactionStatus.status || transactionStatus.hash || transactionStatus.error) && (
        <div className="mt-4">
          <TransactionStatus transaction={transactionStatus} />
        </div>
      )}
    </div>
  )
}

