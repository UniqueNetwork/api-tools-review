"use client";

import React, { createContext, useState, ReactNode } from "react";
import * as smoldot from "smoldot";
import * as chains from "polkadot-api/chains";
import { dot } from "@polkadot-api/descriptors";
import { createClient, TypedApi } from "polkadot-api";
import { PapiExtrinsicManager } from "@/utils/papi/papiExtrinsics";
import { getSmProvider } from "polkadot-api/sm-provider";
import { BaseContextProps } from "../types/BaseProps";

type PapiContextProps = BaseContextProps<TypedApi<typeof dot>, PapiExtrinsicManager>;

export const PapiLightContext = createContext<PapiContextProps>({
  client: null,
  connected: false,
  connecting: false,
  error: null,
  connect: async () => {},
  init: false,
  extrinsicManager: null,
});

const DEFAULT_CHAIN = "polkadot_asset_hub";

interface PapiProviderProps {
  children: ReactNode;
  chainSlug?: string;
}

export const PapiLightProvider: React.FC<PapiProviderProps> = ({
  children,
  chainSlug = DEFAULT_CHAIN,
}) => {
  const [client, setClient] = useState<TypedApi<typeof dot> | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [extrinsicManager, setExtrinsicManager] =
    useState<PapiExtrinsicManager | null>(null);

  const connect = async () => {
    try {
      setConnecting(true);
      setError(null);

      const sm = smoldot.start();

      const chainSpec = chains[chainSlug];

      const relaySlug = chainSlug.split("_")[0];

      const relayChain = await sm.addChain({ chainSpec: chains[relaySlug] });

      const chain = await sm.addChain({
        chainSpec,
        potentialRelayChains: [relayChain],
      });

      const provider = getSmProvider(chain);

      const client = createClient(provider).getTypedApi(dot);

      setExtrinsicManager(new PapiExtrinsicManager(null, client));

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
    connect,
    init: true,
    extrinsicManager,
  };

  return (
    <PapiLightContext.Provider value={value}>
      {children}
    </PapiLightContext.Provider>
  );
};
