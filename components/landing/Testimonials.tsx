"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Alex Rivera', role: 'YouTuber, 300k subs', quote: 'PulseTrack simplified my entire analytics workflow. I doubled my output quality.' },
  { name: 'Mia Chen', role: 'Brand Strategist', quote: 'The insights are insanely actionable. Our clients love the reports.' },
  { name: 'Jordan Lee', role: 'Indie App Founder', quote: 'Beautiful, fast, and surprisingly deep. Exactly what I needed.' },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[index];
  return (
    <section className="container-fluid py-20">
      <div className="glass rounded-3xl p-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">“{t.quote}”</p>
            <p className="text-muted mt-3">{t.name} — {t.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}