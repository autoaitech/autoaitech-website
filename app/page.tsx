import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

/* ── Design tokens ── */
const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };

const GREEN      = "#059669";
const GREEN_LIGHT = "#d1fae5";
const GREEN_BORDER = "#a7f3d0";
const INK        = "#111110";
const INK_MID    = "#6b6a67";
const INK_FAINT  = "#a09e9b";
const BORDER     = "#e2e1de";
const RED        = "#c1440e";

/* ── Data ── */
const liveSystems = [
  { name: "Smart Onboarding Engine",      tag: "onboarding",   metric: "Active", metricLabel: "running" },
  { name: "AI Lead Engine",               tag: "acquisition",  metric: "Active", metricLabel: "running" },
  { name: "Retention Reactor AI",         tag: "retention",    metric: "Active", metricLabel: "running" },
  { name: "ROI Intelligence Hub",         tag: "visibility",   metric: "Active", metricLabel: "running" },
  { name: "Creative Intelligence Engine", tag: "creative",     metric: "Active", metricLabel: "running" },
  { name: "Campaign Monitoring Agents",   tag: "performance",  metric: "24/7",   metricLabel: "monitoring" },
];

const systemCards = [
  {
    name: "Smart Onboarding Engine",
    desc: "Runs every step of new client activation automatically — access collection, audit, strategy approval, campaign build. Each step triggers the next.",
    metric: "↗ Days to activate, not weeks",
  },
  {
    name: "AI Lead Engine",
    desc: "Discovers target companies, researches decision-makers, generates personalised outreach, and routes qualified replies to your team. Continuously.",
    metric: "↗ 3–5× qualified pipeline",
  },
  {
    name: "Retention Reactor AI",
    desc: "Monitors every client account for disengagement signals and triggers the right intervention automatically — before churn becomes a cancellation call.",
    metric: "↗ Churn caught before it happens",
  },
  {
    name: "ROI Intelligence Hub",
    desc: "Aggregates output from every connected system into attributed metrics and generates a branded monthly report. Automatically, every month.",
    metric: "↗ Clients see value — and stay",
  },
  {
    name: "Creative Intelligence Engine",
    desc: "Ingests ad performance data, identifies winning patterns, generates new variants, and routes top performers for approval. Weekly creative iteration.",
    metric: "↗ Lower CPAs, higher ROAS",
  },
  {
    name: "Campaign Monitoring Agents",
    desc: "Monitors campaigns 24/7 across every connected platform — flagging spend anomalies and performance drops the moment they appear.",
    metric: "↗ Issues caught before they cost",
  },
];

const compareRows = [
  { feature: "Systems connect to each other",     freelance: false, saas: false },
  { feature: "Ongoing monitoring & maintenance",   freelance: false, saas: false },
  { feature: "ROI visibility dashboard",           freelance: false, saas: "sometimes" },
  { feature: "Built for your agency specifically", freelance: true,  saas: false },
  { feature: "No per-seat pricing",                freelance: true,  saas: false },
  { feature: "Your full infrastructure from one provider", freelance: false, saas: false },
];

const steps = [
  {
    n: "1",
    title: "I scope your setup",
    body: "One call to understand your agency, your clients, and where the biggest gaps are. No 40-page questionnaires. I figure this out with you.",
  },
  {
    n: "2",
    title: "I build and connect",
    body: "Your systems are built, integrated with your existing tools, and tested. You get access to the Client OS so you can see exactly what's running.",
  },
  {
    n: "3",
    title: "They run. You grow.",
    body: "From month one, your systems are live. I monitor, maintain, and improve them on a monthly retainer. You pay for outcomes, not hours.",
  },
];

/* ── Sub-components ── */
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

