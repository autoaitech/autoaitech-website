import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "AI Systems — AutoAITech",
  description:
    "Explore the six AI systems AutoAITech builds and runs inside your business. Lead generation, retention, onboarding, ROI tracking, creative, and campaign monitoring.",
};

const systems = [
  {
    icon: "🎯",
    name: "AI Lead Engine",
    tagline: "Never run out of qualified leads again",
    what: "The AI Lead Engine continuously identifies, scores, and delivers high-intent prospects to your pipeline. It pulls from multiple data sources, qualifies leads against your ideal customer profile, and routes them directly to your team — or triggers follow-up automatically.",
    replaces: "Manual prospecting, cold list-building, unqualified leads clogging your pipeline.",
    roi: "Agencies using the AI Lead Engine typically see a 3–5× increase in qualified pipeline within 60 days.",
    integrates: ["CRM (HubSpot, Pipedrive, Zoho)", "Email (Gmail, Outlook)", "LinkedIn", "Calendar"],
  },
  {
    icon: "🔁",
    name: "Retention Reactor AI",
    tagline: "Keep the clients you've already won",
    what: "The Retention Reactor monitors client engagement signals across email, CRM activity, and billing. When it detects early warning signs — reduced engagement, delayed payments, low activity — it triggers personalised re-engagement workflows before clients go cold.",
    replaces: "Reactive client management, churn you only notice after the fact, manual check-in calls.",
    roi: "Reducing churn by even 10% typically adds more to revenue than doubling new sales. The Retention Reactor runs that process automatically.",
    integrates: ["CRM", "Email", "Payments (Stripe, GoCardless)", "Calendar"],
  },
  {
    icon: "⚡",
    name: "Smart Onboarding Engine",
    tagline: "First impressions run on autopilot",
    what: "The Smart Onboarding Engine automates the entire new client journey — from signed contract to fully onboarded. It sends the right information at the right time, collects what it needs, books kickoff calls, and creates internal tasks — without anyone chasing.",
    replaces: "Manual onboarding checklists, missed steps, inconsistent client experiences.",
    roi: "Faster time-to-value for clients means better retention, more referrals, and less ops overhead.",
    integrates: ["CRM", "Calendar (Google, Outlook)", "Email", "Bookings (Calendly, Cal.com)"],
  },
  {
    icon: "📊",
    name: "ROI Intelligence Hub",
    tagline: "Know what's working — always",
    what: "The ROI Intelligence Hub pulls performance data from every system and every integration into a single view. It tracks leads generated, clients retained, campaigns improved, and revenue attributed — giving you and your clients clear evidence of what the infrastructure is doing.",
    replaces: "Spreadsheet reporting, manual KPI tracking, unclear agency value.",
    roi: "Clear ROI visibility is the #1 reason clients renew and expand. The Hub makes that visible automatically.",
    integrates: ["All connected systems", "Analytics (Google Analytics)", "Payments", "CRM", "Ads"],
  },
  {
    icon: "🎨",
    name: "Creative Intelligence Engine",
    tagline: "Your best ads keep getting better",
    what: "The Creative Intelligence Engine monitors ad performance across platforms, identifies winning creative patterns, and automates testing of new variations. It surfaces what's working and flags underperformers — so your creative budget is always working harder.",
    replaces: "Manual creative reviews, gut-feel ad decisions, slow testing cycles.",
    roi: "Faster creative iteration means lower CPAs, higher ROAS, and campaigns that improve week over week.",
    integrates: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Analytics"],
  },
  {
    icon: "📡",
    name: "Campaign Monitoring Agents",
    tagline: "24/7 eyes on every campaign",
    what: "Campaign Monitoring Agents watch your live ad accounts around the clock. They detect budget anomalies, sudden performance drops, policy flags, and missed targets — and alert your team (or take pre-approved corrective actions) immediately, not the next morning.",
    replaces: "Manual ad account checks, expensive mistakes caught too late, reactive campaign management.",
    roi: "Catching a campaign issue 6 hours earlier can save thousands. Monitoring agents never sleep.",
    integrates: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
  },
];

export default function SystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Six systems. Built to compound.
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Every system AutoAITech builds is designed to run continuously, generate measurable output, and connect
            to every other system in your stack.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col divide-y divide-slate-100">
          {systems.map((system, i) => (
            <AnimateIn key={system.name} delay={80} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="py-16">
                <div className={`flex flex-col lg:flex-row gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left: icon + name */}
                  <div className="lg:w-1/3 flex flex-col gap-4">
                    <span className="text-5xl">{system.icon}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{system.name}</h2>
                    <p className="text-blue-600 font-semibold text-base">{system.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {system.integrates.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: details */}
                  <div className="lg:w-2/3 flex flex-col gap-8">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">What it does</h3>
                      <p className="text-slate-700 leading-relaxed">{system.what}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">What it replaces</h3>
                      <p className="text-slate-700 leading-relaxed">{system.replaces}</p>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-xl p-5 border border-slate-200">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">ROI impact</h3>
                      <p className="text-slate-700 leading-relaxed">{system.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Which systems are right for your business?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free strategy call. We'll map your biggest growth bottlenecks to the systems that solve them
              — and give you a clear picture of your ROI potential.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-base transition-colors inline-block"
            >
              Book a Strategy Call
            </Link>
            <p className="text-slate-600 text-sm mt-4">Free. No commitment. Just clarity.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
