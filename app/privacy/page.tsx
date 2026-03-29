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
          Last updated: 29 March 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "4rem", maxWidth: 760 }}>

        <Section title="1. Who we are">
          <p>AutoAITech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an AI infrastructure company based in Ireland. We build and operate agentic systems for digital marketing agencies. Our website is <strong>autoaitech.co</strong>.</p>
          <p style={{ marginTop: "0.75rem" }}>We are the data controller for the personal data collected through this website. If you have any questions about this policy, contact us at <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a>.</p>
        </Section>

        <Section title="2. What data we collect">
          <p>When you use our contact form, we collect:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li>Your name</li>
            <li>Your agency name</li>
            <li>Your email address</li>
            <li>Your phone number (optional)</li>
            <li>Information you provide about your business challenges</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>We also collect standard server logs (IP address, browser type, pages visited) for security and performance purposes.</p>
        </Section>

        <Section title="3. How we use your data">
          <p>We use your data solely to:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li>Respond to your enquiry</li>
            <li>Schedule and conduct a discovery call</li>
            <li>Send follow-up communications related to your enquiry</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>We do not use your data for marketing without your explicit consent. We do not sell your data to third parties.</p>
        </Section>

        <Section title="4. Legal basis for processing">
          <p>Under GDPR, we process your personal data on the basis of <strong>legitimate interest</strong> — specifically, to respond to your enquiry and assess whether we can work together. Where we send follow-up communications beyond your initial enquiry, we rely on your <strong>consent</strong>.</p>
        </Section>

        <Section title="5. Data retention">
          <p>We retain contact form submissions for up to 24 months from the date of submission. If you become a client, we retain relevant data for the duration of our engagement plus 6 years as required by Irish tax and accounting law. You may request deletion at any time (see Section 7).</p>
        </Section>

        <Section title="6. Third parties">
          <p>Your data may be processed by the following third-party services we use to operate this website and our business:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Vercel</strong> — website hosting (EU region where available)</li>
            <li><strong>Supabase</strong> — database infrastructure</li>
            <li><strong>Google Workspace</strong> — email delivery</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>Each of these providers operates under their own data processing agreements and GDPR compliance frameworks.</p>
        </Section>

        <Section title="7. Your rights">
          <p>Under GDPR, you have the right to:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Rectify</strong> any inaccurate data</li>
            <li><strong>Erase</strong> your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong>Restrict</strong> or object to processing</li>
            <li><strong>Data portability</strong> — receive your data in a structured format</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>To exercise any of these rights, email <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a>. We will respond within 30 days.</p>
          <p style={{ marginTop: "0.75rem" }}>You also have the right to lodge a complaint with the <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" style={{ color: GREEN }}>Data Protection Commission Ireland</a>.</p>
        </Section>

        <Section title="8. Cookies">
          <p>We use cookies and similar technologies to help operate and improve this website. Specifically:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li><strong>Essential cookies</strong> — required for the website to function (e.g. security tokens). These cannot be declined.</li>
            <li><strong>Analytics cookies</strong> — provided by <strong>Vercel Analytics</strong> to help us understand how visitors use the site (pages visited, traffic sources). These are only set if you accept cookies.</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>When you first visit the site, you will be asked to accept or decline analytics cookies. You can change your preference at any time by clearing your browser&rsquo;s local storage for this site.</p>
        </Section>

        <Section title="9. Changes to this policy">
          <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes. Continued use of this website after changes constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="10. Contact">
          <p>For any privacy-related questions: <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a></p>
        </Section>

      </div>
    </div>
  );
}
