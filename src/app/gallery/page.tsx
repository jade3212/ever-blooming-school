import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "./GalleryClient";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary to-primary-light py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light mb-4">
              Photo Gallery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Our School in <span className="text-accent">Pictures</span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Explore moments from learning, play, celebrations, activities and school life.
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GalleryClient images={galleryImages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
