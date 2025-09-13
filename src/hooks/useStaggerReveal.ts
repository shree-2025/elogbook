"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Stagger children animations when the container enters the viewport.
 * Apply to a parent and pass a CSS selector for children to reveal.
 */
export function useStaggerReveal<T extends HTMLElement>({
  childSelector,
  y = 24,
  duration = 0.8,
  stagger = 0.08,
  delay = 0,
}: {
  childSelector: string;
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(root.querySelectorAll<HTMLElement>(childSelector));
            if (children.length === 0) return;
            const ctx = gsap.context(() => {
              gsap.fromTo(
                children,
                { autoAlpha: 0, y },
                { autoAlpha: 1, y: 0, duration, stagger, delay, ease: "power3.out" }
              );
            }, root);
            observer.unobserve(entry.target);
            return () => ctx.revert();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [childSelector, y, duration, stagger, delay]);

  return ref;
}
