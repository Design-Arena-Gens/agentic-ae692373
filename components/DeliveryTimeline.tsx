const phases = [
  {
    title: "Align",
    subtitle: "Understand the mission",
    emoji: "📌",
    bullets: [
      "Break vague directives into actionable milestones",
      "Identify dependencies, risks, and validation signals",
      "Produce stakeholder-ready briefs and diagrams"
    ]
  },
  {
    title: "Engineer",
    subtitle: "Build with confidence",
    emoji: "💡",
    bullets: [
      "Implement features with strong typing and tests",
      "Wire services, auth, data models, and UI states",
      "Automate reviews, linting, and preview deployments"
    ]
  },
  {
    title: "Verify",
    subtitle: "Prove it works",
    emoji: "🧪",
    bullets: [
      "Run story-driven QA scripts and regression suites",
      "Instrument telemetry, logging, and alerts",
      "Capture KPIs and publish searchable documentation"
    ]
  },
  {
    title: "Launch",
    subtitle: "Ship to production",
    emoji: "🚀",
    bullets: [
      "Execute rollout strategy with fallback plans",
      "Coordinate change management and approvals",
      "Monitor adoption, close feedback loops"
    ]
  }
];

export function DeliveryTimeline() {
  return (
    <section className="section" style={{ marginTop: "6rem" }}>
      <span className="badge">Execution blueprint</span>
      <h2 style={{ marginTop: "0.75rem", marginBottom: "0.35rem" }}>How engagements flow from idea to impact</h2>
      <p style={{ marginTop: "0.5rem", maxWidth: "680px" }}>
        Every mission follows a transparent timeline with artifacts you can plug into your workflows. You get visibility at each
        stage without needing to micromanage.
      </p>
      <div className="grid" style={{ marginTop: "2.3rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {phases.map((phase) => (
          <div key={phase.title} className="card" style={{ padding: "1.6rem" }}>
            <div style={{ fontSize: "1.8rem" }}>{phase.emoji}</div>
            <h3 style={{ margin: "0.75rem 0 0" }}>{phase.title}</h3>
            <p style={{ marginTop: "0.25rem", fontSize: "0.95rem", color: "rgba(222, 231, 255, 0.72)" }}>{phase.subtitle}</p>
            <ul className="list" style={{ marginTop: "1.2rem" }}>
              {phase.bullets.map((bullet) => (
                <li key={bullet}>
                  <span className="icon">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
