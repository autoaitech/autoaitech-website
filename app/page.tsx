import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const systems = [
  {
    name: "AI Lead Engine",
    tag: "Lead generation",
    description: "Continuously identifies, qualifies, and delivers high-intent leads into your pipeline.",
    outcome: "3–5× more qualified pipeline in 60 days",
  },
  {
    name: "Retention Reactor AI",
    tag: "Client retention",
    description: "Detects at-risk clients before they leave and automatically re-engages dormant relationships.",
    outcome: "Catch churn signals weeks before clients go cold",
  },
  {
    name: "Smart Onboarding Engine",
    tag: "Onboarding",
    description: "Automates every step of client onboarding — from contract to delivery — so nothing slips.",
    outcome: "Zero missed steps. Faster time-to-value.",
  },
  {
    name: "ROI Intelligence Hub",
    tag: "ROI visibility",
    description: "Pulls performance data from every connected system into one view. You always know what's working.",
    outcome: "Live ROI per system, per week — automatically",
  },
  {
    name: "Creative Intelligence Engine",
    tag: "Creative ops",
    description: "Monitors ad performance, spots what's working, and automates testing of new variations.",
    outcome: "Lower CPAs. Higher ROAS. Week over week.",
  },
  {
    name: "Campaign Monitoring Agents",
    tag: "Campaign intelligence",
    description: "Watches your live ad accounts around the clock and flags problems before they cost you.",
    outcome: "Catch campaign issues hours before they're expensive",
  },
];

const systemIcons = [
  // AI Lead Engine — trending up
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="lead">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>,
  // Retention Reactor — refresh
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="retention">
    <polyline points="1 4 1 10 7 10"/>
    <polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>,
  // Smart Onboarding — lightning bolt
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="onboarding">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  // ROI Hub — bar chart
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="roi">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>,
  // Creative Intelligence — star
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="creative">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
  // Campaign Monitoring — eye
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] stroke-[#60a5fa]" key="campaign">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>,
];

const steps = [
  { number: "01", title: "Connect your tools", description: "We integrate with your existing stack — CRM, email, ads, calendar, payments. No ripping and replacing." },
  { number: "02", title: "Systems activate", description: "Your AI systems go live immediately — finding leads, retaining clients, monitoring campaigns around the clock." },
  { number: "03", title: "ROI compounds", description: "Every system feeds into the next. Your infrastructure grows more powerful with every passing week." },
];

const stepIcons = [
  <svg key="connect" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] stroke-blue-600">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>,
  <svg key="activate" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] stroke-blue-600">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  <svg key="roi" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] stroke-blue-600">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>,
];

