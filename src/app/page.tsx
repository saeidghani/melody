import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        className="min-h-[calc(100vh-122px)] bg-primary-50 text-gray-900 
                   grid gap-40 py-16"
      >
        <Hero />
      </main>
      <Footer />
    </>
  );
}
