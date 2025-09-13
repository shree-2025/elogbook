"use client";

import { useReveal } from "../hooks/useReveal";

const features = [
  { title: "Case Records", icon: "🩺" },
  { title: "Attendance", icon: "📅" },
  { title: "Progress Analytics", icon: "📊" },
  { title: "Assessments", icon: "✅" },
  { title: "Certificates", icon: "🎓" },
  { title: "Skills Log", icon: "🧠" },
];

export default function FeaturesSection() {
  const ref = useReveal<HTMLDivElement>({ y: 28, delay: 0.05 });
  return (
    <section className="section" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold heading-3d text-center">Features</h2>
        <p className="text-center mt-2 text-white/70 max-w-2xl mx-auto">
          Powerful tools to streamline learning, training and evaluation.
        </p>

        <div ref={ref} className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-panel p-6 hover:shadow-[0_0_60px_rgba(138,125,255,0.15)] hover:-translate-y-1 transition group"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-3 text-sm text-white/70">
                {f.title} — experience a glowing, modern interface with smooth animations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
