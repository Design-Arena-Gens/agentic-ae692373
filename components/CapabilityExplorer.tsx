"use client";

import { useMemo, useState } from "react";

const categories = [
  {
    id: "build",
    label: "Build & Ship",
    description: "Full-stack implementation workflows that turn specs into production-ready products.",
    checklist: [
      "Design system-driven UI architecture",
      "Integrate APIs, databases, deployments",
      "Automate testing, linting, CI pipelines"
    ]
  },
  {
    id: "research",
    label: "Research & Strategy",
    description: "Deep-dive research, comparisons, and architecture roadmaps crafted from raw requirements.",
    checklist: [
      "Summarize specs into actionable plans",
      "Evaluate trade-offs across stacks",
      "Produce diagrams, docs, and runnable PoCs"
    ]
  },
  {
    id: "optimize",
    label: "Optimize & Maintain",
    description: "Ongoing improvements—bug hunts, performance audits, migrations, and refactors.",
    checklist: [
      "Profiling and targeted refactors",
      "Dependency and security upgrades",
      "Observability + alerting playbooks"
    ]
  }
] as const;

const libraryMap: Record<typeof categories[number]["id"], string[]> = {
  build: [
    "Next.js",
    "React Server Components",
    "Supabase",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "PlanetScale"
  ],
  research: [
    "Architecture Decision Records",
    "Mermaid Diagrams",
    "C4 Modeling",
    "Comparative RFCs",
    "User Story Mapping"
  ],
  optimize: [
    "Lighthouse Audits",
    "Vitest",
    "Playwright",
    "Sentry",
    "Grafana",
    "OpenTelemetry"
  ]
};

export function CapabilityExplorer() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("build");

  const activeMeta = useMemo(() => categories.find((cat) => cat.id === activeCategory) ?? categories[0], [activeCategory]);

  return (
    <section className="section" style={{ marginTop: "5rem" }} aria-label="Capability explorer">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 320px" }}>
          <span className="badge">Interactive explorer</span>
          <h2 style={{ marginTop: "0.8rem", marginBottom: "0.45rem" }}>Everything this agent can orchestrate</h2>
          <p style={{ marginTop: "0.6rem" }}>
            Toggle a track to see tooling coverage, workflows, and the level of autonomy provided. The agent adapts to your
            repository conventions, coding standards, and operational practices without extra onboarding.
          </p>
          <div style={{ display: "flex", gap: "0.65rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={category.id === activeCategory ? "primary" : "secondary"}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={category.id === activeCategory}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className="card" style={{ flex: "1 1 360px", minWidth: "300px" }}>
          <h3 style={{ marginTop: 0 }}>{activeMeta.label}</h3>
          <p style={{ marginTop: "0.45rem" }}>{activeMeta.description}</p>
          <div style={{ marginTop: "1.25rem" }}>
            <h4 style={{ marginBottom: "0.6rem" }}>What happens next</h4>
            <ul className="list">
              {activeMeta.checklist.map((item) => (
                <li key={item}>
                  <span className="icon">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: "1.65rem" }}>
            <h4 style={{ marginBottom: "0.6rem" }}>Tooling & formats</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {libraryMap[activeCategory].map((tool) => (
                <span
                  key={tool}
                  className="badge"
                  style={{
                    background: "rgba(103, 143, 255, 0.14)",
                    borderColor: "rgba(103, 143, 255, 0.45)",
                    color: "rgba(217, 228, 255, 0.9)"
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
