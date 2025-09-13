"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useReveal<T extends HTMLElement>(options?: { y?: number; duration?: number; delay?: number }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: options?.y ?? 20 },
        { autoAlpha: 1, y: 0, duration: options?.duration ?? 0.9, delay: options?.delay ?? 0, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, [options?.y, options?.duration, options?.delay]);
  return ref;
}
