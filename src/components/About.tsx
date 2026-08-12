import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - real school photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/gallery/school-15.jpg"
                alt="Students enjoying learning through play"
                width={1000}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-xl bg-white p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Our approach</p>
              <p className="mt-1 text-sm font-bold text-primary">Learning through care &amp; activity</p>
            </div>
          </div>

          {/* Right - content */}
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark mb-4">
              About Our School
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight text-balance">
              Where Every Child Finds Their{" "}
              <span className="text-accent-dark">Blossom</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Ever Blooming English Medium School, situated in the heart of
              Bijapur, Chhattisgarh, was founded with a singular vision: to
              provide a supportive English medium learning environment for children in our community. We believe that every child is like a seed —
              with the right nurturing, guidance, and environment, they bloom
              into something extraordinary.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our curriculum blends academic rigor with creative exploration,
              ensuring students develop not just intellectually, but
              emotionally and socially. Through learning, creative activities, play and school events, we give children opportunities to grow with confidence.
            </p>

            {/* Key values */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                  title: "Holistic Development",
                  desc: "Academics, sports, arts & values",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Innovative Teaching",
                  desc: "Smart classrooms & modern methods",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" />
                    </svg>
                  ),
                  title: "Safe Campus",
                  desc: "Secure & nurturing environment",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Expert Faculty",
                  desc: "Qualified & caring teachers",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-dark">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
