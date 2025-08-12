"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const timeline = [
  { year: '2023', text: 'PulseTrack concept born to help creators.' },
  { year: '2024', text: 'Private beta with 200 creators.' },
  { year: '2025', text: 'Public launch with team features.' },
];

const team = [
  { name: 'Ava Morgan', role: 'CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sam Patel', role: 'CTO', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Lena Ortiz', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop' },
];

export default function AboutPage() {
  return (
    <div className="container-fluid py-16">
      <h1 className="text-4xl font-extrabold">About PulseTrack</h1>
      <p className="text-muted mt-3 max-w-2xl">We are building the simplest, most beautiful way to understand social media performance.</p>

      <section className="mt-12">
        <h2 className="font-bold text-2xl mb-6">Our Journey</h2>
        <div className="relative pl-6 border-l-2 border-primary/50">
          {timeline.map((t, i) => (
            <motion.div key={t.year} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="mb-6">
              <div className="text-primary font-semibold">{t.year}</div>
              <div>{t.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-bold text-2xl mb-6">Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="group glass rounded-2xl overflow-hidden">
              <div className="relative h-56">
                <Image alt={m.name} src={m.img} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{m.name}</div>
                <div className="text-muted">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}