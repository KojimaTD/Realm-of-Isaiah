import styles from "../styles/SkillTreeBoard.module.css";


const TREE = [
  {
    branch: "Frontend",
    color: "teal",
    skills: [
      { name: "HTML", tier: "Apprentice" },
      { name: "CSS", tier: "Apprentice" },
      { name: "JavaScript", tier: "Apprentice" },
      { name: "React (Basics)", tier: "Novice" },
      { name: "Routing", tier: "Novice" },
      { name: "State Mgmt", tier: "Novice" },
    ],
  },
  {
    branch: "Backend",
    color: "blue",
    skills: [
      { name: "Node.js", tier: "Novice" },
      { name: "Express", tier: "Novice" },
      { name: "REST APIs", tier: "Novice" },
      { name: "Auth Basics", tier: "Novice" },
    ],
  },
  {
    branch: "Tools & Workflow",
    color: "amber",
    skills: [
      { name: "Git", tier: "Adept" },
      { name: "GitHub", tier: "Apprentice" },
      { name: "VS Code", tier: "Novice" },
      { name: "Debugging", tier: "Novice" },
      { name: "NPM", tier: "Novice" },
    ],
  },
];

export default function SkillTreeBoard() {
  return (
    <div className={styles.board} role="group" aria-label="RPG Skill Tree">
      {TREE.map((branch) => (
        <Branch key={branch.branch} {...branch} />
      ))}
    </div>
  );
}

function Branch({ branch, color, skills }) {
  return (
    <section className={`${styles.branch} ${styles[`c_${color}`]}`} aria-labelledby={`branch-${branch}`}>
      <h3 id={`branch-${branch}`} className={styles.branchTitle}>{branch}</h3>
      <div className={styles.column}>
        {skills.map((s, i) => (
          <Node key={s.name} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Node({ name, tier, index }) {
  return (
    <div className={styles.node} data-tier={tier} style={{ "--idx": index }}>
      <span className={styles.orb} aria-hidden="true" />
      <div className={styles.label}>
        <strong>{name}</strong>
        <small className={styles.tier}>{tier}</small>
      </div>
      {/* connector line */}
      <span className={styles.link} aria-hidden="true" />
    </div>
  );
}
