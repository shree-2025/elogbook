"use client";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function FAQSection() {
  const faqs = [
    {
      q: "What is eLogbook?",
      a: "A digital platform for medical colleges to track learning, attendance, skills, and assessments—fully aligned with curriculum needs.",
    },
    {
      q: "Is there a free plan?",
      a: "Yes. Students can start for free. Colleges can request a demo and trial for departments.",
    },
    {
      q: "Can we export reports?",
      a: "Yes. Admins can export department and institution-level reports, including competencies and attendance.",
    },
    {
      q: "Does it work on mobile?",
      a: "Absolutely. eLogbook is responsive and works great on phones and tablets.",
    },
  ];
  const gridRef = useStaggerReveal<HTMLDivElement>({ childSelector: ".faq-card", y: 20, stagger: 0.07, duration: 0.6 });
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          <p className="mt-2 text-slate-600">Everything you need to know about the product and billing.</p>
        </div>
        <div ref={gridRef} className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="faq-card with-ring card card-muted p-6">
              <span aria-hidden className="gradient-ring" />
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
