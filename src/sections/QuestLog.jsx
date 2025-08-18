import styles from "../styles/QuestLog.module.css";
import quests from "../data/quests.json";
import { useVisitor } from "../lib/useVisitor";

// ——— Files go in: /public/resume/<FILE>
const RESUME_FILE = "Isaiah_King_Resume.pdf"; 
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Isaiah_King_Resume.pdf`;
const GITHUB_URL = "https://github.com/IsaiahKing2120";

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
}

export default function QuestLog() {
  const { name } = useVisitor();

  return (
    <section id="questlog" className={styles.section} aria-labelledby="questlog-title">
      <header className={styles.header}>
        <h2 id="questlog-title" className={styles.title}>
          {name ? `${name}, here’s my education.` : "Quest Log — Education"}
        </h2>
        <p className={styles.subtitle}>
          Certificates and schooling that back up the work I’m doing.
        </p>
      </header>

      {/* Education cards */}
      <div className={styles.grid}>
        {quests.map((q) => (
          <article key={q.id} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{q.title}</h3>
              {q.date ? (
                <time className={styles.cardDate} dateTime={q.date}>
                  {formatDate(q.date)}
                </time>
              ) : null}
            </div>

            <p className={styles.cardSummary}>{q.summary}</p>

            {q.tags?.length ? (
              <ul className={styles.tags}>
                {q.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      {/* CTA bar — above the contact form */}
      <div className={styles.cta} role="group" aria-label="Quick links">
        <a className={styles.ctaBtn} href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
          Visit My GitHub
        </a>
        <a
          className={styles.ghostBtn}
          href={RESUME_PATH}
          download={RESUME_FILE}
          aria-label="Download resume as PDF"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
