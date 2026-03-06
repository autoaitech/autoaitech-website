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
const DARK_BG    = "#0d1117";
const DARK_BORDER = "#21262d";
const DARK_SURFACE = "#161b22";
const DARK_TEXT  = "#cdd9e5";
const DARK_MID   = "#6e7681";
const DARK_FAINT = "#484f58";
const DARK_GREEN = "#3fb950";

/* ── Data ── */
const liveSystems = [
  { name: "Lead Response Engine", tag: "follow-up",  metric: "Active",       metricLabel: "running" },
  { name: "Proposal Engine",      tag: "sales",       metric: "Active",       metricLabel: "running" },
  { name: "Onboarding System",    tag: "retention",   metric: "3 days saved", metricLabel: "per new client" },
  { name: "Reporting System",     tag: "visibility",  metric: "Auto",         metricLabel: "monthly reports" },
  { name: "Review Engine",        tag: "reputation",  metric: "+2.3×",        metricLabel: "review velocity" },
  { name: "Reactivation Engine",  tag: "growth",      metric: "Active",       metricLabel: "running" },
];

const systemCards = [
  {
    name: "Lead Response Engine",
    desc: "Responds to every inbound lead fast. Personalised, qualified, and booked — before your competitors have opened their email.",
    metric: "↗ More leads converted",
  },
  {
    name: "Proposal Engine",
    desc: "Generates fully personalised proposals from a call transcript. Branded, scoped, and ready to send in under two hours instead of two days.",
    metric: "↗ 70% less time on proposals",
  },
  {
    name: "Onboarding System",
    desc: "Structured client onboarding — strategy docs, approvals, data collection — without chasing emails for three weeks.",
    metric: "↗ 3 days saved per client",
  },
  {
    name: "Reporting System",
    desc: "Automated monthly performance reports built from your data. Clients see ROI clearly. No more last-minute scrambles before calls.",
    metric: "↗ Clients stay longer",
  },
  {
    name: "Review Engine",
    desc: "Systematically captures 5-star reviews at the moment your clients are happiest. Turns good work into visible, searchable proof.",
    metric: "↗ 2.3× more reviews per month",
  },
  {
    name: "Reactivation Engine",
    desc: "Re-engages your dormant leads and past clients automatically. Consistent, human-feeling sequences with real context — not spam blasts.",
    metric: "↗ Strong win-back rates",
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
    title: "We scope your setup",
    body: "One call to understand your agency, your clients, and where the biggest gaps are. No 40-page questionnaires. We figure this out together.",
  },
  {
    n: "2",
    title: "We build and connect",
    body: "Your systems are built, integrated with your existing tools, and tested. You get access to the Client OS so you can see exactly what's running.",
  },
  {
    n: "3",
    title: "They run. You grow.",
    body: "From month one, your systems are live. We monitor, maintain, and improve them on a monthly retainer. You pay for outcomes, not hours.",
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
            AutoAITech builds and runs AI infrastructure for Irish and UK agencies — lead follow-up,
            proposals, reporting, and more — running 24/7 so your team can focus on the work that
            actually matters.
          </p>

          {/* CTAs */}
          <div className="animate-hero-4 flex items-center gap-4 mb-14">
            <Link href="/contact" className="btn-green">
              Book a free call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/systems"
              className="no-underline flex items-center gap-1.5 transition-colors"
              style={{ ...sans, fontSize: 14, color: INK_MID }}
            >
              See the systems
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="animate-hero-5 flex gap-10 pt-8"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            {[
              { val: "2–3", unit: "wk",  label: "setup time" },
              { val: "24",  unit: "/7",  label: "systems run continuously" },
              { val: "99",  unit: "%",   label: "uptime target" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ ...display, fontSize: "2rem", fontWeight: 700, color: INK, lineHeight: 1, marginBottom: 4 }}>
                  {s.val}<span style={{ color: GREEN }}>{s.unit}</span>
                </div>
                <div style={{ ...mono, fontSize: 10, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark live panel */}
        <div
          className="animate-hero-r flex flex-col"
          style={{ background: DARK_BG, padding: "2rem" }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between mb-6">
            <span style={{ ...mono, fontSize: 10, color: DARK_MID, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Infrastructure / Live status
            </span>
            <span className="flex items-center gap-1.5" style={{ ...mono, fontSize: 10, color: DARK_GREEN }}>
              <span className="status-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: DARK_GREEN, display: "block" }} />
              All systems operational
            </span>
          </div>

          {/* System rows */}
          <div className="flex flex-col gap-0.5 flex-1">
            {liveSystems.map((s, i) => (
              <div
                key={s.name}
                className={`flex items-center justify-between row-in-${i + 1}`}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: DARK_SURFACE,
                  border: `1px solid ${DARK_BORDER}`,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="status-pulse"
                    style={{ width: 7, height: 7, borderRadius: "50%", background: DARK_GREEN, flexShrink: 0, display: "block" }}
                  />
                  <div>
                    <div style={{ ...mono, fontSize: 11.5, color: DARK_TEXT }}>{s.name}</div>
                    <div style={{ ...mono, fontSize: 9.5, color: DARK_MID, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.tag}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div style={{ ...mono, fontSize: 10.5, color: DARK_GREEN }}>{s.metric}</div>
                  <div style={{ ...mono, fontSize: 9, color: DARK_FAINT }}>{s.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel footer */}
          <div
            className="flex items-center justify-between mt-4 pt-4"
            style={{ borderTop: `1px solid ${DARK_BORDER}` }}
          >
            <span style={{ ...mono, fontSize: 9.5, color: DARK_FAINT }}>
              Uptime this month: <strong style={{ color: DARK_GREEN }}>99.97%</strong>
            </span>
            <span style={{ ...mono, fontSize: 10, color: DARK_MID, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Client OS
            </span>
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

        {/* Availability panel */}
        <AnimateIn direction="right">
          <div style={{ background: "#fafaf9", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem" }}>
            <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
              Current availability
            </div>
            {[
              { label: "Agencies onboarded", value: "Taking applications" },
              { label: "Setup time",         value: "2–3 weeks" },
              { label: "Monthly retainer",   value: "From €1,200/mo" },
              { label: "Systems",            value: "Scoped to your agency" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between py-3"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span style={{ ...sans, fontSize: 13, color: INK_MID }}>{row.label}</span>
                <span style={{ ...mono, fontSize: 12, color: INK, fontWeight: 500, textAlign: "right" }}>{row.value}</span>
              </div>
            ))}
            <div className="flex items-start justify-between pt-3">
              <span style={{ ...sans, fontSize: 13, color: INK_MID }}>Active status</span>
              <span
                className="inline-flex items-center gap-1"
                style={{ ...mono, fontSize: 10, color: GREEN, background: GREEN_LIGHT, border: `1px solid ${GREEN_BORDER}`, padding: "2px 7px", borderRadius: 100 }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: GREEN, display: "block" }} />
                Accepting
              </span>
            </div>
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
            One 30-minute call and we&apos;ll tell you exactly what your agency is missing and what that
            infrastructure looks like in practice.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-green">
              Book a free call
            </Link>
            <Link
              href="/systems"
              className="no-underline"
              style={{ ...sans, fontSize: 14, color: "#6b6a67", border: "1px solid #333", padding: "12px 24px", borderRadius: 8, transition: "border-color 0.15s" }}
            >
              See the systems
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
