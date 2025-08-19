// src/sections/About.jsx
import styles from "../styles/About.module.css";
import { useVisitor } from "../lib/useVisitor";

export default function About() {
  const { name } = useVisitor();
  const who = name?.trim() || "traveler";

  return (
    <section id="about" className={`glass-section ${styles.wrap}`} aria-labelledby="about-title">
      <header className={styles.header}>
        <h2 id="about-title" className={styles.title}>About Me</h2>
        <p className={styles.kicker}>
          Hey {who} — I’m Isaiah King. I’m 24, from Atlanta, and I took the self-taught route into tech.
        </p>
      </header>

      <div className={styles.grid}>
        <article className={styles.panel}>
          <h3 className={styles.h3}>Who I Am (for real)</h3>
          <p>
            I didn’t go to college. Instead, I built my way in by learning online, following tutorials, and most importantly,
            making projects like this site you’re on right now. Every skill here has been earned through persistence, late nights,
            and a lot of trial-and-error. 
          </p>
          <p>
            That means I know what it’s like to learn fast, adapt quickly, and figure things out without a safety net. 
            I’m not just a resume — I’m a person who genuinely loves solving problems and building things that work.
          </p>
        </article>

        <article className={styles.panel}>
          <h3 className={styles.h3}>How I Work</h3>
          <ul className={styles.list}>
            <li><strong>Break it down:</strong> tiny tickets, visible progress.</li>
            <li><strong>Communicate early:</strong> short updates, next steps, blockers.</li>
            <li><strong>Quality basics:</strong> linting, small tests, accessible UI.</li>
            <li><strong>Team play:</strong> ask good questions, leave things clearer than I found them.</li>
          </ul>
        </article>

        <article className={styles.panel}>
          <h3 className={styles.h3}>What I’m Practicing</h3>
          <ul className={styles.tags}>
            <li>React & JS patterns</li>
            <li>CSS Modules / responsive UI</li>
            <li>Git & GitHub flow</li>
            <li>Small CI pipelines</li>
            <li>UE5 gameplay prototypes</li>
          </ul>
        </article>

        <article className={styles.panel}>
          <h3 className={styles.h3}>What I’m Looking For (right now)</h3>
          <ul className={styles.list}>
            <li>Entry-level or apprenticeship roles where I can grow with guidance.</li>
            <li>Clear ownership on small features, frequent code reviews, and mentorship.</li>
            <li>Hybrid or remote friendly; East Coast hours are perfect.</li>
            <li>Happy to learn your stack — I’m quick, coachable, and persistent.</li>
          </ul>
        </article>

        <article className={styles.panel}>
          <h3 className={styles.h3}>Fun Facts</h3>
          <ul className={styles.list}>
            <li>RPG brain: love skill trees, feedback loops, and “leveling up” IRL.</li>
            <li>Comfortable asking “why” before “how.”</li>
            <li>Rubber-ducking: elite tier. 🦆</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
