interface Capability {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="card" role="listitem">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.85rem" }}>
        <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{capability.icon}</span>
        <div>
          <h3 style={{ margin: 0 }}>{capability.title}</h3>
          <p style={{ marginTop: "0.45rem" }}>{capability.description}</p>
        </div>
      </div>
      <ul className="list" aria-label={`${capability.title} highlights`}>
        {capability.highlights.map((item) => (
          <li key={item}>
            <span className="icon">⚡</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
