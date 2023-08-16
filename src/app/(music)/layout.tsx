import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Metadata } from "next/types";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Melody",
  description: "Collection of the most popular musics",
};

export default async function ShopLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-122px)] text-gray-900 py-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
