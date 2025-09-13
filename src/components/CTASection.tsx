"use client";

import { useReveal } from "../hooks/useReveal";

export default function CTASection() {
  const ref = useReveal<HTMLDivElement>({ y: 20, delay: 0.05 });
  return (
    <section className="section relative" id="get-started">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(49,204,255,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(138,125,255,0.18),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(16,233,185,0.18),transparent_40%)]" />
      <div className="container mx-auto px-6 relative">
        <div ref={ref} className="glass-panel p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold heading-3d">Ready to transform medical training?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start your free trial and experience paperless, standardized, and data-driven learning.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <a href="#get-started" className="btn-glow">Start Free Trial</a>
            <a href="#demo" className="btn-outline">Request Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
