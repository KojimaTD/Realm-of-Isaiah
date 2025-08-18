import { useEffect, useState } from "react";
import { useVisitor } from "../lib/useVisitor";
import styles from "../styles/LandingGate.module.css";

/**
 * Full-screen gate:
 * - shows ONLY when no name and not skipped
 * - saves name to Visitor context (localStorage)
 * - "Skip" sets a flag so site shows without a name
 */
export default function LandingGate() {
  const { ready, name, skip, saveName, setSkipped } = useVisitor();
  const [val, setVal] = useState("");

  // autofocus once mounted
  useEffect(() => {
    const el = document.getElementById("visitorNameInput");
    if (el) el.focus();
  }, []);

  if (!ready) return null;
  if (name || skip) return null; // already identified -> don't render gate

  const onSubmit = (e) => {
    e.preventDefault();
    const cleaned = (val || "").trim();
    if (cleaned) saveName(cleaned);
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={`${styles.panel} glass-section`}>
        <h1 className={styles.title}>Welcome, traveler.</h1>
        <p className={styles.copy}>
          Enter your name so the realm can greet you properly — or skip if you’d rather remain mysterious.
        </p>

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            id="visitorNameInput"
            className={styles.input}
            placeholder="Your name…"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            maxLength={30}
          />
          <button className={styles.btn} type="submit">Enter</button>
          <button
            className={`${styles.btn} ${styles.ghost}`}
            type="button"
            onClick={() => setSkipped(true)}
            aria-label="Skip name entry"
          >
            Skip
          </button>
        </form>

        <p className={styles.small}>You can change this later from the greeting.</p>
      </div>
    </div>
  );
}
