import { CapabilityCard } from "./CapabilityCard";

const capabilities = [
  {
    title: "Product Discovery to Production",
    description: "Translate vague prompts into production-grade software and infrastructure, aligning every step with your goals.",
    icon: "🧭",
    highlights: [
      "Interactive ideation workshops and scope definition",
      "Architecture blueprints with trade-off analysis",
      "CI/CD ready code with documentation and handover"
    ]
  },
  {
    title: "Full-Stack Feature Delivery",
    description: "Implement features spanning UI, APIs, databases, and observability with automated quality gates.",
    icon: "🛠️",
    highlights: [
      "Next.js interfaces with design system alignment",
      "Supabase/Postgres schema design and migrations",
      "Integration tests, monitoring hooks, and rollout playbooks"
    ]
  },
  {
    title: "Operational Excellence",
    description: "Keep systems reliable with proactive monitoring, incident response tooling, and iterative optimization.",
    icon: "🚀",
    highlights: [
      "Performance profiling and regression triage",
      "Observability instrumentation and dashboards",
      "Runbooks, alerts, and SLO-focused improvements"
    ]
  }
];

export function CapabilityHighlights() {
  return (
    <section className="section" style={{ marginTop: "4rem" }}>
      <span className="badge">End-to-end autonomy</span>
      <h2 style={{ marginTop: "0.75rem", marginBottom: "0.35rem" }}>What this agent delivers without hand-holding</h2>
      <p style={{ marginTop: "0.5rem", maxWidth: "640px" }}>
        Whether it&apos;s a brand-new product, a mission-critical upgrade, or a tangled migration, the agent drives strategy, code,
        validation, and deployment so you can stay focused on the outcome.
      </p>
      <div className="grid" role="list" style={{ marginTop: "2.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {capabilities.map((capability) => (
          <CapabilityCard key={capability.title} capability={capability} />
        ))}
      </div>
    </section>
  );
}
