"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AuthModal({ open, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Welcome to eLogbook</h3>
            <button onClick={onClose} aria-label="Close" className="text-slate-500 hover:text-slate-700">✕</button>
          </div>
          <div className="px-6 py-5">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  const [tab, setTab] = React.useState<"login" | "signup">("login");
  return (
    <div>
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button onClick={() => setTab("login")} className={`px-3 py-1.5 text-sm font-semibold rounded-md ${tab === "login" ? "bg-white shadow" : "text-slate-600"}`}>Login</button>
        <button onClick={() => setTab("signup")} className={`px-3 py-1.5 text-sm font-semibold rounded-md ${tab === "signup" ? "bg-white shadow" : "text-slate-600"}`}>Sign up</button>
      </div>
      {tab === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

function Field({ label, type = "text", name, placeholder }: { label: string; type?: string; name: string; placeholder?: string }) {
  return (
    <label className="block text-sm mt-4">
      <span className="text-slate-700">{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

function LoginForm() {
  return (
    <form className="mt-4">
      <Field label="Email" type="email" name="email" placeholder="you@college.edu" />
      <Field label="Password" type="password" name="password" placeholder="••••••••" />
      <button type="submit" className="mt-5 w-full btn-primary">Login</button>
      <p className="mt-3 text-center text-xs text-slate-500">By continuing you agree to our Terms and Privacy Policy.</p>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="mt-4">
      <Field label="Full Name" name="name" placeholder="Dr. A. Kumar" />
      <Field label="Email" type="email" name="email" placeholder="you@college.edu" />
      <Field label="Password" type="password" name="password" placeholder="Create a password" />
      <button type="submit" className="mt-5 w-full btn-primary">Create Account</button>
      <p className="mt-3 text-center text-xs text-slate-500">We’ll never share your email.</p>
    </form>
  );
}

// React import for the Tabs state
import React from "react";
