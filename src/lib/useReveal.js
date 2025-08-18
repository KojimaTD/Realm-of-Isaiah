// src/lib/useReveal.js
import { useEffect, useMemo, useRef } from "react";

/**
 * useReveal — add scroll-reveal classes to an element when it enters the viewport.
 *
 * You'll need these styles in your global CSS:
 * .reveal { opacity: 0; transform: translateY(16px) scale(.98); transition: opacity .5s ease, transform .5s ease; }
 * .reveal--visible { opacity: 1; transform: translateY(0) scale(1); }
 *
 * Usage:
 *   import useReveal from "../lib/useReveal"; // or: import { useReveal } from "../lib/useReveal";
 *   const ref = useReveal({ threshold: 0.2, once: true });
 *   return <section ref={ref} className={styles.section}>...</section>;
 */
function useRevealInternal(options = {}) {
  const ref = useRef(null);

  // Keep ESLint happy; rebuild opts only when 'options' changes
  const opts = useMemo(() => {
    return {
      threshold: 0.15,
      rootMargin: "0px",
      once: true,
      baseClass: "reveal",
      visibleClass: "reveal--visible",
      ...options,
    };
  }, [options]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ensure base class is applied immediately
    el.classList.add(opts.baseClass);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(opts.visibleClass);
            if (opts.once) io.unobserve(el);
          } else if (!opts.once) {
            el.classList.remove(opts.visibleClass);
          }
        });
      },
      { threshold: opts.threshold, rootMargin: opts.rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return ref;
}

// Export BOTH styles so either import works
export function useReveal(options) {
  return useRevealInternal(options);
}
export default useRevealInternal;
