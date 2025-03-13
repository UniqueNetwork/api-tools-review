"use client";

import React, { createContext, useState, ReactNode } from "react";
import { WsProvider, DedotClient } from "dedot";
import { DedotExtrinsicsManager } from "@/utils/dedot/dedotExtrinsics";

interface DedotWsContextProps {
  client: DedotClient | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  chainId: string;
  init: boolean;
  extrinsicManager: DedotExtrinsicsManager;
}

// Create the context with default values
export const DedotWsContext = createContext<DedotWsContextProps>({
  client: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  chainId: "",
  init: false,
  extrinsicManager: null,
});

// Default Polkadot endpoint
const DEFAULT_ENDPOINT = "wss://westend-asset-hub-rpc.polkadot.io";

// Provider component
interface DedotWsProviderProps {
  children: ReactNode;
  defaultEndpoint?: string;
}

export const DedotWsProvider: React.FC<DedotWsProviderProps> = ({
  children,
  defaultEndpoint = DEFAULT_ENDPOINT,
}) => {
  const [client, setClient] = useState<DedotClient | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [extrinsicManager, setExtrinsicManager] =
    useState<DedotExtrinsicsManager | null>(null);

  // Connect to a Polkadot node
  const connect = async () => {
    try {
      setConnecting(true);
      setError(null);

      // Create a WebSocket provider
      const provider = new WsProvider(defaultEndpoint);

      // Create the Dedot client
      const newClient = await DedotClient.create({
        provider,
      });

      // Wait for client to connect
      await newClient.connect();

      setExtrinsicManager(new DedotExtrinsicsManager("", newClient));

      setClient(newClient);
      setConnected(true);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to connect"));
      console.error("Dedot connection error:", err);
    } finally {
      setConnecting(false);
    }
  };

  const value: DedotWsContextProps = {
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
    <DedotWsContext.Provider value={value}>{children}</DedotWsContext.Provider>
  );
};
