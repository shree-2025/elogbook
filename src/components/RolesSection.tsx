"use client";

import { useReveal } from "../hooks/useReveal";

const roles = [
  {
    title: "College Admin",
    points: [
      "Curriculum setup",
      "Department dashboards",
      "Compliance & reports",
    ],
    glow: "from-sky-400/50 to-cyan-300/30",
  },
  {
    title: "Faculty / Mentors",
    points: [
      "Assess students",
      "Review case logs",
      "Track competencies",
    ],
    glow: "from-teal-300/50 to-emerald-300/30",
  },
  {
    title: "Students",
    points: [
      "Log cases & skills",
      "Attendance & tasks",
      "View progress & feedback",
    ],
    glow: "from-violet-400/50 to-purple-300/30",
  },
];

export default function RolesSection() {
  const ref = useReveal<HTMLDivElement>({ y: 28, delay: 0.05 });
  return (
    <section className="section" id="roles">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold heading-3d text-center">Who uses eLogbook?</h2>
        <p className="text-center mt-2 text-white/70 max-w-2xl mx-auto">
          Designed for the entire medical education ecosystem.
        </p>

        <div ref={ref} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.title}
              className={`relative glass-panel p-6 transition group hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-br ${r.glow}`} />
              <div className="relative">
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <ul className="mt-3 space-y-2 text-white/75 text-sm">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(56,224,196,0.7)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
