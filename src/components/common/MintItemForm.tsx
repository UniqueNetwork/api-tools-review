"use client"

import type React from "react"
import { useState } from "react"
import type { CommonComponentProps, MintExtrinsicData, TransactionStatus as TransactionStatusType } from "@/utils/common/types"
import { mintItem } from "@/utils/common/adapters"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/adapters"

const initData = { 
  collectionId: null,
  itemId: null,
  owner: ''
};

export const MintItemForm = ({
  apiType,
  extrinsicManager,
  isSignerEnabled,
  signerAddress,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [mintData, setMintData] = useState<MintExtrinsicData>(initData)

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatusType>({
    submitting: false,
    status: null,
    hash: null,
    error: null,
  })

  const handleMintFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMintData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!extrinsicManager || !signerAddress) {
      console.error("Extrinsic manager is not initialized or signer address is missing")
      return
    }

    setTransactionStatus((prev) => ({
      ...prev,
      submitting: true,
      status: null,
      hash: null,
      error: null,
    }))

    try {
      await mintItem(
        apiType,
        extrinsicManager,
        {
          collectionId: +mintData.collectionId,
          itemId: +mintData.itemId,
          owner: signerAddress,
        },
        (result) => {
          const { status, hash, error } = extractTransactionStatus(result)
          setTransactionStatus((prev) => ({
            ...prev,
            submitting: status !== "Finalized",
            status,
            hash,
            error,
          }))
          onExtrinsicResult(result)
        },
      )

      setMintData(initData)
    } catch (error) {
      console.error("Failed to mint item:", error)
      setTransactionStatus((prev) => ({
        ...prev,
        submitting: false,
        status: "Failed",
        hash: null,
        error: error.message || "Transaction failed",
      }))
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Mint Item</h2>
      <form onSubmit={handleMint} className="space-y-3">
        <div className="space-y-5">
          <label htmlFor="collectionId" className="block text-sm mb-1">
            Collection ID
          </label>
          <input
            type="number"
            id="collectionId"
            name="collectionId"
            value={mintData.collectionId}
            onChange={handleMintFormChange}
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
            value={mintData.itemId}
            onChange={handleMintFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          disabled={!isSignerEnabled || transactionStatus.submitting}
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {transactionStatus.submitting ? "Processing..." : "Mint Item"}
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
