import { useRef } from "react";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ item }) {
  const cardRef = useRef(null);
  const rafRef = useRef(0);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    // Respect reduced motion + ignore on touch
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches || !e.currentTarget.matches(":hover")) return;

    // throttle with rAF for smoothness
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width;   // 0..1
      const py = y / rect.height;  // 0..1

      // map to tilt (subtle!)
      const rotX = (py - 0.5) * -10; // up/down
      const rotY = (px - 0.5) * 14;  // left/right

      el.style.setProperty("--rx", `${rotX}deg`);
      el.style.setProperty("--ry", `${rotY}deg`);
      el.style.setProperty("--px", `${px}`);
      el.style.setProperty("--py", `${py}`);
    });
  };

  const reset = () => {
    const el = cardRef.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "0.5");
    el.style.setProperty("--py", "0.5");
  };

  return (
    <article
      ref={cardRef}
      className={styles.card}
      onMouseEnter={reset}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {/* shine highlight */}
      <div className={styles.shine} aria-hidden="true" />

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.summary}>{item.summary}</p>

      {item.tags?.length > 0 && (
        <ul className={styles.tags}>
          {item.tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      )}

      <div className={styles.links}>
        {item.repo && (
          <a className={styles.link} href={item.repo} target="_blank" rel="noreferrer noopener">
            View Repo
          </a>
        )}
        {item.demo && (
          <a className={styles.link} href={item.demo} target="_blank" rel="noreferrer noopener">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
