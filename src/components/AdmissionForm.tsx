"use client";

import { useState, type FormEvent } from "react";

const classes = ["Nursery", "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
const inputClass = "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50";

type AdmissionFormProps = { embedded?: boolean; onClose?: () => void };

function FileField({ name, label, hint }: { name: string; label: string; hint: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-primary">{label}</label>
      <input id={name} name={name} type="file" accept="image/*,.pdf" className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-2 file:text-xs file:font-bold file:text-white hover:border-accent" />
      <p className="mt-1 text-xs text-slate-400">{hint}</p>
    </div>
  );
}

export default function AdmissionForm({ embedded = false, onClose }: AdmissionFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedDetails, setSubmittedDetails] = useState<{ studentName: string; parentName: string; parentPhone: string; classToAdmit: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const documentFields = [
        { name: "aadhar", key: "aadharDocument" },
        { name: "birthCertificate", key: "birthCertificate" },
        { name: "transferCertificate", key: "transferCertificate" },
      ] as const;
      const uploaded: Record<string, string> = {};

      for (const field of documentFields) {
        const file = formData.get(field.name);
        if (!(file instanceof File) || file.size === 0) continue;

        const uploadData = new FormData();
        uploadData.append("field", field.name);
        uploadData.append("file", file);

        const uploadResponse = await fetch("/api/admissions/upload", { method: "POST", body: uploadData });
        const uploadRaw = await uploadResponse.text();
        let uploadResult: { ok?: boolean; error?: string; url?: string } = {};
        try { uploadResult = JSON.parse(uploadRaw); } catch { throw new Error(`Could not upload ${field.name}. The server returned an unexpected response.`); }
        if (!uploadResponse.ok || !uploadResult.url) throw new Error(uploadResult.error || `Could not upload ${field.name}.`);
        uploaded[field.key] = uploadResult.url;
      }

      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: String(formData.get("studentName") || "").trim(),
          parentName: String(formData.get("parentName") || "").trim(),
          parentPhone: String(formData.get("parentPhone") || "").trim(),
          classToAdmit: String(formData.get("classToAdmit") || "").trim(),
          ...uploaded,
        }),
      });

      const raw = await response.text();
      let result: { ok?: boolean; error?: string; admission?: { studentName: string; parentName: string; parentPhone: string; classToAdmit: string } } = {};
      try { result = JSON.parse(raw); } catch { throw new Error("The admission server returned an unexpected response. Please try again."); }
      if (!response.ok) throw new Error(result.error || "We could not submit the application right now. Please try again or contact the school.");
      if (!result.admission) throw new Error("The school server did not confirm the application. Please try again.");

      setSubmittedDetails(result.admission);
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not submit the application right now. Please try again or contact the school.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success && submittedDetails) {
    return (
      <div className="relative overflow-hidden py-8 text-center">
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 36 }).map((_, i) => <span key={i} className="absolute h-2.5 w-2.5 animate-[confetti_1.8s_ease-out_forwards] rounded-sm bg-accent" style={{ left: `${(i * 29) % 100}%`, top: `${5 + ((i * 13) % 45)}%`, animationDelay: `${(i % 9) * 80}ms`, transform: `rotate(${i * 37}deg)` }} />)}
        </div>
        <div className="relative mx-auto mb-6 flex h-28 w-28 animate-[celebratePop_.7s_cubic-bezier(.17,.89,.32,1.49)] items-center justify-center rounded-full bg-accent/15">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-5xl shadow-xl">🎉</div>
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Welcome to Ever Blooming School</p>
        <h3 className="mt-2 text-3xl font-extrabold text-primary">Application Submitted! 🎊</h3>
        <p className="mx-auto mt-3 max-w-lg text-slate-600">Thank you, {submittedDetails.parentName}. We are happy to welcome your family to our school community.</p>
        <div className="mx-auto mt-6 max-w-md rounded-2xl bg-warm-gray p-5 text-left">
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div><span className="text-slate-400">Student</span><p className="font-semibold text-primary">{submittedDetails.studentName}</p></div>
            <div><span className="text-slate-400">Class</span><p className="font-semibold text-primary">{submittedDetails.classToAdmit}</p></div>
            <div><span className="text-slate-400">Parent / Guardian</span><p className="font-semibold text-primary">{submittedDetails.parentName}</p></div>
            <div><span className="text-slate-400">Phone</span><p className="font-semibold text-primary">{submittedDetails.parentPhone}</p></div>
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-500">Our admission team will contact you using the details provided.</p>
        {onClose && <button type="button" onClick={onClose} className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-light">Done</button>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
      <div className="mb-6 text-center"><h2 className="text-2xl font-extrabold text-primary">Admission Application Form</h2><p className="mt-1 text-sm text-slate-500">Please fill in the student and parent details below.</p></div>
      {error && <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}
      <div><label htmlFor="studentName" className="mb-1.5 block text-sm font-semibold text-primary">Name of the Student <span className="text-red-500">*</span></label><input type="text" id="studentName" name="studentName" required placeholder="Enter full name of the student" className={inputClass} /></div>
      <div><label htmlFor="parentName" className="mb-1.5 block text-sm font-semibold text-primary">Parent&apos;s / Guardian&apos;s Name <span className="text-red-500">*</span></label><input type="text" id="parentName" name="parentName" required placeholder="Enter parent or guardian full name" className={inputClass} /></div>
      <div><label htmlFor="parentPhone" className="mb-1.5 block text-sm font-semibold text-primary">Parent&apos;s Phone Number <span className="text-red-500">*</span></label><input type="tel" id="parentPhone" name="parentPhone" required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Enter 10-digit mobile number" className={inputClass} /><p className="mt-1 text-xs text-slate-400">10-digit mobile number</p></div>
      <div><label htmlFor="classToAdmit" className="mb-1.5 block text-sm font-semibold text-primary">Class to be Admitted <span className="text-red-500">*</span></label><select id="classToAdmit" name="classToAdmit" required defaultValue="" className={`${inputClass} bg-white`}><option value="" disabled>Select class</option>{classes.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>

      <div className="border-t border-slate-100 pt-6">
        <h3 className="text-lg font-extrabold text-primary">Documents</h3>
        <p className="mt-1 mb-4 text-xs text-slate-500">Upload each document separately. PDF, JPG, PNG or WEBP. Maximum 5 MB per file. Documents are optional at this stage.</p>
        <div className="space-y-5">
          <FileField name="aadhar" label="Aadhaar Card" hint="Upload Aadhaar separately." />
          <FileField name="birthCertificate" label="Birth Certificate" hint="Upload the birth certificate separately." />
          <FileField name="transferCertificate" label="Transfer Certificate (TC)" hint="Upload the TC separately if applicable." />
        </div>
      </div>

      <button type="submit" disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-primary shadow-lg shadow-accent/25 transition-all hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting Application..." : "Submit Application →"}</button>
      {!embedded && <p className="text-center text-xs text-slate-400">Your application and uploaded documents are sent securely to the school system.</p>}
    </form>
  );
}
