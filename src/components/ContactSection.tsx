"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const sectionRef = useReveal<HTMLDivElement>({ y: 24, duration: 0.8 });
  const formRef = useStaggerReveal<HTMLFormElement>({ childSelector: ".field", y: 22, stagger: 0.08, duration: 0.6 });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you could integrate with an API or email service
    setStatus("sent");
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-[var(--brand-50)]/40 to-white">
      <div ref={sectionRef} className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-slate-900">Contact us</h2>
          <p className="mt-2 text-slate-600 max-w-xl">
            Have questions or want a guided demo? Send us a message and we’ll get back to you.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700 text-sm">
            {[
              "Implementation support for departments",
              "Custom reports and data exports",
              "Pricing for colleges and institutions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-50)] text-[color:var(--brand-600)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="with-ring card card-muted p-6 md:p-8 space-y-4">
          <span aria-hidden className="gradient-ring" />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="field">
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
                placeholder="Dr. A. Kumar"
              />
            </div>
            <div className="field">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
                placeholder="you@college.edu"
              />
            </div>
          </div>
          <div className="field">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
              placeholder="Tell us about your college and requirements..."
            />
          </div>
          {status === "sent" ? (
            <div className="field flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47716 22 12 22Z" stroke="#16a34a" strokeWidth="2" />
                <path d="M9 12.5L11 14.5L15.5 9.5" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Thanks! We will contact you shortly.
            </div>
          ) : (
            <button className="field btn-primary w-full">Send message</button>
          )}
          <p className="field text-xs text-slate-500 text-center">We respect your privacy. We will not share your information.</p>
        </form>
      </div>
    </section>
  );
}
