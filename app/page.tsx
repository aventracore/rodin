import { Suspense } from 'react';
import { Hero3D } from '@/components/hero/Hero3D';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';

export default function Page() {
  return (
    <>
      <section className="container-fluid pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Understand your audience. <span className="text-primary">Grow</span> faster.
            </h1>
            <p className="mt-5 text-lg text-muted max-w-xl">
              PulseTrack unifies your social metrics across platforms with real-time insights, beautiful charts, and actionable recommendations.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/dashboard" className="btn btn-primary">Open Dashboard</a>
              <a href="#pricing" className="btn btn-secondary">See Pricing</a>
            </div>
          </div>
          <div className="glass rounded-3xl p-2">
            <Suspense fallback={<div className="h-[420px]"/>}>
              <Hero3D />
            </Suspense>
          </div>
        </div>
      </section>
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}