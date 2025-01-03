import { TanstackProvider } from "@/components/providers/tanstack-provider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokemon TCG",
  description: "Pokemon TCG Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
