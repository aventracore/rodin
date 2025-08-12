"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-fluid py-24 text-center">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120 }} className="glass inline-block px-8 py-6 rounded-3xl">
        <div className="text-6xl font-extrabold">404</div>
        <p className="text-muted mt-2">We lost this page in the feed. Let’s get you back.</p>
        <Link href="/" className="btn btn-primary mt-4">Back home</Link>
      </motion.div>
    </div>
  );
}