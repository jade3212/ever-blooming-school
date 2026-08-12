"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const statuses = ["pending", "contacted", "accepted", "rejected"] as const;
type Status = (typeof statuses)[number];
type Admission = {
  id: number;
  studentName: string;
  parentName: string;
  parentPhone: string;
  classToAdmit: string;
  aadharDocument: string | null;
  birthCertificate: string | null;
  transferCertificate: string | null;
  status: Status;
  createdAt: string;
};

function DocumentCard({ label, url }: { label: string; url: string | null }) {
  return <div className="rounded-xl border border-slate-200 bg-white p-4"><p className="text-xs font-semibold text-slate-400">{label}</p>{url ? <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-bold text-secondary hover:underline">View / Download</a> : <p className="mt-2 text-sm text-slate-400">Not uploaded</p>}</div>;
}

export default function AdminAdmissionsClient() {
  const router = useRouter();
  const [items, setItems] = useState<Admission[]>([]);
  const [pending, setPending] = useState(0);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const knownIds = useRef(new Set<number>());
  const firstLoad = useRef(true);

  async function load() {
    try {
      const response = await fetch("/api/admin/admissions", { cache: "no-store" });
      if (response.status === 401) { router.replace("/admin/login"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load admissions.");
      const incoming: Admission[] = data.admissions || [];
      const newItems = incoming.filter((item) => !knownIds.current.has(item.id));
      incoming.forEach((item) => knownIds.current.add(item.id));
      setItems(incoming);
      setPending(Number(data.stats?.pending ?? incoming.filter((item) => item.status === "pending").length));

      if (!firstLoad.current && newItems.length && "Notification" in window && Notification.permission === "granted") {
        for (const item of newItems) new Notification("New admission application 🎉", { body: `Student: ${item.studentName}\nParent: ${item.parentName}\nClass: ${item.classToAdmit}\nPhone: ${item.parentPhone}`, icon: "/logo.jpg" });
        document.title = `(${newItems.length}) New Admission • Ever Blooming`;
        setTimeout(() => { document.title = "Principal Admissions • Ever Blooming"; }, 8000);
      }
      firstLoad.current = false;
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load admissions.");
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); const timer = window.setInterval(load, 5000); return () => window.clearInterval(timer); }, []);

  async function enableNotifications() {
    if (!("Notification" in window)) { setError("This browser does not support desktop notifications."); return; }
    const permission = await Notification.requestPermission();
    setNotificationEnabled(permission === "granted");
    if (permission === "granted") new Notification("Ever Blooming Admissions", { body: "New admission notifications are enabled.", icon: "/logo.jpg" });
  }

  async function updateStatus(id: number, status: Status) {
    const response = await fetch("/api/admin/admissions", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    const data = await response.json();
    if (!response.ok) { setError(data.error || "Could not update application."); return; }
    setItems((prev) => prev.map((item) => item.id === id ? data.admission : item));
    setPending(data.admission.status === "pending" ? items.filter((item) => item.status === "pending").length + (items.find((item) => item.id === id)?.status === "pending" ? 0 : 1) : Math.max(0, pending - (items.find((item) => item.id === id)?.status === "pending" ? 1 : 0)));
  }

  async function logout() { await fetch("/api/auth/admin-logout", { method: "POST" }); router.replace("/admin/login"); }

  return (
    <main className="min-h-screen bg-warm-gray px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-primary p-7 text-white shadow-xl"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ever Blooming School</p><h1 className="mt-1 text-3xl font-extrabold">Principal Admissions Dashboard</h1><p className="mt-2 max-w-2xl text-sm text-slate-300">Private view of every admission application, including separately uploaded documents.</p></div><div className="flex flex-wrap gap-3"><button onClick={enableNotifications} className="rounded-xl bg-accent px-4 py-3 text-sm font-bold text-primary hover:bg-accent-light">{notificationEnabled ? "✓ Desktop Notifications On" : "Enable Notifications"}</button><button onClick={logout} className="rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10">Log out</button></div></div></header>
        {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}
        <div className="mb-7 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Applications</p><p className="mt-2 text-3xl font-extrabold text-primary">{items.length}</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Needs Attention</p><p className="mt-2 text-3xl font-extrabold text-accent-dark">{pending}</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last Checked</p><p className="mt-2 text-sm font-bold text-primary">{new Date().toLocaleTimeString()}</p></div></div>
        {loading ? <div className="rounded-3xl bg-white p-12 text-center shadow-sm">Loading applications...</div> : items.length === 0 ? <div className="rounded-3xl bg-white p-12 text-center shadow-sm"><div className="text-5xl">📥</div><h2 className="mt-4 text-xl font-bold text-primary">No applications yet</h2><p className="mt-1 text-sm text-slate-500">New applications will appear here automatically.</p></div> : <div className="space-y-5">{items.map((item) => <article key={item.id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><div className="flex flex-col gap-3 border-b border-slate-100 pb-5 lg:flex-row lg:items-start lg:justify-between"><div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-bold text-primary">APPLICATION #{item.id}</span><span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${item.status === "accepted" ? "bg-emerald-50 text-emerald-700" : item.status === "rejected" ? "bg-red-50 text-red-700" : item.status === "contacted" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>{item.status}</span></div><h2 className="mt-3 text-2xl font-extrabold text-primary">{item.studentName}</h2><p className="text-sm text-slate-500">Class {item.classToAdmit} • Submitted {new Date(item.createdAt).toLocaleString()}</p></div><div className="flex flex-wrap gap-2">{statuses.map((status) => <button key={status} onClick={() => updateStatus(item.id, status)} className={`rounded-lg px-3 py-2 text-xs font-bold capitalize ${item.status === status ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{status}</button>)}</div></div><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><div className="rounded-xl bg-warm-gray p-4"><p className="text-xs text-slate-400">Parent / Guardian</p><p className="mt-1 font-semibold text-primary">{item.parentName}</p></div><div className="rounded-xl bg-warm-gray p-4"><p className="text-xs text-slate-400">Phone</p><a href={`tel:${item.parentPhone}`} className="mt-1 block font-semibold text-primary hover:underline">{item.parentPhone}</a></div><div className="rounded-xl bg-warm-gray p-4"><p className="text-xs text-slate-400">Class</p><p className="mt-1 font-semibold text-primary">{item.classToAdmit}</p></div></div><div className="mt-5"><h3 className="mb-3 text-sm font-extrabold text-primary">Submitted Documents</h3><div className="grid gap-3 md:grid-cols-3"><DocumentCard label="Aadhaar Card" url={item.aadharDocument} /><DocumentCard label="Birth Certificate" url={item.birthCertificate} /><DocumentCard label="Transfer Certificate (TC)" url={item.transferCertificate} /></div></div></article>)}</div>}
      </div>
    </main>
  );
}
