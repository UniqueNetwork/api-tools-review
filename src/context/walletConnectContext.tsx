"use client";

// src/context/ExtensionContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import {
  Polkadot,
  IPolkadotExtensionAccount,
} from "@unique-nft/utils/extension";

// Define the context state shape
interface ExtensionContextProps {
  accounts: IPolkadotExtensionAccount[];
  selectedAccount: IPolkadotExtensionAccount | null;
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
  const [accounts, setAccounts] = useState<IPolkadotExtensionAccount[]>([]);
  const [selectedAccount, setSelectedAccount] =
    useState<IPolkadotExtensionAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Connect to the extension and request access
  const connectExtension = async () => {
    try {
      setLoading(true);
      setError(null);

      const { accounts } = await Polkadot.enableAndLoadAllWallets();

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
