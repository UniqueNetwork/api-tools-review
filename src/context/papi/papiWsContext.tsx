"use client";

import React, { createContext, useState, ReactNode } from "react";
import { createClient, TypedApi } from "polkadot-api";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { dot } from "@polkadot-api/descriptors";
import { PapiExtrinsicManager } from "@/utils/papi/papiExtrinsics";

interface PapiContextProps {
  client: TypedApi<typeof dot> | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  chainId: string;
  init: boolean;
  extrinsicManager: PapiExtrinsicManager;
}

export const PapiWsContext = createContext<PapiContextProps>({
  client: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  chainId: "",
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

      const client = createClient(provider).getTypedApi(dot);

      const extrinsicManager = new PapiExtrinsicManager(null, client);

      setExtrinsicManager(extrinsicManager);

      setClient(client);
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
    connected,
    connecting,
    error,
    chainId: defaultEndpoint,
    connect,
    init: true,
    extrinsicManager,
  };

  return (
    <PapiWsContext.Provider value={value}>{children}</PapiWsContext.Provider>
  );
};
