"use client";

import AdmissionHeroButton from "@/components/AdmissionHeroButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-accent-light text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              Welcome to our school
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white text-balance animate-fade-in-up">
              Ever Blooming{" "}
              <span className="text-accent">English Medium</span> School
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Nurturing young minds in the heart of Bijapur, Chhattisgarh.
              Where every child blossoms into a confident, curious, and
              compassionate learner ready to shape tomorrow.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <AdmissionHeroButton />
              <button
                type="button"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                Discover More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              {["Learning", "Play", "Creativity", "Community"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Real campus photo */}
          <div className="hidden lg:flex justify-center animate-slide-in-right">
            <div className="relative w-full max-w-xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/images/gallery/school-05.jpg"
                  alt="Ever Blooming School campus"
                  width={1000}
                  height={700}
                  className="h-[430px] w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Our school</p>
                <p className="mt-1 text-sm font-bold text-primary">A great place to learn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-400 uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="h-5 w-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
