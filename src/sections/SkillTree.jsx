import styles from "../styles/SkillTree.module.css";
import SkillTreeBoard from "../components/SkillTreeBoard";

export default function SkillTree() {
  return (
    <section id="skilltree" className={styles.section} aria-labelledby="skilltree-title">
      <header className={styles.header}>
        <h2 id="skilltree-title" className={styles.title}>Skill Tree</h2>
        <p className={styles.subtitle}>
          Honest self-assessments. Pick a path, grow the build.
        </p>
      </header>

      <SkillTreeBoard />
    </section>
  );
}
