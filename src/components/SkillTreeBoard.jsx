// src/components/SkillTreeBoard.jsx
import styles from "../styles/SkillTreeBoard.module.css";
import data from "../data/skilltree.json";

/** Friendly comfort text based on % + tier */
function comfortText(value = 0, tier = "Novice") {
  const v = Math.max(0, Math.min(100, value));
  if (v >= 70) return `${tier} — comfortable solo on most tasks and can explain my choices.`;
  if (v >= 50) return `${tier} — can build end-to-end with occasional check-ins.`;
  if (v >= 35) return `${tier} — can contribute with guidance and examples; learning fast.`;
  return `${tier} — know the basics and can follow patterns; pairing helps.`;
}

/** Per-node TL;DR (short “what you get from me, right now”). */
function tldrFor(id, title, value, tier) {
  const map = {
    html: "Solid semantics, forms, and a11y basics. I won’t div-itis your app.",
    css: "Layouts, spacing, and responsive behavior without chaos — CSS Modules all day.",
    js: "ES6+ comfort. Array methods, fetch, and debugging without panic.",
    react: "Components, state, and hooks. I keep props clean and effects tidy.",
    git: "Branches, merges, fix conflicts without summoning ancient gods.",
    github: "PRs, issues, GH Pages. I write human-readable messages.",
    vite: "Fast dev/build, env/base config, GH Pages deploys.",
    ue5: "Blueprint sandboxing. I prototype mechanics and UI flows.",
    windows: "Users, services, and PowerShell basics without breaking IT.",
    network: "IP/DNS fundamentals; I can ping a problem without ping-spamming.",
    hardware: "Parts, drivers, installs — I keep a cool head when Windows doesn’t.",
    troubleshoot: "Reproduce → isolate → document → resolve. Calm under pressure.",
    cli: "Batch/PowerShell basics; I automate the boring (safely).",
  };
  return map[id] || `${title}: ${comfortText(value, tier)}`;
}

/** A tiny joke/quip per node (kept tasteful). */
function quipFor(id) {
  const map = {
    html: "I close my tags and my loops. Balance in all things.",
    css: "Yes, I’ve wrestled flex and grid. We’re on speaking terms now.",
    js: "undefined ≠ null, and I can explain why without tears.",
    react: "I promise not to use state for everything. Probably.",
    git: "Commit early, commit often — but with useful messages.",
    github: "I open PRs that don’t make reviewers sigh.",
    vite: "If it’s slow, it’s not Vite’s fault this time.",
    ue5: "I can Blueprint without turning it into spaghetti.",
    windows: "I’ve met the Registry. We’re cordial.",
    network: "If in doubt, I try turning it off and on again — the router, not the team.",
    hardware: "I seat RAM like a gentle barbarian.",
    troubleshoot: "Logs first, guesses second.",
    cli: "I write scripts that future-me can read.",
  };
  return map[id] || "No wizardry, just steady progress.";
}

export default function SkillTreeBoard() {
  const branches = Array.isArray(data?.branches) ? data.branches : [];

  return (
    <div className={styles.board} role="list" aria-label="Skill branches">
      {branches.map((branch) => (
        <section
          key={branch.id}
          className={`${styles.branch} ${styles[branch.color || "c_teal"]}`}
          aria-labelledby={`branch-${branch.id}`}
          role="listitem"
        >
          <h3 id={`branch-${branch.id}`} className={styles.branchTitle}>
            {branch.title}
          </h3>

          <ol className={styles.column}>
            {(branch.nodes || []).map((node, idx) => {
              const width = Math.max(0, Math.min(100, node.value ?? 0));
              const comfort = comfortText(node.value, node.tier);
              const hint = node.hint || tldrFor(node.id, node.title, node.value, node.tier);
              const quip = quipFor(node.id);

              return (
                <li key={node.id} className={`${styles.node} ${styles.link}`} data-tier={node.tier}>
                  <span className={styles.orb} aria-hidden="true" />
                  <div className={styles.label}>
                    <strong>{node.title}</strong>
                    <span className={styles.tier}>{node.tier}</span>

                    <div className={styles.bar} aria-hidden="true">
                      <span className={styles.fill} style={{ width: `${width}%` }} />
                    </div>

                    {/* Tooltip card */}
                    <div className={styles.tip} role="status" aria-live="polite">
                      <p className={styles.tipLine}><strong>Comfort:</strong> {comfort}</p>
                      {hint ? <p className={styles.tipSub}>{hint}</p> : null}
                      <p className={styles.tipJoke}>TL;DR: {quip}</p>
                    </div>

                    <span className={styles.srOnly}>{width}% proficiency</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
