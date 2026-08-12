"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function PrincipalLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");
      router.replace("/admin/admissions");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-primary px-4 py-12 text-primary">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <form onSubmit={submit} className="w-full rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Image src="/logo.jpg" alt="Ever Blooming School" width={80} height={80} className="h-20 w-20 rounded-2xl object-contain" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Private school portal</p>
            <h1 className="mt-2 text-3xl font-extrabold">Principal Login</h1>
            <p className="mt-2 text-sm text-slate-500">Access admission applications securely.</p>
          </div>

          {error && <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

          <div className="mt-7 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-semibold">Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <button disabled={loading} className="w-full rounded-xl bg-accent py-3.5 font-bold text-primary shadow-lg disabled:opacity-60">
              {loading ? "Signing in..." : "Sign in to Admissions"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
