"use client";
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'Creator', monthly: 12, yearly: 120, features: ['3 accounts', '30-day history', 'Email reports'] },
  { name: 'Team', monthly: 29, yearly: 290, features: ['10 accounts', '1-year history', 'Export CSV'] },
  { name: 'Business', monthly: 79, yearly: 790, features: ['Unlimited', '3-year history', 'Priority support'] },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="container-fluid py-20">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-sm text-muted">Monthly</span>
        <Switch.Root
          checked={yearly}
          onCheckedChange={setYearly}
          className="w-14 h-7 rounded-full bg-border relative data-[state=checked]:bg-primary transition-colors"
        >
          <Switch.Thumb className="block w-6 h-6 bg-foreground rounded-full translate-x-1 data-[state=checked]:translate-x-7 transition-transform" />
        </Switch.Root>
        <span className="text-sm text-muted">Yearly (save 2 months)</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div key={t.name} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="glass rounded-3xl p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-bold text-xl">{t.name}</h3>
              <div className="text-3xl font-extrabold">${yearly ? t.yearly : t.monthly}<span className="text-sm text-muted">/{yearly ? 'yr' : 'mo'}</span></div>
            </div>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-primary">•</span> {f}
                </li>
              ))}
            </ul>
            <a href="/dashboard" className="btn btn-primary w-full mt-6">Get started</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}