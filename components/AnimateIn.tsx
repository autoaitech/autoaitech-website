"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "fade" | "left" | "right";
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const base = "transition-all duration-700 ease-out";

  const hidden: Record<string, string> = {
    up: "opacity-0 translate-y-8",
    fade: "opacity-0",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
  };

  const shown = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
