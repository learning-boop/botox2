import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONDITIONS = [
  {
    id: "crows-feet",
    label: "Crow's Feet",
    description: "Fine lines radiating from the outer corners of the eyes are among the first signs of ageing. A precise treatment here restores a well-rested, bright-eyed appearance without affecting your natural expressiveness.",
    detail: "2–4 injection points per side · Results visible within 5–7 days",
    image: "/assets/crow.png",
  },
  {
    id: "forehead",
    label: "Forehead Lines",
    description: "Horizontal forehead lines can make you appear worried or tired. Carefully calibrated treatment softens these lines while preserving natural movement — the hallmark of an expert approach.",
    detail: "Conservative dosing preserves brow lift · Typically 4–6 points",
    image: "/assets/forehead.png",
  },
  {
    id: "jawline",
    label: "Jawline Slimming",
    description: "Masseter reduction creates a slimmer, more refined facial contour. This treatment also provides significant relief for those who grind their teeth or experience jaw tension and discomfort.",
    detail: "Gradual reduction over 4–6 weeks · Long-lasting results",
    image: "/assets/brixsm.png",
  },
  {
    id: "migraines",
    label: "Migraines",
    description: "BOTOX® is a clinically proven, NHS-recognised treatment for chronic migraines. Injected into specific head and neck muscles, it can dramatically reduce both the frequency and severity of attacks.",
    detail: "31 injection sites across 7 muscle areas · 12-week treatment cycle",
    image: "/assets/headche.png",
  },
  {
    id: "neck",
    label: "Neck Tension",
    description: "The platysma bands in the neck become more prominent with age and tension. Treatment relaxes these vertical cords, lifting and refining the neck and jawline for a noticeably rejuvenated profile.",
    detail: "The 'Nefertiti Lift' technique · Subtle, natural elevation",
    image: "/assets/neck-tension.png",
  },
];

export default function ConditionsExperience() {
  const [active, setActive] = useState(0);
  const current = CONDITIONS[active];

  return (
    <section id="conditions" style={{ background: "var(--cream)", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
            Areas We Treat
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 300, lineHeight: 1.05, color: "var(--ink)" }}>
            What concerns you?
          </motion.h2>
        </div>

        {/* Main layout */}
        <div className="conditions-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left: description panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={current.id}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: 24, marginTop: 0 }}>
                  {current.label}
                </h3>

                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 28 }}>
                  {current.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderTop: "1px solid rgba(184,149,90,0.2)" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", color: "var(--ink-muted)" }}>{current.detail}</span>
                </div>

                <a href="https://drmatla.com/book-online/" target="_blank" rel="noopener"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 36, padding: "13px 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--ink)", color: "var(--cream)", borderRadius: 2, transition: "background 0.3s, transform 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.transform = ""; }}>
                  Discuss This Treatment →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: condition selector + visual */}
          <div>
            {/* Condition list */}
            <div style={{ marginBottom: 40 }}>
              {CONDITIONS.map((c, i) => (
                <button key={c.id} onClick={() => setActive(i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "18px 0", background: "none", border: "none", cursor: "pointer",
                    borderBottom: "1px solid rgba(17,17,17,0.08)",
                    transition: "all 0.3s",
                  }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 300, letterSpacing: "0.02em",
                    color: active === i ? "var(--ink)" : "var(--ink-soft)",
                    transition: "color 0.3s",
                  }}>
                    {c.label}
                  </span>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0, opacity: active === i ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 16, height: 16, position: "relative", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: active === i ? "var(--gold)" : "var(--ink)", transform: "translateY(-50%)" }} />
                    <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: active === i ? "var(--gold)" : "var(--ink)", transform: "translateX(-50%)" }} />
                  </motion.div>
                </button>
              ))}
            </div>

            {/* Image panel — natural height, full image always visible */}
            <AnimatePresence mode="wait">
              <motion.div key={current.id + "-visual"}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#C9B89A",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  willChange: "opacity",
                  lineHeight: 0, // removes inline gap below img
                }}>

                {/* Full image — no clipping, natural dimensions */}
                <img
                  src={current.image}
                  alt={current.label}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                {/* Subtle bottom vignette for label legibility only */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(to top, rgba(17,17,17,0.5) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />

                {/* Label at bottom left */}
                <div style={{ position: "absolute", bottom: 20, left: 24 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.95)" }}>
                    {current.label}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .conditions-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}