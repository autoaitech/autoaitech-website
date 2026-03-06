"use client";

import { useState, useEffect } from "react";

const DARK_BG   = "#0d1117";
const RED       = "#c1440e";
const GREEN     = "#059669";
const DARK_RING = "#1e2631";
const TICK_DIM  = "#2a3441";
const HAND      = "#ddd8d0";

function ClockFace() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const s   = now.getSeconds();
  const m   = now.getMinutes();
  const h   = now.getHours() % 12;
  const sDeg = s * 6;
  const mDeg = m * 6 + s * 0.1;
  const hDeg = h * 30 + m * 0.5;

  /* 60 tick marks — longer at each hour, short for minutes */
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const isHour = i % 5 === 0;
    const angle  = (i * 6 - 90) * (Math.PI / 180);
    const outer  = 88;
    const inner  = isHour ? 78 : 83;
    return {
      x1: 100 + outer * Math.cos(angle),
      y1: 100 + outer * Math.sin(angle),
      x2: 100 + inner  * Math.cos(angle),
      y2: 100 + inner  * Math.sin(angle),
      isHour,
    };
  });

  const hand = (deg: number, len: number, back: number, width: number, color: string) => {
    const rad = (deg - 90) * (Math.PI / 180);
    return {
      x1: 100 - back  * Math.cos(rad),
      y1: 100 - back  * Math.sin(rad),
      x2: 100 + len   * Math.cos(rad),
      y2: 100 + len   * Math.sin(rad),
      width,
      color,
    };
  };

  const hourHand   = hand(hDeg, 52, 8,  3,   HAND);
  const minuteHand = hand(mDeg, 70, 10, 2,   HAND);
  const secondHand = hand(sDeg, 78, 14, 1.2, RED);

  return (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ display: "block" }}>
      {/* Outer ring */}
      <circle cx="100" cy="100" r="90" stroke={DARK_RING} strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="88" stroke={DARK_RING} strokeWidth="0.5" fill="none" />

      {/* Tick marks */}
      {ticks.map((tk, i) => (
        <line
          key={i}
          x1={tk.x1} y1={tk.y1}
          x2={tk.x2} y2={tk.y2}
          stroke={tk.isHour ? "#3a4a5a" : TICK_DIM}
          strokeWidth={tk.isHour ? 2 : 0.8}
          strokeLinecap="round"
        />
      ))}

      {/* Hour hand */}
      <line
        x1={hourHand.x1} y1={hourHand.y1}
        x2={hourHand.x2} y2={hourHand.y2}
        stroke={hourHand.color} strokeWidth={hourHand.width}
        strokeLinecap="round"
      />

      {/* Minute hand */}
      <line
        x1={minuteHand.x1} y1={minuteHand.y1}
        x2={minuteHand.x2} y2={minuteHand.y2}
        stroke={minuteHand.color} strokeWidth={minuteHand.width}
        strokeLinecap="round"
      />

      {/* Second hand */}
      <line
        x1={secondHand.x1} y1={secondHand.y1}
        x2={secondHand.x2} y2={secondHand.y2}
        stroke={secondHand.color} strokeWidth={secondHand.width}
        strokeLinecap="round"
      />

      {/* Center cap */}
      <circle cx="100" cy="100" r="4"   fill={DARK_BG} />
      <circle cx="100" cy="100" r="2.5" fill={RED} />
    </svg>
  );
}

export default function HeroPanel() {
  return (
    <div
      style={{
        background: DARK_BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem",
        position: "relative",
        overflow: "hidden",
        flex: 1,
        minHeight: 0,
      }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, #1e2631 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Label */}
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 9.5,
          fontWeight: 500,
          color: GREEN,
          textTransform: "uppercase" as const,
          letterSpacing: "0.12em",
        }}>
          Always on
        </span>

        {/* Clock + statement */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
          <ClockFace />

          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "1.65rem",
              fontWeight: 700,
              color: "#ddd8d0",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
            }}>
              Running right now.
            </p>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "#3a4a5a",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginTop: "0.6rem",
            }}>
              No pause. No queue. No 5pm.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid #1e2631",
          paddingTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9.5,
            color: "#2a3441",
          }}>
            Infrastructure doesn't take weekends.
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            color: "#1e2631",
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
          }}>
            autoaitech.co
          </span>
        </div>
      </div>
    </div>
  );
}
