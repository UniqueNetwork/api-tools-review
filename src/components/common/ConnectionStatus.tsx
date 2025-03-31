"use client"

import type { ChainInfo } from "@/utils/common/types"

interface ConnectionStatusProps {
  connected: boolean
  connecting: boolean
  error: Error | null
  chainInfo: ChainInfo | null
}

export const ConnectionStatus = ({ connected, connecting, error, chainInfo }: ConnectionStatusProps) => {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
        <div className="flex items-center mb-4">
          <div className={`w-3 h-3 rounded-full mr-2 ${connected ? "bg-green-500" : "bg-red-500"}`}></div>
          <span>{connected ? "Connected" : "Disconnected"}</span>
        </div>

        {connecting && <p className="text-blue-600">Connecting...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </div>

      {connected && chainInfo && (
        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Chain Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Token Symbol:</strong> {chainInfo.tokenSymbol || "Unknown"}
            </p>
            <p>
              <strong>Token Decimals:</strong> {chainInfo.tokenDecimals?.toString() || "Unknown"}
            </p>
            <p>
              <strong>SS58 Format:</strong> {chainInfo.ss58Format?.toString() || "Unknown"}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

