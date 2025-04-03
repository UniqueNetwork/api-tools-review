"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { InjectedSigner } from "dedot/types";
import { getWalletBySource, WalletAccount } from "@talismn/connect-wallets";
import {
  getInjectedExtensions,
  connectInjectedExtension,
  InjectedPolkadotAccount,
  InjectedExtension,
} from "polkadot-api/pjs-signer";


interface ExtendedWalletAccount extends WalletAccount {
  polkadotSigner: InjectedSigner;
}

//Use different accounts for PAPI(there own) and DEDOT(use extended types of connected wallet)
type Account = InjectedPolkadotAccount | ExtendedWalletAccount;

interface ExtensionContextProps {
  accounts: Account[];
  selectedAccount: Account | null;
  loading: boolean;
  error: Error | null;
  connectExtension: () => Promise<void>;
  selectAccount: (address: string) => void;
}

const ExtensionContext = createContext<ExtensionContextProps>({
  accounts: [],
  selectedAccount: null,
  loading: false,
  error: null,
  connectExtension: async () => {},
  selectAccount: () => {},
});

export const useExtension = () => useContext(ExtensionContext);

interface ExtensionProviderProps {
  children: ReactNode;
}

export const ExtensionProvider: React.FC<ExtensionProviderProps> = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const connectExtension = async () => {
    try {
      setLoading(true);
      setError(null);
  
      if (process.env.NEXT_PUBLIC_API_TYPE === "DEDOT") {
        const wallet = getWalletBySource("polkadot-js");
        if (wallet) {
          await wallet.enable("Account React Example");
          const polkadotAccounts = await wallet.getAccounts();
          console.log(polkadotAccounts, 'WALLET')

          const mappedAccounts: ExtendedWalletAccount[] = polkadotAccounts.map((account) => ({
            ...account,
            polkadotSigner: account.wallet.signer,
          }));
          setAccounts(mappedAccounts);
        } else {
          console.log("Wallet for polkadot-js not found");
        }
      } else {

        const extensions: string[] = getInjectedExtensions();

        const selectedExtension: InjectedExtension =
          await connectInjectedExtension(extensions[0]);
  
        const accounts: InjectedPolkadotAccount[] =
          selectedExtension.getAccounts();
        setAccounts(accounts);
      }
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
