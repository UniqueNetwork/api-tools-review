"use client";

import { useExtension } from "@/context/walletConnectContext"
import { useState, useEffect } from "react"
import { usePapi } from "@/hooks/usePapi"
import type { PolkadotSigner } from "polkadot-api"
import { ConnectionStatus } from "@/components/common/ConnectionStatus"
import { AccountSelector } from "@/components/common/AccountSelector"
import { CollectionsExplorer } from "@/components/common/CollectionsExplorer"
import { ErrorAlert } from "@/components/common/ErrorAlert"
import { FormsSelector } from "@/components/common/FormsSelector"

export default function PapiPage() {
  const { connected, connecting, error: connectionError, connect, extrinsicManager, client, chain } = usePapi()
  const { selectedAccount, connectExtension, accounts, selectAccount, error: walletError } = useExtension()

  const [balance, setBalance] = useState(null)
  const [chainProperties, setChainProperties] = useState(null)
  const [signerEnabled, setSignerEnabled] = useState(false)

  const handleConnectWallet = async () => {
    try {
      await connectExtension()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  useEffect(() => {
    if (!connected && !connecting) {
      connect()
    }
  }, [])

  useEffect(() => {
    if (!client || !connected || !selectedAccount) return
    getBalance()
  }, [client, connected, selectedAccount])

  const getBalance = async () => {
    try {
      const balance = await client.query.Balances.Account.getValue(selectedAccount.address)
      setBalance(balance.free)
    } catch (err) {
      console.error("Failed to get balance:", err)
    }
  }

  useEffect(() => {
    if (!chain) return
    setChainProperties(chain.properties)
  }, [chain])


  useEffect(() => {
    if (!selectedAccount) {
      setSignerEnabled(false)
      return
    }

    extrinsicManager.setSigner(selectedAccount.polkadotSigner as PolkadotSigner, selectedAccount.address)
    setSignerEnabled(true)
  }, [selectedAccount, extrinsicManager, client])

  const chainInfo = chainProperties
    ? {
        tokenSymbol: chainProperties.tokenSymbol,
        tokenDecimals: chainProperties.tokenDecimals,
        ss58Format: chainProperties.ss58Format,
      }
    : null

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Papi Interface</h1>

        {walletError && <ErrorAlert message={`Wallet Error: ${walletError.message}`} />}

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

