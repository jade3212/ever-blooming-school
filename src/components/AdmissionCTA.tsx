import AdmissionHeroButton from "@/components/AdmissionHeroButton";

export default function AdmissionCTA() {
  return (
    <section id="admission" className="scroll-mt-24 relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary shadow-2xl">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-block w-fit rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light">
                Admissions Open 2025-26
              </span>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Give Your Child the <span className="text-accent">Best Start</span> in Life
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300">
                Start your child&apos;s admission application here. Fill in the simple form and our admission team will review the details.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-accent">
                  <span>📄</span> Required Documents
                </h4>
                <ul className="space-y-2">
                  {[
                    "Aadhar Card (Student & Parent)",
                    "Birth Certificate",
                    "Transfer Certificate (if applicable)",
                    "Recent Passport-size Photographs",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-secondary">✓</span>{doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The website has one admission form. This button opens it in the same popup used in the Hero. */}
            <div className="flex items-center justify-center rounded-2xl bg-white p-7 shadow-xl sm:p-8">
              <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-3xl">📝</div>
                <h3 className="text-2xl font-extrabold text-primary">Ready to Apply?</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Click below to open the admission application. You only need to fill the form once.
                </p>
                <div className="mt-6 flex justify-center">
                  <AdmissionHeroButton label="Open Admission Form" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
