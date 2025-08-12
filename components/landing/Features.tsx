"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Unified Insights',
    description: 'Aggregate metrics from TikTok, Instagram, YouTube, and X in one view.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Real-time Alerts',
    description: 'Get notified when posts trend or audience spikes happen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Post Performance',
    description: 'Identify what works with AI-powered content insights.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20L10 10l4 4 6-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
  },
];

export function Features() {
  return (
    <section className="container-fluid py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold">Everything you need to grow</h2>
        <p className="text-muted mt-3">From unified dashboards to smart alerts, PulseTrack streamlines your analytics workflow.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl overflow-hidden group"
          >
            <div className="p-6 flex items-center gap-3">
              <div className="text-primary">{f.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-muted">{f.description}</p>
              </div>
            </div>
            <div className="relative h-44">
              <Image src={f.img} alt="Feature image" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}