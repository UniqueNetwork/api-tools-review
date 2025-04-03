"use client"

import type { TransactionStatus as TransactionStatusType } from "@/utils/common/types"

interface TransactionStatusProps {
  transaction: TransactionStatusType
}

export const TransactionStatus = ({ transaction }: TransactionStatusProps) => {
  const { submitting, status, hash, error } = transaction

  if (!submitting && !status && !hash && !error) {
    return null
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">Transaction Status</h2>

      {submitting && (
        <div className="flex items-center space-x-2 text-blue-600">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Transaction submitting...</span>
        </div>
      )}

      {status && (
        <div className={`mt-2 ${status === "Finalized" ? "text-green-600" : "text-blue-600"}`}>
          <p>
            <span className="font-medium">Status:</span> {status}
          </p>
        </div>
      )}

      {hash && (
        <div className="mt-2 break-all">
          <p className="font-medium">Transaction Hash:</p>
          <p className="text-sm text-gray-600">{hash}</p>
        </div>
      )}

      {error && (
        <div className="mt-2 text-red-600">
          <p>
            <span className="font-medium">Error:</span> {error}
          </p>
        </div>
      )}
    </div>
  )
}

