"use client";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  function login(e: React.FormEvent) {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('pt_authed', 'true');
    }
    router.replace('/dashboard');
  }
  return (
    <div className="container-fluid py-16 max-w-md">
      <h1 className="text-3xl font-extrabold">Login</h1>
      <p className="text-muted">Client-side only demo login.</p>
      <form onSubmit={login} className="glass rounded-2xl p-6 mt-6 space-y-3">
        <label className="block">
          <span className="text-sm">Email</span>
          <input required type="email" className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <input required type="password" className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" />
        </label>
        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
}