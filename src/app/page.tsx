import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const token = session?.user?.accessToken;

  return (
    <>
      <Header isAuth={!!token} />
      <main
        className="min-h-[calc(100vh-122px)] text-gray-900 
                   grid gap-40 py-16"
      >
        <Hero isAuth={!!token} />
      </main>
      <Footer />
    </>
  );
}
