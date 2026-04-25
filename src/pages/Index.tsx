import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Features } from "@/components/sections/Features";
import { WhyUs } from "@/components/sections/WhyUs";
import { AppDownload } from "@/components/sections/AppDownload";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background font-sans">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <WhyUs />
      <AppDownload />
      <Testimonials />
      <FinalCta />
      <Footer />
      <FloatingContact />
    </main>
  );
};

export default Index;
