import Link from "next/link";
import { CapabilityHighlights } from "@/components/CapabilityHighlights";
import { CapabilityExplorer } from "@/components/CapabilityExplorer";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";

export default function Home() {
  return (
    <main>
      <header style={{ padding: "3.5rem 0 2.5rem 0" }}>
        <div className="section" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div className="badge" style={{ background: "rgba(255,255,255,0.08)" }}>Agentic Codex</div>
              <span style={{ color: "rgba(207, 219, 255, 0.6)", fontSize: "0.85rem" }}>Autonomous coding companion</span>
            </div>
            <nav style={{ display: "flex", gap: "1.2rem", fontSize: "0.95rem" }}>
              <Link href="#capabilities">Capabilities</Link>
              <Link href="#explorer">Explorer</Link>
              <Link href="#timeline">Timeline</Link>
            </nav>
          </div>
          <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div>
              <span className="badge">What can this agent do?</span>
              <h1 style={{ fontSize: "2.8rem", marginTop: "0.9rem", marginBottom: "0.9rem" }}>
                Ship software, answer questions, and orchestrate delivery without waiting on human check-ins.
              </h1>
              <p>
                From research memos to production deployments, the agent plans, codes, tests, and verifies outcomes. You get
                actionable updates, clean diffs, and optional human-friendly walkthroughs—no babysitting required.
              </p>
              <div className="hero-actions" style={{ marginTop: "2rem", display: "flex", gap: "0.85rem" }}>
                <Link href="#explorer">
                  <button className="primary" type="button">Discover capabilities</button>
                </Link>
                <Link href="#capabilities">
                  <button className="secondary" type="button">See delivery modes</button>
                </Link>
              </div>
            </div>
            <div className="card" style={{ padding: "2rem", alignSelf: "center" }}>
              <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>On-demand deliverables</h3>
              <ul className="list">
                <li>
                  <span className="icon">🧱</span>
                  <span>Production-ready web apps, APIs, and infrastructure-as-code</span>
                </li>
                <li>
                  <span className="icon">🧭</span>
                  <span>Architecture decision records, diagrams, and strategy docs</span>
                </li>
                <li>
                  <span className="icon">🛡️</span>
                  <span>Automated test suites, quality gates, and observability hooks</span>
                </li>
                <li>
                  <span className="icon">💬</span>
                  <span>Concise updates, risk flags, and ready-to-run scripts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="capabilities">
        <CapabilityHighlights />
      </div>
      <div id="explorer">
        <CapabilityExplorer />
      </div>
      <div id="timeline">
        <DeliveryTimeline />
      </div>
      <section className="section" style={{ marginTop: "6rem", marginBottom: "4rem" }}>
        <div className="card" style={{ display: "grid", gap: "1.6rem", padding: "2.2rem" }}>
          <div>
            <span className="badge">Ready when you are</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "0.4rem" }}>Drop a challenge, receive a launch-ready answer</h2>
            <p style={{ marginTop: "0.6rem" }}>
              The agent takes action immediately—designing architecture, writing code, setting up tooling, and orchestrating
              deployments. Just describe the outcome you need and review the deliverables.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(120,154,255,0.2)" }}>
              <h3 style={{ margin: 0 }}>Plug into your stack</h3>
              <p style={{ marginTop: "0.7rem" }}>
                Connect to GitHub, Supabase, Vercel, or internal tooling. The agent pairs with your workflows, config, and security policies.
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(120,154,255,0.2)" }}>
              <h3 style={{ margin: 0 }}>Evidence for every decision</h3>
              <p style={{ marginTop: "0.7rem" }}>
                You receive commit-ready diffs, dependency rationale, and testing proof so stakeholders can sign off confidently.
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(120,154,255,0.2)" }}>
              <h3 style={{ margin: 0 }}>Continuous improvement</h3>
              <p style={{ marginTop: "0.7rem" }}>
                Iterates on feedback, monitors regressions, and keeps shipping enhancements without slowing your roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        Built autonomously by Agentic Codex. Ready to partner on your next mission.
      </footer>
    </main>
  );
}
