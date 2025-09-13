export default function TrustBadges() {
  const badges = [
    { name: "NMC Aligned" },
    { name: "Secure" },
    { name: "Multi-Dept" },
    { name: "Cloud" },
    { name: "Mobile" },
  ];
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500">
          {badges.map((b) => (
            <div key={b.name} className="inline-flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
