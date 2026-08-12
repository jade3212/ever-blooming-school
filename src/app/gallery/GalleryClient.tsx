"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { GalleryItem } from "@/data/gallery";

const filters = ["All", "Campus", "Classroom Learning", "Early Years & Play", "Celebrations", "Creative Activities", "Student Activities", "Outdoor Activities", "School Community", "Learning Environment", "Student Life", "School Events", "School Highlights"];

export default function GalleryClient({ images }: { images: GalleryItem[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedId = searchParams.get("image");
  const selected = selectedId ? images.find((img) => img.id === Number(selectedId)) : null;
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => filter === "All" ? images : images.filter((img) => img.category === filter),
    [images, filter]
  );

  const closeModal = () => router.push("/gallery", { scroll: false });

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              filter === item
                ? "bg-primary text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {visible.map((img) => (
          <button
            key={img.id}
            onClick={() => router.push(`/gallery?image=${img.id}`, { scroll: false })}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-md text-left"
          >
            <Image src={img.url} alt={img.title} width={900} height={675} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent">{img.category}</p>
              <h3 className="mt-1 text-sm font-bold text-white">{img.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg hover:bg-white" aria-label="Close gallery image">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="grid lg:grid-cols-[1.5fr_0.8fr]">
              <div className="bg-slate-100">
                <Image src={selected.url} alt={selected.title} width={1400} height={1050} className="max-h-[75vh] w-full object-contain" />
              </div>
              <div className="p-7 lg:p-9">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">{selected.category}</p>
                <h2 className="mt-2 text-2xl font-extrabold text-primary">{selected.title}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
