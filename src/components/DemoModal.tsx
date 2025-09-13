"use client";

import React from "react";

export default function DemoModal() {
  const [open, setOpen] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);

  React.useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-demo-modal", openHandler);
    return () => window.removeEventListener("open-demo-modal", openHandler);
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Product Demo</h3>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-slate-500 hover:text-slate-700">✕</button>
          </div>
          <div className="bg-black">
            {/* YouTube embed as default demo source; replace later with your own */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/K5KVEU3aaeQ?rel=0&modestbranding=1"
                title="eLogbook Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onError={() => setVideoError(true)}
              />
            </div>
            {videoError && (
              <div className="p-8 text-center text-white">
                <p className="opacity-90">If the video fails to load, check your connection or replace with your own demo at <code className="bg-white/10 px-1 rounded">public/assets/demo.mp4</code>.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
