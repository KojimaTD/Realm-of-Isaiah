import { useEffect, useState } from "react";

/** Returns the id of the section that's currently active in the viewport */
export default function useScrollSpy(ids = [], offset = 80) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const handler = () => {
      let current = ids[0] || null;
      let bestDelta = Infinity;

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const delta = Math.abs(rect.top - offset);

        // prefer sections that are above the offset, closest to it
        if (rect.top - offset <= 0 && delta < bestDelta) {
          current = id;
          bestDelta = delta;
        }
      });

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return active;
}
