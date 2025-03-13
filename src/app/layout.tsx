import { Inter } from "next/font/google";
import "./globals.css";
import { DedotWsProvider } from "../context/dedot/dedotWsContext";
import { ExtensionProvider } from "@/context/walletConnectContext";
import { PapiWsProvider } from "@/context/papi/papiWsContext";
import { DedotLightProvider } from "@/context/dedot/dedotLightContext";
import { PapiLightProvider } from "@/context/papi/papiLightContext";

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
  const apiType = process.env.API_TYPE;

  let childrenWithProvider;

  switch (apiType) {
    case "DEDOT":
      childrenWithProvider =
        providerType === "light" ? (
          <DedotLightProvider chainId={process.env.CHAIN_ID}>
            {children}
          </DedotLightProvider>
        ) : (
          <DedotWsProvider defaultEndpoint={process.env.WS_ENDPOINT}>
            {children}
          </DedotWsProvider>
        );
      break;

    default:
      childrenWithProvider =
        providerType === "light" ? (
          <PapiLightProvider chainId={process.env.CHAIN_ID}>
            {children}
          </PapiLightProvider>
        ) : (
          <PapiWsProvider defaultEndpoint={process.env.WS_ENDPOINT}>
            {children}
          </PapiWsProvider>
        );
      break;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ExtensionProvider>{childrenWithProvider}</ExtensionProvider>
      </body>
    </html>
  );
}
