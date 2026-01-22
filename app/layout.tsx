import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Codex | Capabilities",
  description: "Discover what this autonomous coding agent can research, analyze, and build for you.",
  openGraph: {
    title: "Agentic Codex | Capabilities",
    description: "Interactive showcase of what this coding agent can accomplish end-to-end.",
    url: "https://agentic-ae692373.vercel.app",
    siteName: "Agentic Codex",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Codex | Capabilities",
    description: "See how the agent researches, architects, builds, and deploys full-stack solutions."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
