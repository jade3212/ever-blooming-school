import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const featuredIds = [5, 1, 3, 15];

export default function GalleryPreview() {
  const images = featuredIds
    .map((id) => galleryImages.find((img) => img.id === id))
    .filter(Boolean);

  return (
    <section id="gallery" className="scroll-mt-24 relative bg-warm-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark mb-4">
              Our Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
              Moments That <span className="text-accent-dark">Matter</span>
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Explore everyday learning, celebrations, activities and special moments from our school.
            </p>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white shrink-0">
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img) => img && (
            <Link key={img.id} href={`/gallery?image=${img.id}`} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover-lift">
              <Image src={img.url} alt={img.title} width={900} height={675} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{img.category}</p>
                <h4 className="mt-1 text-white font-bold">{img.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
