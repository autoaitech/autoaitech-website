"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const CONSENT_KEY = "aat_cookie_consent";
const CONSENT_EVENT = "aat-consent-change";

export default function AnalyticsGate() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const sync = () => {
      setHasConsent(localStorage.getItem(CONSENT_KEY) === "accepted");
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!hasConsent) return null;
  return <Analytics />;
}
