export interface BaseContextProps<TClient, TExtrinsicManager> {
  client: TClient | null;
  connected: boolean;
  connecting: boolean;
  error: Error | null;
  connect: () => Promise<void>;
  init: boolean;
  extrinsicManager: TExtrinsicManager;
}
