import { Inter } from "next/font/google";
import "./globals.css";
import { DedotWsProvider } from "../context/dedotContext";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ExtensionProvider>
          <DedotWsProvider defaultEndpoint={process.env.WS_ENDPOINT}>
            {children}
          </DedotWsProvider>
        </ExtensionProvider>
      </body>
    </html>
  );
}
