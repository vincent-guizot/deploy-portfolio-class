import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import AboutStats from "@/components/sections/AboutStats";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />
      <TrustedBrands />
      <AboutStats />
      <Process />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />

      <Footer />
    </main>
  );
}
