"use client";

import React, { createContext, useState, ReactNode } from "react";
import { createClient, TypedApi } from "polkadot-api";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { dot } from "@polkadot-api/descriptors";
import { PapiExtrinsicManager } from "@/utils/papi/papiExtrinsics";
import { ChainSpecData, PapiContextProps } from "../types/BaseProps";

export const PapiWsContext = createContext<PapiContextProps>({
  client: null,
  chain: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  init: false,
  extrinsicManager: null,
});

const DEFAULT_ENDPOINT = "wss://westend-asset-hub-rpc.polkadot.io";

interface PapiProviderProps {
  children: ReactNode;
  defaultEndpoint?: string;
}

export const PapiWsProvider: React.FC<PapiProviderProps> = ({
  children,
  defaultEndpoint = DEFAULT_ENDPOINT,
}) => {
  const [client, setClient] = useState<TypedApi<typeof dot> | null>(null);
    const [chain, setChain] = useState<ChainSpecData | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [extrinsicManager, setExtrinsicManager] =
    useState<PapiExtrinsicManager>(null);

  const connect = async () => {
    try {
      setConnecting(true);
      setError(null);

      const provider = getWsProvider(defaultEndpoint);

      const client = createClient(provider)

      const typedClient = client.getTypedApi(dot);

      const extrinsicManager = new PapiExtrinsicManager(null, typedClient);

      setExtrinsicManager(extrinsicManager);

      const chainInfo = await client.getChainSpecData();

      console.log(chainInfo, 'CHAIN_INFO');

      setChain(chainInfo)
      setClient(typedClient);
      setConnected(true);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to connect"));
      console.error("Papi connection error:", err);
    } finally {
      setConnecting(false);
    }
  };

  const value: PapiContextProps = {
    client,
    chain,
    connected,
    connecting,
    error,
    connect,
    init: true,
    extrinsicManager,
  };

  return (
    <PapiWsContext.Provider value={value}>{children}</PapiWsContext.Provider>
  );
};
