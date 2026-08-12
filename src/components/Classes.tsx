export default function Classes() {
  const classGroups = [
    {
      name: "Kindergarten",
      grades: ["Nursery", "LKG", "UKG"],
      description:
        "Play-based learning that sparks curiosity, builds social skills, and lays a strong foundation for lifelong learning.",
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      textColor: "text-pink-600",
      icon: "🌱",
    },
    {
      name: "Primary",
      grades: ["1st", "2nd", "3rd", "4th", "5th"],
      description:
        "Building core academic skills in literacy, numeracy, and science while nurturing creativity and critical thinking.",
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      icon: "📚",
    },
    {
      name: "Middle School",
      grades: ["6th", "7th", "8th"],
      description:
        "Advanced curriculum that prepares students for higher education with in-depth subject knowledge and analytical skills.",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      icon: "🎓",
    },
    {
      name: "Coming Soon",
      grades: ["9th", "10th"],
      description:
        "We are actively working on expanding to secondary education. Classes 9th and 10th are in progress and will open soon!",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      textColor: "text-amber-600",
      icon: "🚀",
      isComingSoon: true,
    },
  ];

  return (
    <section id="classes" className="scroll-mt-24 relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark mb-4">
            Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight text-balance">
            Classes We <span className="text-accent-dark">Offer</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            From the tender early years to the confident middle school phase,
            we have a structured program for every stage of your child&apos;s
            academic journey.
          </p>
        </div>

        {/* Class cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classGroups.map((group) => (
            <div
              key={group.name}
              className={`group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover-lift ${
                group.isComingSoon ? "ring-2 ring-amber-200" : ""
              }`}
            >
              {group.isComingSoon && (
                <div className="absolute -top-3 right-4 rounded-full bg-amber-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md">
                  In Progress
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${group.bgLight} flex items-center justify-center text-2xl mb-5`}
              >
                {group.icon}
              </div>

              <h3 className="text-lg font-bold text-primary">{group.name}</h3>

              {/* Grade pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.grades.map((grade) => (
                  <span
                    key={grade}
                    className={`inline-block rounded-md ${group.bgLight} ${group.textColor} px-2.5 py-1 text-xs font-semibold`}
                  >
                    {grade}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                {group.description}
              </p>

              {group.isComingSoon && (
                <div className="mt-4 rounded-lg bg-amber-50 border border-amber-100 p-3">
                  <p className="text-xs font-semibold text-amber-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Opening Soon — Stay Tuned!
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note about expansion */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-2xl">📢</span>
            <h3 className="text-lg font-bold text-amber-800">
              Exciting News: 9th &amp; 10th Classes in Progress!
            </h3>
          </div>
          <p className="text-sm text-amber-700 max-w-2xl mx-auto leading-relaxed">
            We are thrilled to announce that Ever Blooming English Medium
            School is expanding! The process to open Classes 9th and 10th is
            underway. This expansion will allow our students to continue their
            educational journey with us through secondary education. Stay
            tuned for updates on this exciting development!
          </p>
        </div>
      </div>
    </section>
  );
}
