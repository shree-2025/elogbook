"use client";

export default function DeviceServiceSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[var(--brand)] to-[color-mix(in_oklab,var(--brand),white_25%)]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Devices */}
        <div className="relative flex items-end justify-center">
          <div className="relative w-full max-w-xl">
            {/* Laptop */}
            <div className="rounded-[18px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
              <div className="h-8 bg-slate-100/80 border-b border-slate-200 flex items-center gap-2 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              {/* Content area with fixed aspect to prevent distortion */}
              <div className="relative bg-white">
                <div className="relative aspect-[16/9] w-full flex items-center justify-center p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img3.png"
                    alt="Laptop UI"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Mobile overlay */}
            <div className="absolute -left-10 -bottom-6 hidden sm:block">
              <div className="w-36 bg-white rounded-[28px] shadow-xl ring-1 ring-black/5 overflow-hidden">
                <div className="h-6 bg-slate-100 border-b border-slate-200" />
                <div className="relative aspect-[9/19.5] w-full flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img4.png"
                    alt="Mobile UI"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copy */}
        <div className="text-white">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Activity Tracking & Clinical Training Support</h2>
          <p className="mt-2 text-white/90 max-w-xl">
            eLogbook streamlines medical training for colleges and students. Log activities and cases, capture skills and
            assessments, and keep mentors and admins aligned with curriculum outcomes.
          </p>
          <ul className="mt-6 space-y-2 text-white/90">
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" /> Log cases, postings and procedures in seconds</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" /> Mentor sign‑offs and structured assessments</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" /> Real‑time dashboards for students and departments</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" /> Exportable reports for audits and accreditation</li>
          </ul>
          <div className="mt-6">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-50 transition">
              Learn More About This Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
