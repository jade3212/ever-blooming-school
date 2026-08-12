"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AdmissionForm from "@/components/AdmissionForm";

type AdmissionHeroButtonProps = {
  label?: string;
};

export default function AdmissionHeroButton({ label = "Apply for Admission" }: AdmissionHeroButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal = open ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-primary/75 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Admission application"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative my-8 w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          aria-label="Close admission form"
        >
          ✕
        </button>
        <div className="max-h-[88vh] overflow-y-auto p-7 sm:p-10">
          <AdmissionForm embedded onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-primary shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:scale-105"
      >
        {label}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