const stats = [
  { number: "35+", label: "Integrations", sub: "CRM, email, ads, payments & more" },
  { number: "6", label: "AI Systems", sub: "Running 24/7 inside your business" },
  { number: "24/7", label: "Always Running", sub: "No holidays, no sick days, no downtime" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0f] overflow-hidden noise-overlay pt-28 pb-24 px-6">
        {/* Grid */}
        <div className="absolute inset-0 hero-grid" />

        {/* Glow orbs */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-1.5 w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">Founder-led AI infrastructure for Irish &amp; UK agencies</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            AI systems that{" "}
            <span className="gradient-text">compound</span>{" "}
            your growth
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            AutoAITech builds and runs AI infrastructure inside your business — finding leads, retaining clients,
            and monitoring campaigns continuously. I build it. I run it. You own the results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-glow bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors">
              Book a Strategy Call
            </Link>
            <Link href="/systems" className="border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors">
              See the Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0d0d12] border-y border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-white">{s.number}</p>
              <p className="text-blue-400 text-sm font-semibold mt-1">{s.label}</p>
              <p className="text-slate-500 text-xs mt-0.5 hidden sm:block">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SYSTEMS OVERVIEW ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-4">Six systems. One infrastructure.</h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">Each system runs continuously, generates measurable output, and connects to the others.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map((system, i) => (
              <AnimateIn key={system.name} delay={i * 80} direction="up">
                <div className="bg-[#0c0c14] rounded-xl p-7 system-card h-full cursor-default flex flex-col">
                  <div
                    className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15))", border: "1px solid rgba(99,102,241,0.3)" }}
                  >
                    {systemIcons[i]}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#f1f5f9] mb-2 tracking-[-0.01em]">{system.name}</h3>
                  <p className="text-sm text-[#64748b] leading-[1.65]">{system.description}</p>
                  <div className="mt-auto pt-5 border-t border-white/5 flex items-center gap-2">
                    <span className="text-blue-500 text-xs">→</span>
                    <span className="text-xs text-blue-400/80 font-medium">{system.outcome}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="text-center mt-12" delay={200}>
            <Link href="/systems" className="text-sm text-[#6b7280] border-b border-[#e5e7eb] pb-0.5 hover:text-[#111] hover:border-[#111] transition-colors duration-150">
              See all systems in detail →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHY AUTOAITECH ── */}
      <section className="bg-[#F9FAFB] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-4">Why AutoAITech</h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">Not software you configure. Not a freelancer you manage. Infrastructure that runs.</p>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <div className="overflow-x-auto">
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm min-w-[560px]">
                {/* Header */}
                <div className="grid grid-cols-[1fr_200px_200px]">
                  <div className="bg-slate-50 border-b border-slate-200 p-4" />
                  <div className="bg-blue-900 border-b border-blue-800 p-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-blue-200">AutoAITech</span>
                  </div>
                  <div className="bg-slate-50 border-b border-slate-200 border-l border-slate-200 p-4 flex items-center">
                    <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-400">Traditional Agency</span>
                  </div>
                </div>
                {/* Rows */}
                {[
                  { label: "Always running", sub: "Systems operate continuously", aa: "24/7, no downtime", trad: "Office hours only" },
                  { label: "ROI visibility", sub: "Know what's actually working", aa: "Live dashboard, every day", trad: "Monthly PDF reports" },
                  { label: "Scales with you", sub: "Works across all clients", aa: "Infrastructure model", trad: "Retainer per client" },
                  { label: "Connected systems", sub: "Everything feeds the growth loop", aa: "6 integrated systems", trad: "Disconnected tools" },
                  { label: "Lead generation", sub: "Continuous pipeline", aa: "AI-driven, always on", trad: "Ad spend dependent" },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`grid grid-cols-[1fr_200px_200px]${i < arr.length - 1 ? " border-b border-slate-100" : ""}`}>
                    <div className="p-5">
                      <p className="text-sm font-semibold text-slate-800">{row.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{row.sub}</p>
                    </div>
                    <div className="p-5 bg-blue-50 border-l border-blue-100 flex items-center gap-2">
                      <span className="text-blue-600 font-bold text-xs flex-shrink-0">✓</span>
                      <span className="text-xs font-semibold text-blue-800">{row.aa}</span>
                    </div>
                    <div className="p-5 border-l border-slate-100 flex items-center gap-2">
                      <span className="text-slate-300 font-bold text-xs flex-shrink-0">✗</span>
                      <span className="text-xs text-slate-500">{row.trad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#f8fafc] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-4">How it works</h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">Three steps. Then it runs.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr_48px_1fr] items-start">
            {steps.flatMap((step, i) => {
              const card = (
                <AnimateIn key={step.number} delay={i * 120} direction="up">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
                    <div className="text-[80px] font-black text-slate-100 leading-none tracking-tight mb-4 select-none font-mono">{step.number}</div>
                    <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      {stepIcons[i]}
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0f172a] mb-2.5 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-[1.7]">{step.description}</p>
                  </div>
                </AnimateIn>
              );
              if (i < steps.length - 1) {
                return [card, (
                  <div key={`arrow-${i}`} className="hidden md:flex items-center justify-center pt-14 text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                )];
              }
              return [card];
            })}
          </div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <AnimateIn direction="up">
            <blockquote className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-tight mb-8">
                "I got tired of watching agencies pay for AI tools that needed a full-time person to babysit them. Automations that broke. Software nobody logged into. I built AutoAITech because agencies deserve systems that actually run — not ones they have to run."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  SM
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900">Sean Mulligan</p>
                  <p className="text-xs text-slate-500">Founder, AutoAITech</p>
                </div>
              </div>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* ── CLIENT OS SECTION ── */}
      <section className="relative bg-[#0a0a0f] py-24 px-6 noise-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left: copy */}
          <AnimateIn direction="left" className="lg:w-1/2 flex flex-col gap-6">
            <span className="inline-flex w-fit bg-blue-600/15 border border-blue-600/25 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Client OS — Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Your clients see exactly what the AI is doing
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every agency I work with gets access to the AutoAITech Client OS — a live dashboard showing active
              systems, integration health, and ROI in real time. No more "what's it doing?" calls.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Live system status — see what's running right now",
                "ROI tracked per system, per week",
                "35+ integrations connected and monitored",
                "Event feed showing every action taken",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-glow inline-flex w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
              Get access for your agency →
            </Link>
          </AnimateIn>

          {/* Right: OS mockup */}
          <AnimateIn direction="right" className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-2xl border border-white/10 bg-[#111118] shadow-2xl overflow-hidden">
              <div className="bg-[#0d0d12] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-slate-500 text-xs font-mono">app.autoaitech.co</span>
                <div className="w-16" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                {/* Nav row */}
                <div className="flex items-center gap-3 mb-1">
                  {["Systems", "Integrations", "ROI", "Events"].map((tab, i) => (
                    <span key={tab} className={`text-xs px-3 py-1 rounded-md font-medium ${i === 0 ? "bg-blue-600/20 text-blue-400 border border-blue-600/30" : "text-slate-500"}`}>
                      {tab}
                    </span>
                  ))}
                </div>

                {/* Integration health */}
                <div className="bg-[#0d0d12] rounded-xl p-4 border border-white/5">
                  <p className="text-slate-500 text-xs mb-3 font-mono">Integration Health</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "HubSpot CRM", ok: true },
                      { name: "Google Analytics", ok: true },
                      { name: "Meta Ads", ok: true },
                      { name: "Gmail", ok: true },
                      { name: "Stripe", ok: false },
                      { name: "Calendly", ok: true },
                    ].map((int) => (
                      <div key={int.name} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${int.ok ? "bg-green-400" : "bg-yellow-400"}`} />
                        <span className="text-slate-400 text-xs truncate">{int.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events feed */}
                <div className="bg-[#0d0d12] rounded-xl p-4 border border-white/5">
                  <p className="text-slate-500 text-xs mb-3 font-mono">Recent Events</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { event: "crm.lead.upserted", time: "2s ago", color: "text-blue-400" },
                      { event: "analytics.daily_summary", time: "1m ago", color: "text-cyan-400" },
                      { event: "crm.deal.upserted", time: "4m ago", color: "text-blue-400" },
                      { event: "calendar.event.upserted", time: "9m ago", color: "text-purple-400" },
                    ].map((ev) => (
                      <div key={ev.event + ev.time} className="flex items-center justify-between">
                        <span className={`text-xs font-mono ${ev.color}`}>{ev.event}</span>
                        <span className="text-slate-600 text-xs">{ev.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative bg-[#0a0a0f] py-24 px-6 text-center noise-overlay overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to build infrastructure that{" "}
              <span className="gradient-text">compounds</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a call. I'll look at what you're working with, tell you which systems make the most sense, and give you an honest picture of what's possible.
            </p>
            <Link href="/contact" className="btn-glow bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-base transition-colors inline-block">
              Book a Strategy Call
            </Link>
            <p className="text-slate-600 text-sm mt-4">No commitment. No pitch deck. Just a real conversation.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
