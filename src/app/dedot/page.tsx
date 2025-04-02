"use client"

import { useExtension } from "@/context/walletConnectContext"
import type { ChainProperties } from "dedot/types/json-rpc"
import { useState, useEffect, useCallback } from "react"
import type { InjectedSigner } from "dedot/types"
import { useDedot } from "@/hooks/useDedot"
import { ConnectionStatus } from "@/components/common/ConnectionStatus"
import { AccountSelector } from "@/components/common/AccountSelector"
import { CollectionsExplorer } from "@/components/common/CollectionsExplorer"
import { ErrorAlert } from "@/components/common/ErrorAlert"
import { FormsSelector } from "@/components/common/FormsSelector"

export default function DedotPage() {
  const { client, connected, connecting, error: connectionError, connect, extrinsicManager } = useDedot()
  const { selectedAccount, connectExtension, accounts, selectAccount, error: walletError } = useExtension()

  const [signerEnabled, setSignerEnabled] = useState(false)
  const [balance, setBalance] = useState(null)
  const [chainProperties, setChainProperties] = useState<ChainProperties>(null)

  const handleConnectWallet = async () => {
    try {
      await connectExtension()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const fetchBalance = useCallback(async () => {
    if (!selectedAccount || !signerEnabled || !chainProperties?.tokenDecimals) return
    try {
      const balance = await extrinsicManager.getBalance()
      setBalance(+balance / 10 ** +chainProperties.tokenDecimals)
    } catch (error) {
      console.error("Error fetching balance:", error)
    }
  }, [extrinsicManager, selectedAccount, signerEnabled, chainProperties])

  useEffect(() => {
    const updateSigner = async () => {
      setSignerEnabled(false)
      if (!selectedAccount) return

      await extrinsicManager.setSigner(selectedAccount.polkadotSigner as InjectedSigner, selectedAccount.address)

      setSignerEnabled(true)
      fetchBalance()
    }

    updateSigner()
  }, [selectedAccount, extrinsicManager, fetchBalance])

  useEffect(() => {
    if (!connected && !connecting) {
      connect()
    }
  }, [connect, connected, connecting])

  useEffect(() => {
    const getChainProperties = async () => {
      try {
        const properties = await client.rpc.system_properties()
        setChainProperties(properties)
      } catch (err) {
        console.error("Failed to get chain properties:", err)
      }
    }

    if (!connected || !connected) return

    getChainProperties()
  }, [client, connected])

  const chainInfo = chainProperties
    ? {
        tokenSymbol: chainProperties.tokenSymbol?.toString(),
        tokenDecimals: chainProperties.tokenDecimals?.toString(),
        ss58Format: chainProperties.ss58Format?.toString(),
      }
    : null

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dedot Interface</h1>

        {walletError && <ErrorAlert message={`Wallet Error: ${walletError.message}`}/>}

        {connectionError && (
          <ErrorAlert message={`Connection Error: ${connectionError.message}`} onDismiss={() => {}} />
        )}

        <ConnectionStatus connected={connected} connecting={connecting} error={connectionError} chainInfo={chainInfo} />

        <div className="my-8">
          <AccountSelector
            accounts={accounts}
            selectedAccount={selectedAccount}
            onConnect={handleConnectWallet}
            onSelectAccount={selectAccount}
            balance={balance}
          />
        </div>

        {connected && signerEnabled && (
          <>
            <CollectionsExplorer
              extrinsicManager={extrinsicManager}
              signerAddress={selectedAccount?.address}
            />

            <FormsSelector
              extrinsicManager={extrinsicManager}
              isSignerEnabled={signerEnabled}
              signerAddress={selectedAccount?.address}
            />
          </>
        )}
      </div>
    </main>
  )
}

