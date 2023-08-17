import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Metadata } from "next/types";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const metadata: Metadata = {
  title: "Melody",
  description: "Collection of the most popular musics",
};

export default async function MusicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const token = session?.user?.accessToken;

  return (
    <>
      <Header isAuth={!!token} />
      <main className="min-h-[calc(100vh-122px)] text-gray-900 py-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
