"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      if (res.ok) setStatus('success'); else throw new Error('failed');
    } catch {
      setStatus('error');
    }
  }

  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="container-fluid py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="font-extrabold text-xl"><span className="text-primary">Pulse</span>Track</div>
          <p className="text-muted mt-2 max-w-md">Actionable social analytics for creators & small businesses. Grow with clarity.</p>
          <div className="flex gap-4 mt-4">
            <Link aria-label="Twitter" href="https://twitter.com" className="hover:text-primary">Twitter</Link>
            <Link aria-label="GitHub" href="https://github.com" className="hover:text-primary">GitHub</Link>
            <Link aria-label="LinkedIn" href="https://linkedin.com" className="hover:text-primary">LinkedIn</Link>
          </div>
        </div>
        <form onSubmit={subscribe} className="glass p-4 rounded-2xl flex gap-3">
          <input
            aria-label="Email address"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none placeholder:text-muted"
            placeholder="Join our newsletter"
          />
          <button disabled={status==='loading'} className="btn btn-primary min-w-28">{status==='loading' ? 'Joining...' : status==='success' ? 'Joined!' : 'Join'}</button>
        </form>
      </div>
      <div className="container-fluid text-xs text-muted pb-8">© {new Date().getFullYear()} PulseTrack. All rights reserved.</div>
    </footer>
  );
}