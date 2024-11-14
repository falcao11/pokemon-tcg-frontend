import Container from "@/components/container";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

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
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
