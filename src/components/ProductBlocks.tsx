"use client";
import React from "react";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [err, setErr] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  React.useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      // already loaded from cache
      setLoaded(true);
    }
  }, [src]);
  if (err) {
    return (
      <div className={`with-ring card card-muted p-4 aspect-video w-full text-slate-500 flex items-center justify-center ${className ?? ""}`}>
        <span aria-hidden className="gradient-ring" />
        Add image at {src}
      </div>
    );
  }
  return (
    <figure className={`group with-ring relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md aspect-video bg-slate-50 ${className ?? ""}`}>
      <span aria-hidden className="gradient-ring" />
      {/* glossy reflection */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 right-0 h-24 opacity-30"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0) 100%)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-slate-200/80 to-slate-100" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        ref={imgRef}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.02] ${loaded ? "opacity-100" : "opacity-0"}`}
        onError={() => setErr(true)}
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
}

export default function ProductBlocks() {
  const gridRef = useStaggerReveal<HTMLDivElement>({ childSelector: ".product-row", y: 28, stagger: 0.12, duration: 0.75 });
  const sections: {
    title: string;
    kicker?: string;
    description: string;
    bullets: string[];
    image: string;
    imageLeft?: boolean;
  }[] = [
    {
      title: "Customer & Supplier Management",
      kicker: "Manage professional relationships efficiently",
      description:
        "Keep track of payables and receivables in one place. Monitor invoices, record payments, and streamline relationships for smooth operations.",
      bullets: [
        "Track accounts payables & receivables",
        "Aging reports on outstanding dues",
        "Generate transaction statements",
        "Track expenses beyond purchases",
      ],
      image: "/assets/img3.png",
      imageLeft: true,
    },
    {
      title: "Real-time Information At A Glance",
      description:
        "Instant access to key reports like inventory valuation, low stock alerts, pending orders, and product-wise transactions.",
      bullets: [
        "45+ filterable reports",
        "Drill down to see hidden details",
        "No more manual collation from spreadsheets",
      ],
      image: "/assets/img2.png",
      imageLeft: false,
    },
    {
      title: "Student Dashboard",
      kicker: "Track submissions and progress",
      description:
        "A clear overview of activities, approvals and reviews. Visualize submission trends and status distribution in one place.",
      bullets: [
        "Quick stats: pending, approved, rejected",
        "Submission trend charts",
        "Status distribution donut",
        "Fast access to submit/manage activities",
      ],
      image: "/assets/img1.png",
      imageLeft: true,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div ref={gridRef} className="container mx-auto px-6 space-y-16">
        {sections.map((s, idx) => (
          <div key={idx} className="product-row grid md:grid-cols-2 gap-10 items-center">
            {s.imageLeft && (
              <div>
                <SafeImg src={s.image} alt={s.title} />
              </div>
            )}
            <div>
              {s.kicker && <p className="text-emerald-600 font-semibold">{s.kicker}</p>}
              <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.description}</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {!s.imageLeft && (
              <div>
                <SafeImg src={s.image} alt={s.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
