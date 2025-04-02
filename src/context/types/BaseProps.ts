import { PapiExtrinsicManager } from "@/utils/papi/papiExtrinsics";
import { TypedApi } from "polkadot-api";
import { dot } from "@polkadot-api/descriptors";

export interface BaseContextProps<TClient, TExtrinsicManager> {
  client: TClient | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  init: boolean;
  extrinsicManager: TExtrinsicManager;
}

export interface PapiContextProps
  extends BaseContextProps<TypedApi<typeof dot>, PapiExtrinsicManager> {
  chain?: ChainSpecData | null;
}

export interface ChainSpecData {
  name: string;
  genesisHash: string;
  properties: {
    ss58Format: number
    tokenDecimals: number
    tokenSymbol: string
  }
}