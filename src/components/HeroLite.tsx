"use client";

export default function HeroLite() {
  return (
    <section className="bg-gradient-to-b from-[var(--brand-50)] to-white">
      <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <div>
          <p className="text-[color:var(--brand-600)] font-semibold">eLogbook for Medical Colleges</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900">
          Smart Digital Logbook for Medical Education

          </h1>
          <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
            Track cases, skills and attendance. Assess students, monitor progress, and standardize training across departments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://nmcelogbook.onrender.com/" className="btn-primary">Get Started</a>
            <button onClick={() => window.dispatchEvent(new Event("open-demo-modal"))} className="btn-secondary">Request Demo</button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Easy onboarding</span>
            <span>•</span>
            <span>Secure & Compliant</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[22px] bg-white ring-1 ring-slate-200 shadow-[0_30px_80px_rgba(2,6,23,0.15)] overflow-hidden">
            {/* Browser top bar */}
            <div className="h-10 px-4 flex items-center justify-between bg-slate-50/90 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 hidden sm:flex items-center">
                <div className="w-full rounded-full bg-white border border-slate-200 px-4 py-1 text-[12px] text-slate-500 truncate">
                  https://elogbook.app/dashboard
                </div>
              </div>
              <div className="w-6" />
            </div>
            {/* Content */}
            <div className="bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img2.png"
                alt="eLogbook product screenshot"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
