"use client"

import type React from "react"
import { useState } from "react"
import type {
  CommonComponentProps,
  SetMetadataData,
  TransactionStatus as TransactionStatusType,
} from "@/utils/common/types"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/transactionUtils"

export const SetMetadataForm = ({
  extrinsicManager,
  isSignerEnabled,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [metadataData, setMetadataData] = useState<SetMetadataData>({
    collectionId: 0,
    itemId: 0,
    data: "",
  })

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatusType>({
    submitting: false,
    status: null,
    hash: null,
    error: null,
  })

  const handleCollectionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setMetadataData((prev) => ({
      ...prev,
      collectionId: value,
    }))
  }

  const handleItemIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setMetadataData((prev) => ({
      ...prev,
      itemId: value,
    }))
  }

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetadataData((prev) => ({
      ...prev,
      data: e.target.value,
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

      await extrinsicManager.setMetadata(metadataData, (result) => {
        const { status, hash, error } = extractTransactionStatus(result)

        setTransactionStatus({
          submitting: status !== "Finalized",
          status,
          hash,
          error,
        })

        onExtrinsicResult?.(result)
      })

      setMetadataData({
        collectionId: 0,
        itemId: 0,
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
            value={metadataData.collectionId}
            onChange={handleCollectionIdChange}
            required
            min="0"
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="itemId" className="block text-sm mb-1">
            Item ID
          </label>
          <input
            type="number"
            id="itemId"
            value={metadataData.itemId}
            onChange={handleItemIdChange}
            required
            min="0"
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="data" className="block text-sm mb-1">
            Metadata Data
          </label>
          <input
            type="text"
            id="data"
            value={metadataData.data}
            onChange={handleDataChange}
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

