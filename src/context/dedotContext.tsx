"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { WsProvider, DedotClient } from "dedot";

// Define the context state shape
interface DedotContextProps {
  client: DedotClient | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  endpoint: string;
}

// Create the context with default values
const DedotWsContext = createContext<DedotContextProps>({
  client: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  endpoint: "",
});

// Custom hook for using the context
export const useDedot = () => useContext(DedotWsContext);

// Default Polkadot endpoint
const DEFAULT_ENDPOINT = "wss://westend-asset-hub-rpc.polkadot.io";

// Provider component
interface DedotProviderProps {
  children: ReactNode;
  defaultEndpoint?: string;
}

export const DedotWsProvider: React.FC<DedotProviderProps> = ({
  children,
  defaultEndpoint = DEFAULT_ENDPOINT,
}) => {
  const [client, setClient] = useState<DedotClient | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

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

      setClient(newClient);
      setConnected(true);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to connect"));
      console.error("Dedot connection error:", err);
    } finally {
      setConnecting(false);
    }
  };

  const value: DedotContextProps = {
    client,
    connected,
    connecting,
    error,
    endpoint: defaultEndpoint,
    connect,
  };

  return (
    <DedotWsContext.Provider value={value}>{children}</DedotWsContext.Provider>
  );
};
