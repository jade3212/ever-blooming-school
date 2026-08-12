import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-300">
      {/* Top wave */}
      <div className="h-16 bg-cream" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* School info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden">
                <Image src="/logo.jpg" alt="Ever Blooming School logo" width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Ever Blooming
                </h3>
                <p className="text-xs text-slate-400">
                  English Medium School
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mt-4 max-w-sm">
              Nurturing young minds with quality English medium education in
              Bijapur, Chhattisgarh. Building bright futures from Kindergarten
              through middle school.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#about", label: "About Us" },
                { href: "/#classes", label: "Classes Offered" },
                { href: "/#school-life", label: "School Life" },
                { href: "/#gallery", label: "Gallery" },
                { href: "/#admission", label: "Admissions" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
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
                <span className="text-sm text-slate-400">
                  Bijapur, Chhattisgarh
                  <br />
                  India - 494444
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-accent"
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
                <a
                  href="tel:+919479251828"
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  +91 94792 51828
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <a
                  href="https://instagram.com/ever_blooming_school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  @ever_blooming_school
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ever Blooming English Medium
            School. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Website:{" "}
            <span className="text-accent">www.everbloomingschool.edu.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
