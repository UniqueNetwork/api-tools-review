"use client"

import type React from "react"
import { useState } from "react"
import type {
  CommonComponentProps,
  CreateCollectionData,
  TransactionStatus as TransactionStatusType,
} from "@/utils/common/types"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/transactionUtils"

const initData: CreateCollectionData = {
  mintSettings: {
    mintType: {
      type: "Public",
      value: 0,
    },
    defaultItemSettings: BigInt(0),
  },
  settings: BigInt(0),
}

export const CreateCollectionForm = ({
  extrinsicManager,
  isSignerEnabled,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [createCollectionData, setCreateCollectionData] = useState<CreateCollectionData>(initData)

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatusType>({
    submitting: false,
    status: null,
    hash: null,
    error: null,
  })

  const handleCreateCollection = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!extrinsicManager) {
      console.error("Extrinsic manager is not initialized")
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
      await extrinsicManager.createCollection(createCollectionData, (result) => {
        const { status, hash, error } = extractTransactionStatus(result)
        setTransactionStatus((prev) => ({
          ...prev,
          submitting: status !== "Finalized",
          status,
          hash,
          error,
        }))
        onExtrinsicResult?.(result)
      })

      setCreateCollectionData(initData)
    } catch (error) {
      console.error("Failed to create collection:", error)
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
      <h2 className="text-lg font-semibold mb-4">Create Collection</h2>
      <form onSubmit={handleCreateCollection} className="space-y-3">
        <div>
          <label htmlFor="collectionMintType" className="block text-sm mb-1">
            Collection Mint Type
          </label>
          <select
            id="mintType"
            name="mintType"
            value={createCollectionData.mintSettings.mintType.type}
            onChange={(e) =>
              setCreateCollectionData((prev) => ({
                ...prev,
                mintSettings: {
                  ...prev.mintSettings,
                  mintType: {
                    type: e.target.value as "Issuer" | "Public" | "HolderOf",
                    value: 0,
                  },
                },
              }))
            }
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Public">Public</option>
            <option value="Issuer">Issuer</option>
            <option value="HolderOf">HolderOf</option>
          </select>
          {createCollectionData.mintSettings.mintType.type === "HolderOf" && (
            <>
              <label htmlFor="mintValue" className="block text-sm mb-1">
                Collection Mint Value
              </label>
              <input
                id="mintValue"
                name="mintValue"
                type="number"
                value={createCollectionData.mintSettings.mintType.value.toString()}
                onChange={(e) =>
                  setCreateCollectionData((prev) => ({
                    ...prev,
                    mintSettings: {
                      ...prev.mintSettings,
                      mintType: {
                        ...prev.mintSettings.mintType,
                        value: +e.target.value,
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 border rounded"
              />
            </>
          )}
          <label htmlFor="defaultItemSettings" className="block text-sm mb-1">
            Default Item Settings
          </label>
          <input
            id="defaultItemSettings"
            name="defaultItemSettings"
            type="number"
            value={createCollectionData.mintSettings.defaultItemSettings.toString()}
            onChange={(e) =>
              setCreateCollectionData((prev) => ({
                ...prev,
                mintSettings: {
                  ...prev.mintSettings,
                  defaultItemSettings: BigInt(e.target.value),
                },
              }))
            }
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <label htmlFor="settings" className="block text-sm mb-1">
          Settings
        </label>
        <input
          id="settings"
          name="settings"
          type="number"
          value={createCollectionData.settings.toString()}
          onChange={(e) =>
            setCreateCollectionData((prev) => ({
              ...prev,
              settings: BigInt(e.target.value),
            }))
          }
          className="w-full px-3 py-2 border rounded"
        />
        <button
          disabled={!isSignerEnabled || transactionStatus.submitting}
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {transactionStatus.submitting ? "Processing..." : "Create Collection"}
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

