"use client";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

const tiers = [
  {
    name: "Student",
    price: "₹0",
    period: "/mo",
    highlight: false,
    features: ["Log cases & skills", "View progress", "Basic analytics"],
    cta: "Get Started",
  },
  {
    name: "Faculty",
    price: "₹999",
    period: "/mo",
    highlight: true,
    features: ["Assessments", "Review logs", "Department dashboard"],
    cta: "Start Trial",
  },
  {
    name: "College Admin",
    price: "₹4,999",
    period: "/mo",
    highlight: false,
    features: ["Curriculum setup", "Compliance & reports", "Institution analytics"],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const gridRef = useStaggerReveal<HTMLDivElement>({ childSelector: ".pricing-card", y: 26, stagger: 0.1, duration: 0.7 });
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-[color:var(--brand-50)]/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600 text-base">Start free. Upgrade when you need more control.</p>
        </div>

        <div ref={gridRef} className="mt-12 grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`pricing-card with-ring card ${t.highlight ? "card-brand" : "card-muted"} card-hover p-8 md:p-10`}
            >
              <span aria-hidden className="gradient-ring" />
              {t.highlight && (
                <div className="absolute -top-3 right-4 badge badge-brand px-2.5 py-1.5">Most Popular</div>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                  {t.name}
                  {!t.highlight && <span className="badge badge-muted">Basic</span>}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-4xl md:text-5xl font-extrabold ${t.highlight ? "text-[color:var(--brand-600)]" : "text-slate-900"}`}>{t.price}</span>
                  <span className="text-slate-500">{t.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-base text-slate-700">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-50)] text-[color:var(--brand-600)]">
                        {/* check icon */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {t.cta === "Get Started" ? (
                    <a
                      href="https://nmcelogbook.onrender.com/"
                      className={`w-full inline-flex items-center justify-center ${t.highlight ? "btn-primary" : "btn-secondary"}`}
                    >
                      {t.cta}
                    </a>
                  ) : (
                    <button
                      onClick={() => window.dispatchEvent(new Event("open-auth-modal"))}
                      className={`w-full ${t.highlight ? "btn-primary" : "btn-secondary"}`}
                    >
                      {t.cta}
                    </button>
                  )}
                  <p className="mt-3 text-center text-xs text-slate-500">No credit card required.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
