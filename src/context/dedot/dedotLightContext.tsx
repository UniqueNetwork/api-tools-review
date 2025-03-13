"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { DedotClient, SmoldotProvider } from "dedot";
import * as smoldot from "smoldot";
import { DedotExtrinsicsManager } from "@/utils/dedot/dedotExtrinsics";
import * as chains from "polkadot-api/chains";

interface DedotContextProps {
  client: DedotClient | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  chainId: string;
  init: boolean;
  extrinsicManager: DedotExtrinsicsManager;
}

export const DedotLightContext = createContext<DedotContextProps>({
  client: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  chainId: "",
  init: false,
  extrinsicManager: null,
});

const DEFAULT_CHAIN = "polkadot_asset_hub";

interface DedotProviderProps {
  children: ReactNode;
  chainId?: string;
}

export const DedotLightProvider: React.FC<DedotProviderProps> = ({
  children,
  chainId = DEFAULT_CHAIN,
}) => {
  const [client, setClient] = useState<DedotClient | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [extrinsicManager, setExtrinsicManager] =
    useState<DedotExtrinsicsManager | null>(null);

  const connect = async () => {
    try {
      setConnecting(true);
      setError(null);

      const sm = smoldot.start();

      const chainSpec = chains[chainId];

      const realyId = chainId.split("_")[0];

      const relayChain = await sm.addChain({ chainSpec: chains[realyId] });

      const chain = await sm.addChain({
        chainSpec,
        potentialRelayChains: [relayChain],
      });

      const provider = new SmoldotProvider(chain);

      const newClient = new DedotClient(provider);

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

  const value: DedotContextProps = {
    client,
    connected,
    connecting,
    error,
    chainId,
    connect,
    init: true,
    extrinsicManager,
  };

  return (
    <DedotLightContext.Provider value={value}>
      {children}
    </DedotLightContext.Provider>
  );
};
