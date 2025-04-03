"use client"

import { useState } from "react"
import { ErrorAlert } from "./ErrorAlert"

interface Account {
  address: string
  name?: string
}

interface AccountSelectorProps {
  accounts: Account[]
  selectedAccount: Account | null
  onConnect: () => Promise<void>
  onSelectAccount: (address: string) => void
  balance: number | null
}

export const AccountSelector = ({
  accounts,
  selectedAccount,
  onConnect,
  onSelectAccount,
  balance,
}: AccountSelectorProps) => {
  const [connecting, setConnecting] = useState(false)
  const [connectionError, setConnectionError] = useState<string | null>(null)

  const handleConnect = async () => {
    try {
      setConnecting(true)
      setConnectionError(null)
      await onConnect()
    } catch (error) {
      console.error("Wallet connection error:", error)
      setConnectionError(
        error instanceof Error
          ? error.message
          : "Failed to connect wallet. Please make sure your wallet extension is installed and unlocked.",
      )
    } finally {
      setConnecting(false)
    }
  }

  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Account</h2>

      {connectionError && <ErrorAlert message={connectionError} onDismiss={() => setConnectionError(null)} />}

      {accounts.length === 0 ? (
        <button
          onClick={handleConnect}
          disabled={connecting}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center`}
        >
          {connecting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Connecting...
            </>
          ) : (
            "Connect Wallet"
          )}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {accounts.map((acc) => {
              const isSelected = acc.address === selectedAccount?.address
              return (
                <button
                  key={acc.address}
                  onClick={() => onSelectAccount(acc.address)}
                  className={`px-4 py-2 rounded border ${
                    isSelected ? "bg-blue-100 border-blue-500 text-blue-700" : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{acc.name || "Account"}</span>
                    <span className="text-xs text-gray-500">
                      {acc.address.substring(0, 6)}...
                      {acc.address.substring(acc.address.length - 4)}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAccount && balance !== null && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Balance: <span className="font-medium">{balance}</span>
              </p>
            </div>
          )}

          <button
            onClick={handleConnect}
            disabled={connecting}
            className={`text-sm text-blue-600 hover:text-blue-800 disabled:text-blue-300 disabled:cursor-not-allowed flex items-center`}
          >
            {connecting && (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-3 w-3 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Connecting...
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

