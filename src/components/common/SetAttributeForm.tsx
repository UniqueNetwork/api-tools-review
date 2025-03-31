"use client"

import type React from "react"
import { useState } from "react"
import type {
  CommonComponentProps,
  SetAttributesData,
  TransactionStatus as TransactionStatusType,
} from "@/utils/common/types"
import { setAttribute } from "@/utils/common/adapters"
import { TransactionStatus } from "./TransactionStatus"
import { extractTransactionStatus } from "@/utils/common/adapters"

export const SetAttributeForm = ({
  apiType,
  extrinsicManager,
  isSignerEnabled,
  onExtrinsicResult,
}: CommonComponentProps) => {
  const [attributesData, setAttributesData] = useState<SetAttributesData>({
    collectionId: "",
    itemId: "",
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

  const handleAttributesFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAttributesData((prev) => ({
      ...prev,
      [name]: value,
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

      await setAttribute(
        apiType,
        extrinsicManager,
        {
          collectionId: +attributesData.collectionId,
          itemId: +attributesData.itemId,
          namespace: attributesData.namespace,
          key: attributesData.key,
          value: attributesData.value,
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

      setAttributesData({
        collectionId: "",
        itemId: "",
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
            name="collectionId"
            value={attributesData.collectionId}
            onChange={handleAttributesFormChange}
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
            value={attributesData.itemId}
            onChange={handleAttributesFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="key" className="block text-sm mb-1">
            Key
          </label>
          <input
            type="text"
            id="attributeKey"
            name="key"
            value={attributesData.key}
            onChange={handleAttributesFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor="value" className="block text-sm mb-1">
            Value
          </label>
          <input
            type="text"
            id="attributeValue"
            name="value"
            value={attributesData.value}
            onChange={handleAttributesFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />

          <label htmlFor="namespaceType" className="block text-sm mb-1">
            Namespace Type
          </label>
          <select
            id="attributeNamespace"
            name="attributeNamespace"
            value={attributesData.namespace.type}
            onChange={(e) => {
              setAttributesData((prev) => ({
                ...prev,
                namespace: {
                  ...prev.namespace,
                  type: e.target.value as "Pallet" | "CollectionOwner" | "ItemOwner" | "Account"
                },
              }))
            }}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Pallet">Pallet</option>
            <option value="CollectionOwner">CollectionOwner</option>
            <option value="ItemOwner">ItemOwner</option>
            <option value="Account">Account</option>
          </select>
          {attributesData.namespace.type === "Account" && (
            <>
              <label htmlFor="AccountId" className="block text-sm mb-1">
                AccountId
              </label>
              <input
                id="accountId"
                name="accountId"
                type="text"
                value={attributesData.namespace.value.toString()}
                onChange={(e) => {
                  e.preventDefault()

                  setAttributesData((prev) => ({
                    ...prev,
                    namespace: {
                      ...prev.namespace,
                      value: e.target.value,
                    },
                  }))
                }}
                className="w-full px-3 py-2 border rounded"
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

