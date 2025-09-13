"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [showAuth, setShowAuth] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Listen for global event from other components to open the modal
  useEffect(() => {
    function open() { setShowAuth(true); }
    window.addEventListener("open-auth-modal", open as EventListener);
    return () => window.removeEventListener("open-auth-modal", open as EventListener);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div
          className={`flex h-16 items-center justify-between rounded-full px-5 md:px-8 transition-all border ring-1 ${
            scrolled
              ? "bg-slate-900/90 shadow-[0_18px_40px_rgba(0,0,0,0.35)] border-slate-800 ring-slate-800"
              : "bg-slate-900/80 shadow-[0_14px_32px_rgba(0,0,0,0.30)] border-slate-800 ring-slate-800/60"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/elogo.png" alt="eLogbook" className="h-7 w-auto" />
            <span className="hidden sm:inline">eLogbook</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-sm text-slate-200">
            <Link
              href="/"
              className={`px-3 py-2 rounded-full transition ${
                pathname === "/" ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-full transition ${
                pathname === "/about" ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
            <a href="#features" className="px-3 py-2 rounded-full transition hover:text-white hover:bg-white/10">Features</a>
            <a href="#pricing" className="px-3 py-2 rounded-full transition hover:text-white hover:bg-white/10">Pricing</a>
            <a href="#contact" className="px-3 py-2 rounded-full transition hover:text-white hover:bg-white/10">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://nmcelogbook.onrender.com/" className="hidden md:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold shadow transition text-white" style={{background: "linear-gradient(90deg, var(--brand), var(--accent))"}}>
              Get Started
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-white/10 text-slate-200"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden container mx-auto px-4 mt-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-lg">
            <div className="flex flex-col gap-1 text-sm text-slate-200">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>About</Link>
              <a href="#features" className="px-3 py-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#pricing" className="px-3 py-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href="https://nmcelogbook.onrender.com/" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white" style={{background: "linear-gradient(90deg, var(--brand), var(--accent))"}}>Get Started</a>
            </div>
          </div>
        </div>
      )}
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </header>
  );
}
