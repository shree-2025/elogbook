"use client";

export default function CTALite() {
  return (
    <section id="get-started" className="py-16 bg-emerald-600">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Ready to digitize your training?</h2>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">
          Start your free trial or request a guided demo for your department.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-emerald-700 px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-50 transition">
            Start Free Trial
          </a>
          <button onClick={() => window.dispatchEvent(new Event("open-demo-modal"))} className="inline-flex items-center justify-center rounded-lg border border-white/80 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
