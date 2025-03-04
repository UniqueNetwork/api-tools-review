import { Inter } from "next/font/google";
import "./globals.css";
import { DedotWsProvider } from "../context/dedotWsContext";
import { DedotLightProvider } from "../context/dedotLightContext";
import { ExtensionProvider } from "@/context/walletConnectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Polkadot DApp with DeDot",
  description:
    "A Next.js application using DeDot library for Polkadot blockchain interaction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const providerType = process.env.PROVIDER_TYPE;
  const childrenWithProvider =
    providerType === "light" ? (
      <DedotLightProvider chainId={process.env.CHAIN_ID}>
        {children}
      </DedotLightProvider>
    ) : (
      <DedotWsProvider defaultEndpoint={process.env.WS_ENDPOINT}>
        {children}
      </DedotWsProvider>
    );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ExtensionProvider>{childrenWithProvider}</ExtensionProvider>
      </body>
    </html>
  );
}
