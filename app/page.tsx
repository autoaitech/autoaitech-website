import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import HeroPanel from "@/components/HeroPanel";

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
  { name: "Lead Generation & Outreach",  tag: "outreach",     metric: "Active", metricLabel: "running" },
  { name: "Client Onboarding",           tag: "onboarding",   metric: "Active", metricLabel: "running" },
  { name: "Retention & Account Health",  tag: "retention",    metric: "Active", metricLabel: "running" },
  { name: "Research & Intelligence",     tag: "research",     metric: "Active", metricLabel: "running" },
  { name: "Reporting & ROI",             tag: "reporting",    metric: "Active", metricLabel: "running" },
  { name: "Operations & Delivery",       tag: "operations",   metric: "24/7",   metricLabel: "running" },
];

const systemCards = [
  {
    name: "Lead Generation & Outreach",
    desc: "Finds your ideal clients, researches the right contacts, and sends personalised outreach automatically. Qualified replies land in your inbox. Your pipeline grows while your team focuses on delivery.",
    metric: "↗ Pipeline that runs without you",
  },
  {
    name: "Client Onboarding",
    desc: "Runs every step of new client activation automatically — information collection, briefing, approvals, and setup. No chasing. No bottlenecks. Each step triggers the next.",
    metric: "↗ Days to activate, not weeks",
  },
  {
    name: "Retention & Account Health",
    desc: "Monitors every client relationship for early warning signs and triggers the right intervention automatically — before disengagement becomes a lost contract.",
    metric: "↗ Churn caught before it happens",
  },
  {
    name: "Research & Intelligence",
    desc: "Builds agents that research prospects, markets, or opportunities on demand — and deliver findings your team can act on immediately. Hours of manual research, done automatically.",
    metric: "↗ Hours of research, done in minutes",
  },
  {
    name: "Reporting & ROI",
    desc: "Aggregates output from every connected system and generates branded reports automatically — for your team or your clients. Every month, without anyone touching a spreadsheet.",
    metric: "↗ Clients see value — and stay",
  },
  {
    name: "Operations & Delivery",
    desc: "Identifies the manual work slowing your team down and builds infrastructure to run it automatically. The repetitive tasks that eat your week get handled. Your people focus on what actually matters.",
    metric: "↗ Less admin, more delivery",
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
    body: "One call to understand your business, your clients, and where the biggest gaps are. No 40-page questionnaires. I figure this out with you.",
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
        className="mt-[56px] border-b grid grid-cols-1 md:grid-cols-[1fr_460px]"
        style={{
          minHeight: "calc(100vh - 56px)",
          borderColor: BORDER,
        }}
      >
        {/* Left */}
        <div
          className="flex flex-col justify-center md:border-r animate-hero-1 px-8 py-16 md:px-16 md:pt-20 md:pb-16"
          style={{ borderColor: BORDER }}
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
            AutoAITech builds and runs AI infrastructure for Irish and UK businesses — onboarding,
            lead generation, retention, reporting, research, and operations — running 24/7
            so your team can focus on the work that actually matters.
          </p>

          {/* CTAs */}
          <div className="animate-hero-4 flex items-center gap-4 mb-14">
            <Link href="/contact" className="btn-green">
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Right — always-on clock panel */}
        <div className="animate-hero-r hidden md:flex flex-col">
          <HeroPanel />
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
      <section id="systems" className="px-6 py-20 md:px-16 md:py-24">
        <AnimateIn>
          <SectionLabel text="The infrastructure" />
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, maxWidth: 600, marginBottom: "1rem" }}>
            The work your team keeps doing manually.
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: INK_MID, maxWidth: 540, lineHeight: 1.65, marginBottom: "3.5rem" }}>
            The highest-impact gaps get identified on the first call. These are the six areas where
            infrastructure gets built — each one solving a problem that costs time or clients every week.
          </p>
        </AnimateIn>

        {/* 3-col grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
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
      <section id="how-it-works" className="px-6 py-20 md:px-16 md:py-24" style={{ background: "#fafaf9", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <AnimateIn>
          <SectionLabel text="How it works" />
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, maxWidth: 600, marginBottom: "3rem" }}>
            Set up once. Runs forever.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
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
      <section className="px-6 py-20 md:px-16 md:py-24" style={{ background: "white", borderBottom: `1px solid ${BORDER}` }}>
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
          <div className="hidden md:block" style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
            <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
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
          </div>
        </AnimateIn>
      </section>

      {/* ── FOUNDER ── */}
      <section
        className="px-6 py-20 md:px-16 md:py-24"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <AnimateIn direction="left">
          <div style={{ maxWidth: 640 }}>
            <SectionLabel text="From the founder" />

            <blockquote
              style={{ ...display, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.02em", color: INK, marginBottom: "1.5rem" }}
            >
              &ldquo;I built this because I kept watching agencies do the same manual work, every week,
              forever. That&apos;s not a resourcing problem —{" "}
              <em style={{ color: RED, fontStyle: "italic", fontWeight: 500 }}>it&apos;s an infrastructure problem.</em>
              &rdquo;
            </blockquote>

            <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: INK_MID, lineHeight: 1.75, marginBottom: "1.25rem" }}>
              I&apos;m Sean, based in Ireland. I built this infrastructure because the problem is the same
              at every agency I&apos;ve spoken to — too much manual work, not enough systems underneath it.
              I designed these to run the way service businesses actually operate.
            </p>
            <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: INK_MID, lineHeight: 1.75, marginBottom: "2rem" }}>
              I work with a small number of clients at a time. If it&apos;s a good fit, you&apos;ll know it in
              the first call.
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
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20 md:px-16 md:py-24 text-center" style={{ background: INK }}>
        <AnimateIn>
          <div style={{ ...mono, fontSize: 10, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            Ready to start
          </div>
          <h2
            style={{ ...display, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, color: "white", marginBottom: "1rem" }}
          >
            Built for your business.<br />
            <em style={{ color: "#6ee7b7", fontStyle: "italic", fontWeight: 600 }}>One call to start.</em>
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: "#6b6a67", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
            One 30-minute call and I&apos;ll tell you exactly what your business is missing and what that
            infrastructure looks like in practice.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-green">
              Start the conversation
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
