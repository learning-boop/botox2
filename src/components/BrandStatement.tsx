import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STREAKS = [
  { top: "20%", left: "-10%", rotate: -8, opacity: 0.12 },
  { top: "50%", left: "25%", rotate: -2, opacity: 0.08 },
  { top: "72%", left: "60%", rotate: 4, opacity: 0.10 },
];

export default function BrandStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} style={{ position: "relative", background: "#0A0A0A", padding: "140px 40px", overflow: "hidden", textAlign: "center" }}>

      {/* Gold light streaks */}
      {STREAKS.map((s, i) => (
        <motion.div key={i} style={{ y, position: "absolute", top: s.top, left: s.left, width: "60%", height: 1, background: `linear-gradient(90deg, transparent, rgba(184,149,90,${s.opacity}), transparent)`, transform: `rotate(${s.rotate}deg)`, pointerEvents: "none" }} />
      ))}

      {/* Radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(184,149,90,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 40 }}>
          The Philosophy
        </div>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 8vw, 120px)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--gold)", marginBottom: 32, textTransform: "uppercase" }}>
          Less Frozen.<br />
          <span style={{ color: "#F7F3EE" }}>More You.</span>
        </h2>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, margin: "48px 0" }}>
          <div style={{ width: 60, height: 1, background: "linear-gradient(to right, transparent, rgba(184,149,90,0.6))" }} />
          <div style={{ width: 8, height: 8, border: "1px solid rgba(184,149,90,0.6)", borderRadius: "50%" }} />
          <div style={{ width: 60, height: 1, background: "linear-gradient(to left, transparent, rgba(184,149,90,0.6))" }} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 300, color: "rgba(247,243,238,0.5)", letterSpacing: "0.06em", lineHeight: 1.6 }}
        >
          Subtle.&nbsp;&nbsp;Balanced.&nbsp;&nbsp;Undeniably you.
        </motion.p>
      </motion.div>
    </section>
  );
}
