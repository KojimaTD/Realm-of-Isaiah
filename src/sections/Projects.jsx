import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard"; // if this exists, great
import { useMemo, useState } from "react";

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(p =>
      [p.title, p.summary, ...(p.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section id="projects" className="glass-section">
      <header className="projectsHeader">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionSub">A few things I’ve built while learning in public.</p>
      </header>

      <div className="projectsFilters">
        <input
          type="search"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: 360,
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.18)",
            background: "rgba(255,255,255,.06)",
            color: "white",
            outline: "none",
          }}
        />
      </div>

      <div className="projectsGrid">
        {filtered.map((p) =>
          ProjectCard ? (
            <ProjectCard key={p.id} item={p} />
          ) : (
            <article key={p.id} className="projectCardFallback">
              <h3 style={{ marginBottom: 6 }}>{p.title}</h3>
              <p style={{ opacity: .9 }}>{p.summary}</p>
              {p.tags?.length ? (
                <ul style={{ display: "flex", gap: 6, flexWrap: "wrap", padding: 0, margin: "10px 0 0", listStyle: "none" }}>
                  {p.tags.map((t) => (
                    <li key={t} style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.12)"
                    }}>{t}</li>
                  ))}
                </ul>
              ) : null}
              {p.repo ? (
                <div style={{ marginTop: 12 }}>
                  <a href={p.repo} target="_blank" rel="noreferrer" style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,.12)",
                    color: "#fff",
                    textDecoration: "none"
                  }}>View Repo</a>
                </div>
              ) : null}
            </article>
          )
        )}
      </div>
    </section>
  );
}
