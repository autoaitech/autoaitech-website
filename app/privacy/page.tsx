const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };

const INK      = "#111110";
const INK_MID  = "#6b6a67";
const INK_FAINT = "#a09e9b";
const BORDER   = "#e2e1de";
const GREEN    = "#059669";

export const metadata = {
  title: "Privacy Policy — AutoAITech",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ ...display, fontSize: "1.1rem", fontWeight: 700, color: INK, letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
        {title}
      </h2>
      <div style={{ ...sans, fontSize: 15, fontWeight: 300, color: INK_MID, lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="mt-[56px]" style={{ background: "white", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "4rem 4rem 3rem" }}>
        <div style={{ ...mono, fontSize: 9.5, color: GREEN, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Legal
        </div>
        <h1 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Privacy Policy
        </h1>
        <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: INK_FAINT }}>
          Last updated: 10 April 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "4rem", maxWidth: 760 }}>

        <Section title="1. Who I am">
          <p>AutoAITech is the trading name of <strong>Sean Mulligan</strong>, a sole trader based in Dublin, Ireland. I build and operate AI agentic infrastructure for agencies and B2B service businesses. This website is <strong>autoaitech.co</strong>.</p>
          <p style={{ marginTop: "0.75rem" }}>I am the data controller for any personal data collected through this website. If you have any questions about this policy or how I handle your data, contact me at <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a>.</p>
        </Section>

        <Section title="2. What data I collect">
          <p>When you use the contact form on this site, I collect:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li>Your name</li>
            <li>Your business name</li>
            <li>Your email address</li>
            <li>Your phone number (optional)</li>
            <li>Any information you choose to share about your business challenges</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>My hosting provider (Vercel) also processes standard server logs — including IP address, browser type, and pages visited — for security, abuse prevention, and performance monitoring. These logs are retained only for as long as Vercel&rsquo;s operational requirements dictate.</p>
          <p style={{ marginTop: "0.75rem" }}>If you accept analytics cookies (see Section 9), Vercel Analytics collects anonymised traffic data: pages visited, referrer, device type, country. No personally identifying information is collected through analytics.</p>
        </Section>

        <Section title="3. How I use your data">
          <p>I use your data solely to:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li>Respond to your enquiry</li>
            <li>Schedule and conduct a discovery call</li>
            <li>Send follow-up communications directly related to your enquiry</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>I do not use your data for marketing without your explicit consent. I do not sell, rent, or share your data with any third party for their own marketing purposes. I do not use your data to train AI models.</p>
        </Section>

        <Section title="4. Legal basis for processing">
          <p>Under the GDPR, I process your personal data on the following legal bases:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Legitimate interest</strong> — to respond to your enquiry and assess whether we can work together.</li>
            <li><strong>Consent</strong> — for any follow-up communications beyond your initial enquiry, and for the use of non-essential analytics cookies.</li>
            <li><strong>Legal obligation</strong> — where Irish tax or accounting law requires me to retain records of any engagement.</li>
          </ul>
        </Section>

        <Section title="5. Data retention">
          <p>I retain contact form submissions for up to 24 months from the date of submission. If you become a client, I retain relevant engagement data for the duration of our work together plus 6 years thereafter, as required by Irish tax and accounting law.</p>
          <p style={{ marginTop: "0.75rem" }}>You may request deletion at any time — see Section 8.</p>
        </Section>

        <Section title="6. Third parties who process your data">
          <p>I use the following service providers (sub-processors) to operate this website and handle enquiries. Each operates under a Data Processing Agreement consistent with GDPR requirements:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Vercel Inc.</strong> (USA) — website hosting and, with your consent, analytics</li>
            <li><strong>Resend</strong> (USA) — transactional email delivery for contact form submissions</li>
            <li><strong>Google LLC (Google Workspace)</strong> (USA / global) — mailbox where enquiries are received and stored at <strong>sean@autoaitech.co</strong></li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>I do not share your data with any other third parties.</p>
        </Section>

        <Section title="7. International data transfers">
          <p>Some of the service providers listed in Section 6 are based in the United States or process data globally. Where personal data is transferred outside the European Economic Area (EEA), the transfer is protected by the European Commission&rsquo;s <strong>Standard Contractual Clauses (SCCs)</strong> and any supplementary safeguards required under GDPR and the <em>Schrems II</em> ruling.</p>
          <p style={{ marginTop: "0.75rem" }}>If you would like details of the specific safeguards in place for any of these transfers, email me at <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a>.</p>
        </Section>

        <Section title="8. Your rights">
          <p>Under the GDPR, you have the right to:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Access</strong> the personal data I hold about you</li>
            <li><strong>Rectify</strong> any inaccurate or incomplete data</li>
            <li><strong>Erase</strong> your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong>Restrict</strong> or object to processing</li>
            <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format</li>
            <li><strong>Withdraw consent</strong> at any time, where consent is the legal basis for processing</li>
            <li><strong>Lodge a complaint</strong> with a supervisory authority</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>To exercise any of these rights, email <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a>. I will respond within 30 days.</p>
          <p style={{ marginTop: "0.75rem" }}>You also have the right to lodge a complaint with the <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" style={{ color: GREEN }}>Data Protection Commission Ireland</a>, the supervisory authority for Irish data protection matters.</p>
        </Section>

        <Section title="9. Cookies and tracking">
          <p>This website sets <strong>no cookies by default</strong>. On your first visit, a consent banner asks whether you accept analytics cookies:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>If you click Accept</strong> — <strong>Vercel Analytics</strong> is loaded. It collects anonymised traffic data (pages visited, referrer, device type, country) to help me understand how the site is used. It does not identify you personally.</li>
            <li><strong>If you click Decline</strong> — no analytics scripts or cookies are loaded. Your choice is remembered locally in your browser.</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>Your consent preference is stored as a small entry in your browser&rsquo;s local storage, which is strictly necessary to remember your choice and does not require consent itself.</p>
          <p style={{ marginTop: "0.75rem" }}>You can change or withdraw your consent at any time by clicking <strong>Manage Cookies</strong> in the footer of any page. This will clear your preference and re-show the consent banner on your next navigation.</p>
        </Section>

        <Section title="10. Data security">
          <p>I take reasonable technical and organisational measures to protect your data, including encrypted transport (HTTPS/TLS), access controls on my mailbox and systems, and reliance on reputable sub-processors with strong security practices. No system can be guaranteed completely secure, but I will notify affected individuals and the Data Protection Commission Ireland without undue delay in the event of a personal data breach likely to result in a risk to your rights and freedoms.</p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>I may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes. Continued use of this website after changes constitutes acceptance of the updated policy. For material changes, I will make reasonable efforts to notify users directly.</p>
        </Section>

        <Section title="12. Contact">
          <p>For any privacy-related questions, requests, or complaints: <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a></p>
        </Section>

      </div>
    </div>
  );
}
