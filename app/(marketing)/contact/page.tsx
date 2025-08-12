"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const form = new FormData(e.target as HTMLFormElement);
      const res = await fetch('/api/contact', { method: 'POST', body: form });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
  return (
    <div className="container-fluid py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="text-muted mt-2">We usually reply within 1 business day.</p>
        <motion.form onSubmit={submit} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass rounded-3xl p-6 mt-6 space-y-4">
          <label className="block">
            <span className="text-sm">Your name</span>
            <input required name="name" className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input required type="email" name="email" className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">Message</span>
            <textarea required name="message" rows={5} className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" />
          </label>
          <button disabled={status==='loading'} className="btn btn-primary">{status==='loading' ? 'Sending...' : status==='success' ? 'Sent!' : 'Send message'}</button>
          {status==='error' && <div role="status" className="text-red-400">Something went wrong. Try again.</div>}
        </motion.form>
      </div>
      <div className="glass rounded-3xl overflow-hidden h-[420px]">
        <iframe title="Office location" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.834434509373!2d144.9537363153169!3d-37.81720997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1611811955207"></iframe>
      </div>
    </div>
  );
}