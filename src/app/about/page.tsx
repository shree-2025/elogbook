export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">About eLogbook</h1>
      <p className="mt-4 text-slate-600 max-w-3xl">
        eLogbook is built for medical colleges to digitize learning and training. Students can log cases and skills,
        mentors can assess and sign‑off competencies, and admins get powerful analytics for compliance and reporting.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: "Mission", desc: "Standardize training and make learning outcomes measurable and visible." },
          { title: "Trust", desc: "Secure, role‑based access with exportable audit trails and reports." },
          { title: "Support", desc: "Dedicated onboarding and responsive support for departments and colleges." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