function Check() {
  return <span style={{ color: GREEN, fontSize: 16 }}>✓</span>;
}
function Cross() {
  return <span style={{ color: "#c8c5c0", fontSize: 16 }}>—</span>;
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="mt-[56px] border-b"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 460px",
          minHeight: "calc(100vh - 56px)",
          borderColor: BORDER,
        }}
      >
        {/* Left */}
        <div
          className="flex flex-col justify-center border-r animate-hero-1"
          style={{ padding: "5rem 4rem 4rem", borderColor: BORDER }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-10 w-fit"
            style={{
              background: GREEN_LIGHT,
              border: `1px solid ${GREEN_BORDER}`,
              borderRadius: 100,
              padding: "5px 12px 5px 8px",
            }}
          >
            <span
              className="pulse-green"
              style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN, flexShrink: 0, display: "block" }}
            />
            <span style={{ ...mono, fontSize: 10.5, fontWeight: 500, color: GREEN, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              AI infrastructure — accepting agencies
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-hero-2 mb-7"
            style={{ ...display, fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: INK }}
          >
            Your agency runs on<br />
            <em style={{ color: RED, fontStyle: "italic", fontWeight: 600 }}>manual labour.</em><br />
            Ours doesn&apos;t.
          </h1>

          {/* Body */}
          <p
            className="animate-hero-3 mb-10"
            style={{ ...sans, fontSize: 17, fontWeight: 300, lineHeight: 1.65, color: INK_MID, maxWidth: 500 }}
          >
            AutoAITech builds and runs AI infrastructure for Irish and UK agencies — onboarding,
            lead generation, retention, reporting, creative, and campaign monitoring — running 24/7
            so your team can focus on the work that actually matters.
          </p>

          {/* CTAs */}
          <div className="animate-hero-4 flex items-center gap-4 mb-14">
            <Link href="/contact" className="btn-green">
              Book a free call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Right — manifesto panel */}
        <div
          className="animate-hero-r flex flex-col justify-between"
          style={{ background: "#ffffff", padding: "2.5rem 2.5rem 2rem", borderLeft: `1px solid ${BORDER}` }}
        >
          {/* Label */}
          <div>
            <span style={{ ...mono, fontSize: 9.5, color: "#a8a29e", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The usual approach
            </span>

            {/* Struck-through wrong answers */}
            <div className="flex flex-col mt-4" style={{ gap: "0.85rem" }}>
              {[
                "Hire another person",
                "Buy another tool",
                "Find a freelancer",
                "Systemise manually",
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: "1.5px solid #d6d3d1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#d6d3d1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 20,
                      fontWeight: 500,
                      color: "#c7c3be",
                      textDecoration: "line-through",
                      textDecorationColor: "#c7c3be",
                      lineHeight: 1.2,
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#e7e5e4", margin: "1.5rem 0" }} />

            {/* The answer */}
            <div className="flex items-center gap-3">
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: GREEN,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#111110",
                  lineHeight: 1.2,
                }}
              >
                Build the infrastructure.
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div style={{ marginTop: "2rem" }}>
            <p style={{ ...mono, fontSize: 10, color: "#a8a29e", lineHeight: 1.7 }}>
              One build. Runs continuously.<br />
              Compounds across every client.
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: GREEN, overflow: "hidden", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div className="ticker-track">
          {[...liveSystems, ...liveSystems].map((s, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span style={{ ...mono, fontSize: 10.5, fontWeight: 500, color: "white", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 2rem" }}>
                {s.name}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SYSTEMS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <AnimateIn>
          <SectionLabel text="The infrastructure" />
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, maxWidth: 600, marginBottom: "1rem" }}>
            The work your agency keeps doing manually.
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: INK_MID, maxWidth: 540, lineHeight: 1.65, marginBottom: "3.5rem" }}>
            We identify your highest-impact gaps and build the infrastructure to close them. These are
            the systems we build most often — each one solving a real problem agencies face every week.
          </p>
        </AnimateIn>

        {/* 3-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: BORDER,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {systemCards.map((c, i) => (
            <AnimateIn key={c.name} delay={i * 50} direction="up">
              <div className="sys-card-new" style={{ padding: "2rem", height: "100%" }}>
                <div style={{ ...display, fontSize: "1.05rem", fontWeight: 700, color: INK, marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>
                  {c.name}
                </div>
                <p style={{ ...sans, fontSize: 13.5, fontWeight: 300, color: INK_MID, lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  {c.desc}
                </p>
                <div style={{ ...mono, fontSize: 11, color: GREEN, fontWeight: 500 }}>
                  {c.metric}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#fafaf9", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "6rem 4rem" }}>
        <AnimateIn>
          <SectionLabel text="How it works" />
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, maxWidth: 600, marginBottom: "3rem" }}>
            Set up once. Runs forever.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
          {steps.map((s, i) => (
            <AnimateIn key={s.n} delay={i * 80} direction="up">
              <div>
                <div
                  style={{
                    width: 26, height: 26,
                    border: `1px solid ${GREEN}`,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...mono, fontSize: 11, color: GREEN,
                    marginBottom: "1rem",
                  }}
                >
                  {s.n}
                </div>
                <div style={{ ...display, fontSize: "1.05rem", fontWeight: 700, color: INK, marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                  {s.title}
                </div>
                <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: INK_MID, lineHeight: 1.65 }}>
                  {s.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: "6rem 4rem", background: "white", borderBottom: `1px solid ${BORDER}` }}>
        <AnimateIn>
          <SectionLabel text="Why AutoAITech" />
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, maxWidth: 600, marginBottom: "1rem" }}>
            Not another agency tool. Infrastructure.
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: INK_MID, maxWidth: 540, lineHeight: 1.65, marginBottom: "3rem" }}>
            The difference between a one-off automation and systems that compound over time.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={100}>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ width: "40%", padding: "1rem 1.5rem", textAlign: "left", ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: INK_FAINT, background: "#fafaf9", borderBottom: `1px solid ${BORDER}` }}>
                    Feature
                  </th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: INK_FAINT, background: "#fafaf9", borderBottom: `1px solid ${BORDER}` }}>
                    Freelance dev
                  </th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: INK_FAINT, background: "#fafaf9", borderBottom: `1px solid ${BORDER}` }}>
                    SaaS tools
                  </th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: GREEN, background: GREEN_LIGHT, borderBottom: `1px solid ${GREEN_BORDER}` }}>
                    AutoAITech
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < compareRows.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <td style={{ padding: "1rem 1.5rem", ...sans, fontWeight: 500, fontSize: 13.5, color: INK }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center", ...sans, fontSize: 13, color: INK_MID }}>
                      {row.freelance === true ? <Check /> : row.freelance === false ? <Cross /> : row.freelance}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center", ...sans, fontSize: 13, color: INK_MID }}>
                      {row.saas === true ? <Check /> : row.saas === false ? <Cross /> : row.saas}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center" }}>
                      <Check />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </section>

      {/* ── FOUNDER ── */}
      <section
        style={{
          padding: "6rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "6rem",
          alignItems: "center",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <AnimateIn direction="left">
          <div>
            <SectionLabel text="From the founder" />

            <blockquote
              style={{ ...display, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.02em", color: INK, marginBottom: "1.5rem" }}
            >
              &ldquo;I built this because I kept watching agencies do the same manual work, every week,
              forever. That&apos;s not a resourcing problem —{" "}
              <em style={{ color: RED, fontStyle: "italic", fontWeight: 500 }}>it&apos;s an infrastructure problem.</em>
              &rdquo;
            </blockquote>

            <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: INK_MID, lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: 520 }}>
              I&apos;m Sean, based in Ireland. I&apos;ve spent the last year building the infrastructure I kept
              wishing agencies had access to. Not SaaS tools. Not one-off automations. Actual
              infrastructure that keeps running and keeps improving.
            </p>
            <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: INK_MID, lineHeight: 1.75, marginBottom: "2rem", maxWidth: 520 }}>
              I work with a small number of agencies at a time. If we&apos;re a fit, we&apos;ll know it in the
              first call.
            </p>

            <div className="flex items-center gap-3.5">
              <div
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN_BORDER})`,
                  border: `2px solid ${BORDER}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  ...display, fontSize: 16, fontWeight: 700, color: GREEN,
                }}
              >
                S
              </div>
              <div>
                <div style={{ ...display, fontSize: 14, fontWeight: 700, color: INK }}>Sean Mulligan</div>
                <div style={{ ...mono, fontSize: 10, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>
                  Founder — AutoAITech · Dublin, Ireland
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* What happens next panel */}
        <AnimateIn direction="right">
          <div style={{ background: "#fafaf9", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem" }}>
            <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
              What happens next
            </div>
            {[
              {
                n: "1",
                title: "30-minute scoping call",
                body: "I identify your highest-impact gaps. No 40-page questionnaire — I figure it out with you.",
              },
              {
                n: "2",
                title: "Systems scoped and priced",
                body: "You get a clear proposal: exactly what I'll build, how it connects, and what it costs.",
              },
              {
                n: "3",
                title: "Live in 2–3 weeks",
                body: "Systems are built, integrated with your stack, and running. You get access to the Client OS to see everything.",
              },
              {
                n: "4",
                title: "Monthly retainer — no surprises",
                body: "I monitor, maintain, and improve your infrastructure. You pay for outcomes, not hours.",
              },
            ].map((step, i, arr) => (
              <div
                key={step.n}
                className="flex gap-3"
                style={{ paddingBottom: i < arr.length - 1 ? "1.25rem" : 0, marginBottom: i < arr.length - 1 ? "1.25rem" : 0, borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}
              >
                <div
                  style={{
                    width: 22, height: 22, flexShrink: 0,
                    border: `1px solid ${GREEN}`,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...mono, fontSize: 10, color: GREEN,
                    marginTop: 2,
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <div style={{ ...display, fontSize: 13, fontWeight: 700, color: INK, marginBottom: 3 }}>{step.title}</div>
                  <p style={{ ...sans, fontSize: 12, fontWeight: 300, color: INK_MID, lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: INK, padding: "6rem 4rem", textAlign: "center" }}>
        <AnimateIn>
          <div style={{ ...mono, fontSize: 10, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            Ready to start
          </div>
          <h2
            style={{ ...display, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, color: "white", marginBottom: "1rem" }}
          >
            Built for your agency.<br />
            <em style={{ color: "#6ee7b7", fontStyle: "italic", fontWeight: 600 }}>One call to start.</em>
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: "#6b6a67", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
            One 30-minute call and I&apos;ll tell you exactly what your agency is missing and what that
            infrastructure looks like in practice.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-green">
              Book a free call
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
