import Image from "next/image";

const highlights = [
  {
    title: "Learning Through Play",
    description: "Young learners enjoy spaces where play, movement and interaction become part of their learning.",
    image: "/images/gallery/school-15.jpg",
  },
  {
    title: "Celebrating Together",
    description: "School celebrations give students opportunities to participate, express themselves and build confidence.",
    image: "/images/gallery/school-41.jpg",
  },
  {
    title: "Creative Activities",
    description: "Colourful, hands-on activities encourage children to explore ideas and enjoy learning.",
    image: "/images/gallery/school-61.jpg",
  },
  {
    title: "Outdoor Experiences",
    description: "Outdoor activities bring students together and encourage teamwork, movement and participation.",
    image: "/images/gallery/school-70.jpg",
  },
];

export default function Achievements() {
  return (
    <section id="school-life" className="scroll-mt-24 relative bg-primary py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light mb-4">
            School Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Learning, <span className="text-accent">Growing &amp; Celebrating</span>
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            A glimpse of the experiences that make school life meaningful for our students.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.title} width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
