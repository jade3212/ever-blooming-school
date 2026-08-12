export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight text-balance">
            Contact <span className="text-accent-dark">Us</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Have questions about admissions, fees, or anything else? We&apos;re
            here to help. Reach out and we&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone */}
          <a
            href="tel:+919479251828"
            className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover-lift text-center no-underline"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
              <svg
                className="w-7 h-7 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Call Us</h3>
            <p className="mt-2 text-accent-dark font-semibold">
              +91 94792 51828
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Available during school hours
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ever_blooming_school"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover-lift text-center no-underline"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-5 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
              <svg
                className="w-7 h-7 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Instagram</h3>
            <p className="mt-2 text-pink-500 font-semibold">
              @ever_blooming_school
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Follow for updates &amp; events
            </p>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover-lift text-center sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <svg
                className="w-7 h-7 text-accent-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Visit Us</h3>
            <p className="mt-2 text-slate-600 font-medium">
              Bijapur, Chhattisgarh
            </p>
            <p className="mt-1 text-xs text-slate-400">India - 494444</p>
          </div>
        </div>

        {/* Website info */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Visit us at:{" "}
            <span className="font-semibold text-primary">
              www.everbloomingschool.edu.in
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
