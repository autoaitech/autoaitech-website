import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Systems — AutoAITech",
  description:
    "The six AI systems AutoAITech builds for agencies — Smart Onboarding Engine, AI Lead Engine, Retention Reactor AI, ROI Intelligence Hub, Creative Intelligence Engine, and Campaign Monitoring Agents. Running 24/7.",
};

/* ── Design tokens ── */
const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };

const GREEN        = "#059669";
const GREEN_LIGHT  = "#d1fae5";
const GREEN_BORDER = "#a7f3d0";
const INK          = "#111110";
const INK_MID      = "#6b6a67";
const INK_FAINT    = "#a09e9b";
const BORDER       = "#e2e1de";

/* ── Systems data ── */
const systems = [
  {
    name: "Smart Onboarding Engine",
    tag: "onboarding",
    tagline: "First impressions run on autopilot.",
    what: "Runs every step of new client activation automatically — discovery, access collection, technical audit, strategy approval, and campaign build. Each step triggers the next. Every delay is flagged. Nothing falls through and nobody has to chase.",
    replaces: "Three-week onboarding processes that should take three days. Email chains chasing access credentials and document approvals. Inconsistent first impressions that damage client relationships before the work has even started.",
    roi: "Clients who activate in days — not weeks — stay longer and refer more. Every day of delay is a day they're paying without seeing results. Fast onboarding is the foundation of strong retention.",
    integrates: ["Email", "CRM (HubSpot, Pipedrive)", "File Storage", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    name: "AI Lead Engine",
    tag: "acquisition",
    tagline: "Never run out of qualified leads again.",
    what: "Discovers target companies, researches decision-makers, generates personalised outreach, runs multi-step sequences, and routes qualified replies directly to your team. Runs on a continuous cycle — generating pipeline while your agency focuses on delivery.",
    replaces: "Founders and account managers spending 40% of their week on prospecting. Generic sequences that get ignored. A CRM that grows with contacts nobody is actively working.",
    roi: "Typically generates 3–5× more qualified pipeline within 60 days. Consistent outbound becomes structural — not something that only happens when someone has time for it.",
    integrates: ["Email (Gmail, Outlook)", "CRM (HubSpot, Pipedrive)", "LinkedIn", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    name: "Retention Reactor AI",
    tag: "retention",
    tagline: "Keep the clients you've already won.",
    what: "Continuously monitors every client account for disengagement signals — email engagement drops, campaign performance declines, billing pattern changes — and automatically triggers the right intervention at the right moment. Check-ins, escalation alerts, upsell prompts.",
    replaces: "Finding out a client is unhappy on the cancellation call. Account managers relying on gut feel and memory. Churn that could have been prevented with one well-timed message.",
    roi: "Agencies lose 20–40% of clients every year. Reducing churn by 10% is worth more than doubling new client wins. This system makes early detection automatic — across every account, at once.",
    integrates: ["CRM", "Email", "Google Analytics", "Billing"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    name: "ROI Intelligence Hub",
    tag: "visibility",
    tagline: "Know what's working — always.",
    what: "Aggregates output from every connected system — ads, analytics, CRM — into attributed revenue, time saved, and pipeline metrics. Generates a branded monthly report showing exactly what your agency delivered. Automatically, every month, without anyone building a spreadsheet.",
    replaces: "Manual data pulls the night before a review call. Clients who can't see what they're paying for. Retainers that feel like costs rather than investments.",
    roi: "Clear, continuous ROI visibility is the single biggest driver of client renewal. Clients who see evidence of value don't leave — even in budget conversations.",
    integrates: ["Google Analytics / GA4", "Google Ads", "Meta Ads", "CRM", "Email"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    name: "Creative Intelligence Engine",
    tag: "creative",
    tagline: "Your best ads keep getting better.",
    what: "Ingests ad performance data and your creative library, identifies winning patterns, generates new variants built on what's working, and routes top performers for approval. Continuous creative iteration on a weekly cycle — not a quarterly refresh.",
    replaces: "Teams guessing what will perform. Weeks between creative refreshes. Ad fatigue burning through budget while the next iteration is still being briefed.",
    roi: "Most agencies waste 30–40% of ad spend on creative that should have been retired weeks earlier. Tightening the feedback loop typically pays for itself in the first month.",
    integrates: ["Meta Ads", "Google Ads", "Creative Storage", "CRM"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.071 4.929a10 10 0 1 0 0 14.142"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
  },
  {
    name: "Campaign Monitoring Agents",
    tag: "performance",
    tagline: "24/7 eyes on every campaign.",
    what: "Monitors campaigns continuously across every connected platform — flagging spend anomalies, performance drops, and optimisation opportunities the moment they appear. Issues are surfaced and documented before they become expensive.",
    replaces: "Manually checking dashboards every morning. Discovering a budget issue on a Friday afternoon. Finding out about a campaign problem after it's already cost thousands in wasted spend.",
    roi: "Campaign waste is the most visible failure point in any agency relationship. Catching an issue 6 hours earlier can save thousands. This system makes that monitoring permanent — not dependent on who's working that day.",
    integrates: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Google Analytics"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div style={{ width: 24, height: 1, background: GREEN }} />
      <span style={{ ...mono, fontSize: 10, fontWeight: 500, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {text}
      </span>
    </div>
  );
}

export default function SystemsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="mt-[56px] border-b"
        style={{ background: "white", padding: "5rem 4rem 4rem", borderColor: BORDER }}
      >
        <AnimateIn>
          <SectionLabel text="The infrastructure" />
          <h1
            style={{ ...display, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, maxWidth: 700, marginBottom: "1.25rem" }}
          >
            Six systems. Built to compound.
          </h1>
          <p style={{ ...sans, fontSize: 17, fontWeight: 300, color: INK_MID, maxWidth: 560, lineHeight: 1.65 }}>
            Each system runs continuously, generates measurable output, and feeds data into the others.
            Not a tool. Not an automation. Infrastructure that gets more valuable over time.
          </p>
        </AnimateIn>
      </section>

      {/* ── SYSTEMS LIST ── */}
      <section style={{ background: "white" }}>
        {systems.map((system, i) => {
          const isReversed = i % 2 === 1;
          const isLast = i === systems.length - 1;
          return (
            <AnimateIn key={system.name} delay={60} direction={isReversed ? "right" : "left"}>
              <div
                style={{
                  padding: "5rem 4rem",
                  borderBottom: isLast ? "none" : `1px solid ${BORDER}`,
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  alignItems: "start",
                  direction: isReversed ? "rtl" : "ltr",
                }}
              >
                {/* Left: identity */}
                <div style={{ direction: "ltr" }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 48, height: 48,
                      borderRadius: 10,
                      background: GREEN_LIGHT,
                      border: `1px solid ${GREEN_BORDER}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {system.icon}
                  </div>

                  {/* Tag */}
                  <div style={{ ...mono, fontSize: 9.5, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                    {system.tag}
                  </div>

                  {/* Name */}
                  <h2 style={{ ...display, fontSize: "1.5rem", fontWeight: 700, color: INK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                    {system.name}
                  </h2>

                  {/* Tagline */}
                  <p style={{ ...sans, fontSize: 14, fontWeight: 500, color: GREEN, marginBottom: "1.5rem", lineHeight: 1.4 }}>
                    {system.tagline}
                  </p>

                  {/* Integration tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {system.integrates.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          ...mono, fontSize: 10,
                          color: INK_MID,
                          background: "#f4f4f3",
                          border: `1px solid ${BORDER}`,
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: detail */}
                <div style={{ direction: "ltr" }} className="flex flex-col gap-6">
                  <div>
                    <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
                      What it does
                    </div>
                    <p style={{ ...sans, fontSize: 15, color: INK_MID, lineHeight: 1.75, fontWeight: 300 }}>
                      {system.what}
                    </p>
                  </div>

                  <div>
                    <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
                      What it replaces
                    </div>
                    <p style={{ ...sans, fontSize: 15, color: INK_MID, lineHeight: 1.75, fontWeight: 300 }}>
                      {system.replaces}
                    </p>
                  </div>

                  {/* ROI card */}
                  <div
                    style={{
                      background: GREEN_LIGHT,
                      border: `1px solid ${GREEN_BORDER}`,
                      borderRadius: 8,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div style={{ ...mono, fontSize: 9.5, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      Why it matters
                    </div>
                    <p style={{ ...sans, fontSize: 14, color: "#065f46", lineHeight: 1.65, fontWeight: 400 }}>
                      {system.roi}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section style={{ background: INK, padding: "6rem 4rem", textAlign: "center", borderTop: `1px solid #1c1c1a` }}>
        <AnimateIn>
          <div style={{ ...mono, fontSize: 10, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            Ready to start
          </div>
          <h2
            style={{ ...display, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, color: "white", marginBottom: "1rem" }}
          >
            Tell us your biggest bottleneck.<br />
            <em style={{ color: "#6ee7b7", fontStyle: "italic", fontWeight: 600 }}>We&apos;ll build the system for it.</em>
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: "#6b6a67", maxWidth: 460, margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
            One 30-minute call. We identify your highest-impact gaps and tell you exactly what the
            infrastructure looks like — and what it costs.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-green">
              Book a free call
            </Link>
            <Link
              href="/"
              className="no-underline"
              style={{ ...sans, fontSize: 14, color: "#6b6a67", border: "1px solid #333", padding: "12px 24px", borderRadius: 8 }}
            >
              Back to home
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
