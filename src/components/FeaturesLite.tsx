"use client";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function FeaturesLite() {
  const items = [
    {
      title: "Case Records",
      desc: "Log cases with departments, diagnoses and notes.",
    },
    {
      title: "Skills & Procedures",
      desc: "Track competencies and get mentor sign‑offs.",
    },
    {
      title: "Attendance",
      desc: "Daily/clinic postings and duty rosters.",
    },
    {
      title: "Assessments",
      desc: "Formative, OSCE/OSPE and end‑block evaluations.",
    },
    {
      title: "Progress Analytics",
      desc: "Dashboards for students, mentors and admins.",
    },
    {
      title: "Certificates",
      desc: "Auto-generate completion and activity certificates.",
    },
  ];
  const gridRef = useStaggerReveal<HTMLDivElement>({ childSelector: ".feature-card", y: 24, stagger: 0.08, duration: 0.7 });
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Simple tools for students and powerful oversight for colleges.
          </p>
        </div>
        <div ref={gridRef} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="feature-card with-ring card card-muted card-hover p-6">
              <span aria-hidden className="gradient-ring" />
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
