import { useEffect, useRef } from "react";

/** Adds `.in-view` class to elements with `.reveal` when they enter the viewport. */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const els = (root === document ? document : (root as HTMLElement)).querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
