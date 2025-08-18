// src/lib/useParallax.js
import { useEffect, useRef } from "react";

/**
 * Attaches mouse parallax to a container.
 * Moves child elements that have data-depth="0.02" (positive = follows cursor).
 */
function useParallaxInternal({ maxTilt = 8 } = {}) {
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (reduce || !supportsHover) return; // respect accessibility

    const onMove = (e) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;  // -0.5..0.5
        root.style.setProperty("--px", x.toFixed(4));
        root.style.setProperty("--py", y.toFixed(4));
        root.style.setProperty("--tiltX", (-y * maxTilt).toFixed(3) + "deg");
        root.style.setProperty("--tiltY", ( x * maxTilt).toFixed(3) + "deg");
      });
    };

    const reset = () => {
      cancelAnimationFrame(raf.current);
      root.style.setProperty("--px", "0");
      root.style.setProperty("--py", "0");
      root.style.setProperty("--tiltX", "0deg");
      root.style.setProperty("--tiltY", "0deg");
    };

    root.addEventListener("mousemove", onMove, { passive: true });
    root.addEventListener("mouseleave", reset);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf.current);
    };
  }, [maxTilt]);

  return ref;
}

// export both ways (named + default)
export function useParallax(opts) { return useParallaxInternal(opts); }
export default useParallaxInternal;
