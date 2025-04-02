"use client"

import type React from "react"
import { useState } from "react"
import type {
  CommonComponentProps,
  SetAttributeData,
  TransactionStatus as TransactionStatusType,
} from "@/utils/common/types"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/transactionUtils"

export const SetAttributeForm = ({
  extrinsicManager,
  isSignerEnabled,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [attributeData, setAttributeData] = useState<SetAttributeData>({
    collectionId: 0,
    itemId: 0,
    namespace: {
      type: "Pallet",
      value: "",
    },
    key: "",
    value: "",
  })

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatusType>({
    submitting: false,
    status: null,
    hash: null,
    error: null,
  })

  const handleCollectionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setAttributeData((prev) => ({
      ...prev,
      collectionId: value,
    }))
  }

  const handleItemIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setAttributeData((prev) => ({
      ...prev,
      itemId: value,
    }))
  }

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeData((prev) => ({
      ...prev,
      key: e.target.value,
    }))
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeData((prev) => ({
      ...prev,
      value: e.target.value,
    }))
  }

  const handleNamespaceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "Pallet" | "CollectionOwner" | "ItemOwner" | "Account"
    setAttributeData((prev) => ({
      ...prev,
      namespace: {
        ...prev.namespace,
        type: value,
        value: value !== "Account" ? "" : prev.namespace.value,
      },
    }))
  }

  const handleNamespaceValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeData((prev) => ({
      ...prev,
      namespace: {
        ...prev.namespace,
        value: e.target.value,
      },
    }))
  }

  const handleSetAttributes = async (e: React.FormEvent) => {
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

      await extrinsicManager.setAttribute(attributeData, (result) => {
        const { status, hash, error } = extractTransactionStatus(result)

        setTransactionStatus({
          submitting: status !== "Finalized",
          status,
          hash,
          error,
        })

        onExtrinsicResult?.(result)
      })

      setAttributeData({
        collectionId: 0,
        itemId: 0,
        namespace: {
          type: "Pallet",
          value: "",
        },
        key: "",
        value: "",
      })
    } catch (error) {
      console.error("Failed to set attributes:", error)
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
      <h2 className="text-lg font-semibold mb-4">Set Attribute</h2>
      <form onSubmit={handleSetAttributes} className="space-y-3">
        <div className="space-y-5">
          <label htmlFor="collectionId" className="block text-sm mb-1">
            Collection ID
          </label>
          <input
            type="number"
            id="collectionId"
            value={attributeData.collectionId}
            onChange={handleCollectionIdChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="itemId" className="block text-sm mb-1">
            Item ID
          </label>
          <input
            type="number"
            id="itemId"
            value={attributeData.itemId}
            onChange={handleItemIdChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="key" className="block text-sm mb-1">
            Key
          </label>
          <input
            type="text"
            id="attributeKey"
            value={attributeData.key}
            onChange={handleKeyChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="value" className="block text-sm mb-1">
            Value
          </label>
          <input
            type="text"
            id="attributeValue"
            value={attributeData.value}
            onChange={handleValueChange}
            required
            className="w-full px-3 py-2 border rounded"
          />

          <label htmlFor="namespaceType" className="block text-sm mb-1">
            Namespace Type
          </label>
          <select
            id="namespaceType"
            value={attributeData.namespace.type}
            onChange={handleNamespaceTypeChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Pallet">Pallet</option>
            <option value="CollectionOwner">CollectionOwner</option>
            <option value="ItemOwner">ItemOwner</option>
            <option value="Account">Account</option>
          </select>

          {attributeData.namespace.type === "Account" && (
            <>
              <label htmlFor="namespaceValue" className="block text-sm mb-1">
                Account Address
              </label>
              <input
                id="namespaceValue"
                type="text"
                value={attributeData.namespace.value}
                onChange={handleNamespaceValueChange}
                className="w-full px-3 py-2 border rounded"
                required={attributeData.namespace.type === "Account"}
              />
            </>
          )}
        </div>
        <button
          disabled={!isSignerEnabled || transactionStatus.submitting}
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {transactionStatus.submitting ? "Processing..." : "Set Attribute"}
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

