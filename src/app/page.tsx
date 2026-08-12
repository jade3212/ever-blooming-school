import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Achievements from "@/components/Achievements";
import GalleryPreview from "@/components/GalleryPreview";
import AdmissionCTA from "@/components/AdmissionCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Achievements />
        <GalleryPreview />
        <AdmissionCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
