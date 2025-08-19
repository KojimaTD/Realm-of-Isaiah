// src/sections/Showcase.jsx
import styles from "../styles/Showcase.module.css";

const GZ_DEMO = "https://isaiahking2120.github.io/realm-showcase-demo"; 
const GZ_REPO = "https://github.com/IsaiahKing2120/realm-showcase";     
const SITE_URL = "https://isaiahking2120.github.io/Realm-of-Isaiah/";
const SITE_REPO = "https://github.com/IsaiahKing2120/Realm-of-Isaiah";
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Isaiah_King_Resume.pdf`;

export default function Showcase() {
  return (
    <>
      {/* Ground Zero Project */}
      <section
        id="showcase"
        className={`glass-section ${styles.wrap}`}
        aria-labelledby="gz-title"
      >
        <header className={styles.header}>
          <h2 id="gz-title" className={styles.title}>
            Showcase — Loadout Planner (Ground Zero)
          </h2>
          <p className={styles.kicker}>
            A small, finished app that shows how I scope, build, and deliver.
          </p>
        </header>

        <div className={styles.panel}>
          <h3 className={styles.h3}>What it is</h3>
          <p>
            Players pick a faction, tune stats, and preview recommended gear. 
            It mirrors how I approach real features: requirements ➝ prototype ➝ feedback ➝ polish ➝ ship.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3 className={styles.h3}>My role</h3>
            <ul className={styles.list}>
              <li>Scoped with a one-page spec</li>
              <li>Built UI + recommendation logic</li>
              <li>Added unit tests + CI checks</li>
            </ul>
          </div>

          <div className={styles.panel}>
            <h3 className={styles.h3}>Tech & Keywords</h3>
            <p className={styles.badges}>
              <span>React</span><span>Vite</span><span>CSS Modules</span>
              <span>Jest</span><span>GitHub Actions</span><span>CI/CD</span>
            </p>
          </div>
        </div>

        <div className={styles.panel}>
          <h3 className={styles.h3}>Outcome</h3>
          <ul className={styles.list}>
            <li>Day 1 spec ➝ Day 2 prototype ➝ Day 3 polish + tests</li>
            <li>Documented tradeoffs in README</li>
            <li>Deployed on GH Pages with PR checks</li>
          </ul>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.btn} href={GZ_DEMO} target="_blank" rel="noreferrer noopener">Live Demo</a>
          <a className={styles.ghost} href={GZ_REPO} target="_blank" rel="noreferrer noopener">View Repo</a>
          <a className={styles.ghost} href={RESUME_PATH} download="Isaiah_King_Resume.pdf">
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* Portfolio Project */}
      <section
        id="showcase-portfolio"
        className={`glass-section ${styles.wrap}`}
        aria-labelledby="portfolio-title"
      >
        <header className={styles.header}>
          <h2 id="portfolio-title" className={styles.title}>
            Showcase — This Portfolio (Realm of Isaiah)
          </h2>
          <p className={styles.kicker}>
            You’re looking at it! A living React + Vite app that evolves as I grow.
          </p>
        </header>

        <div className={styles.panel}>
          <h3 className={styles.h3}>What it is</h3>
          <p>
            My personal portfolio and resume site. Features RPG-themed UI, glassmorphism,
            animated embers, a showcase section, and a downloadable resume as well as a contact/feedback form towards the bottom of the site.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3 className={styles.h3}>My role</h3>
            <ul className={styles.list}>
              <li>Planned structure + navigation</li>
              <li>Built components with React + CSS Modules</li>
              <li>Configured Vite + GH Pages deployment</li>
            </ul>
          </div>

          <div className={styles.panel}>
            <h3 className={styles.h3}>Tech & Keywords</h3>
            <p className={styles.badges}>
              <span>React</span><span>Vite</span><span>CSS Modules</span>
              <span>Responsive Design</span><span>GitHub Pages</span>
              <span>Portfolio Development</span>
            </p>
          </div>
        </div>

        <div className={styles.panel}>
          <h3 className={styles.h3}>Outcome</h3>
          <ul className={styles.list}>
            <li>Concept ➝ built ➝ deployed in under a week</li>
            <li>Acts as a showcase + resume hub</li>
            <li>Continuously updated as I learn</li>
          </ul>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.btn} href={SITE_URL} target="_blank" rel="noreferrer noopener">Live Site</a>
          <a className={styles.ghost} href={SITE_REPO} target="_blank" rel="noreferrer noopener">Source Code</a>
          <a className={styles.ghost} href={RESUME_PATH} download="Isaiah_King_Resume.pdf">
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </>
  );
}

