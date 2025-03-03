"use client";

import { InjectedAccount } from "dedot/types";
import React, { createContext, useContext, useState, ReactNode } from "react";
import type {
  InjectedAccountWithMeta,
  InjectedWindowProvider,
} from "@polkadot/extension-inject/types";

// Define the context state shape
interface ExtensionContextProps {
  accounts: InjectedAccount[];
  selectedAccount: InjectedAccount | null;
  loading: boolean;
  error: Error | null;
  connectExtension: () => Promise<void>;
  selectAccount: (address: string) => void;
}

// Create the context with default values
const ExtensionContext = createContext<ExtensionContextProps>({
  accounts: [],
  selectedAccount: null,
  loading: false,
  error: null,
  connectExtension: async () => {},
  selectAccount: () => {},
});

// Custom hook for using the context
export const useExtension = () => useContext(ExtensionContext);

// Provider component
interface ExtensionProviderProps {
  children: ReactNode;
}

export const ExtensionProvider: React.FC<ExtensionProviderProps> = ({
  children,
}) => {
  const [accounts, setAccounts] = useState<InjectedAccount[]>([]);
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Connect to the extension and request access
  const connectExtension = async () => {
    try {
      setLoading(true);
      setError(null);

      const injectedExtension: InjectedWindowProvider = (window as any)
        .injectedWeb3?.["polkadot-js"];

      const ext = await injectedExtension.enable("polkadot-js");

      const accounts = await ext.accounts?.get();

      setAccounts(accounts);
    } catch (err) {
      console.error("Failed to connect extension:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to connect to extension")
      );
    } finally {
      setLoading(false);
    }
  };

  // Select an account by address
  const selectAccount = (address: string) => {
    const account = accounts.find((acc) => acc.address === address);
    if (account) {
      setSelectedAccount(account);
    }
  };

  const value: ExtensionContextProps = {
    accounts,
    selectedAccount,
    loading,
    error,
    connectExtension,
    selectAccount,
  };

  return (
    <ExtensionContext.Provider value={value}>
      {children}
    </ExtensionContext.Provider>
  );
};
