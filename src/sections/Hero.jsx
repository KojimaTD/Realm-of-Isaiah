import styles from "../styles/Hero.module.css";
import { useVisitor } from "../lib/useVisitor";

export default function Hero() {
  const { name } = useVisitor();
  const who = name && name.trim() ? name.trim() : "traveler";

  return (
    <section id="hero" className={`glass-section ${styles.hero}`}>
      <div className="container">
        <h1 className={styles.title}>
          Greetings, {who} — welcome to my realm. I’m Isaiah King, a self-taught developer and novice adventurer.
        </h1>

        <p className={styles.sub}>
          I learn by building — small apps, game systems, and anything that makes me better than yesterday.
          If you’re hiring, I’m looking for an opportunity to learn from a strong team and contribute wherever I can.
        </p>

        <div className={styles.row}>
          <a className={styles.btn} href="#showcase">View Showcase</a>
          <a className={styles.btn} href="#projects">View Projects</a>
          <a className={styles.ghost} href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
