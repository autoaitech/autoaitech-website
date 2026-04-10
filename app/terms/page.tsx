const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };

const INK       = "#111110";
const INK_MID   = "#6b6a67";
const INK_FAINT = "#a09e9b";
const BORDER    = "#e2e1de";
const GREEN     = "#059669";

export const metadata = {
  title: "Terms of Service — AutoAITech",
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

export default function TermsPage() {
  return (
    <div className="mt-[56px]" style={{ background: "white", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "4rem 4rem 3rem" }}>
        <div style={{ ...mono, fontSize: 9.5, color: GREEN, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Legal
        </div>
        <h1 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Terms of Service
        </h1>
        <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: INK_FAINT }}>
          Last updated: 10 April 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "4rem", maxWidth: 760 }}>

        <Section title="1. About AutoAITech">
          <p>AutoAITech is the trading name of <strong>Sean Mulligan</strong>, a sole trader based in Dublin, Ireland. I design, build, and operate AI agentic infrastructure for agencies and B2B service businesses. These Terms of Service govern your use of this website (<strong>autoaitech.co</strong>) and, where applicable, any services I provide.</p>
          <p style={{ marginTop: "0.75rem" }}>By accessing this website, you agree to these terms. If you do not agree, please do not use this website.</p>
        </Section>

        <Section title="2. Website use">
          <p>You may use this website for lawful purposes only. You must not:</p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <li>Attempt to gain unauthorised access to any part of my systems</li>
            <li>Use automated tools to scrape or copy content without permission</li>
            <li>Submit false or misleading information through the contact form</li>
            <li>Use the site in any way that violates applicable Irish or EU law</li>
          </ul>
        </Section>

        <Section title="3. Services">
          <p>The services described on this website — including AI infrastructure, agentic systems, and orchestration platforms — are provided under separate client agreements. Nothing on this website constitutes a binding offer or contract for services.</p>
          <p style={{ marginTop: "0.75rem" }}>A discovery call or contact form submission does not create a contractual relationship. Any engagement will be governed by a separate written agreement signed by both parties.</p>
        </Section>

        <Section title="4. Intellectual property">
          <p>All content on this website — including text, design, code, and brand assets — is owned by Sean Mulligan (trading as AutoAITech) or licensed from third parties. You may not reproduce, distribute, or create derivative works from any content without prior written consent.</p>
        </Section>

        <Section title="5. Disclaimers">
          <p>This website is provided on an &ldquo;as is&rdquo; basis. I make no warranties, express or implied, regarding the accuracy, completeness, or availability of content. I reserve the right to change, update, or remove content at any time without notice.</p>
          <p style={{ marginTop: "0.75rem" }}>Any results or outcomes described on this website are illustrative. Actual outcomes depend on the specific circumstances of your business, and I make no guarantees of specific results.</p>
        </Section>

        <Section title="6. Limitation of liability">
          <p>To the maximum extent permitted by Irish law, I shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. My total liability for any claim arising from use of this website shall not exceed €100. Nothing in these terms excludes liability that cannot lawfully be excluded under Irish or EU consumer protection law.</p>
        </Section>

        <Section title="7. Third-party links">
          <p>This website may contain links to third-party websites. I am not responsible for the content, privacy practices, or terms of any third-party site. Links do not constitute endorsement.</p>
        </Section>

        <Section title="8. Governing law">
          <p>These terms are governed by the laws of Ireland. Any disputes arising from these terms or your use of this website shall be subject to the exclusive jurisdiction of the Irish courts.</p>
        </Section>

        <Section title="9. Changes to these terms">
          <p>I may update these terms from time to time. The &ldquo;last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of this website after changes constitutes your acceptance of the updated terms.</p>
        </Section>

        <Section title="10. Contact">
          <p>For any questions about these terms: <a href="mailto:sean@autoaitech.co" style={{ color: GREEN }}>sean@autoaitech.co</a></p>
        </Section>

      </div>
    </div>
  );
}
