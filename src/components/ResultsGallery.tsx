import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS_VISUAL = [
  {
    area: "Forehead Lines",
    result: "Smooth, rested appearance",
    weeks: "Results at 2 weeks",
    before: "/assets/forehead-before.png",
    after: "/assets/forehead-after.png",
  },
  {
    area: "Crow's Feet",
    result: "Bright, open eye contour",
    weeks: "Results at 10 days",
    before: "/assets/before-crow.png",
    after: "/assets/after-crow.png",
  },
  {
    area: "Jawline Slimming",
    result: "Refined facial silhouette",
    weeks: "Results at 6 weeks",
    before: "/assets/before-jaw.png",
    after: "/assets/after-jawline.png",
  },
];

export default function ResultsGallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="results" style={{ background: "#0F0D0A", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72, textAlign: "center" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Patient Outcomes
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.05, color: "#F7F3EE" }}>
            Subtle changes.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Powerful confidence.</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(247,243,238,0.45)", maxWidth: 480, margin: "24px auto 0", lineHeight: 1.75 }}>
            Every result is unique. These outcomes reflect our philosophy of natural, refined enhancement — never overdone.
          </p>
        </motion.div>

        {/* Area selector */}
        <div style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 64 }}>
          {TESTIMONIALS_VISUAL.map((t, i) => (
            <button key={t.area} onClick={() => setActive(i)}
              style={{
                padding: "12px 28px", background: "none", border: "none", cursor: "pointer",
                borderBottom: `2px solid ${active === i ? "var(--gold)" : "rgba(247,243,238,0.12)"}`,
                transition: "border-color 0.3s",
              }}>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: active === i ? "var(--gold)" : "rgba(247,243,238,0.4)", transition: "color 0.3s" }}>
                {t.area}
              </span>
            </button>
          ))}
        </div>

        {/* Visual panel */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

            <div className="results-panel" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, borderRadius: 4, overflow: "hidden", maxWidth: 900, margin: "0 auto" }}>
              {["Before", "After"].map((label) => {
                const imgSrc = label === "Before"
                  ? TESTIMONIALS_VISUAL[active].before
                  : TESTIMONIALS_VISUAL[active].after;

                return (
                  <div key={label} style={{
                    position: "relative", height: 320, overflow: "hidden",
                    background: label === "Before"
                      ? "linear-gradient(140deg, #1A1714 0%, #252018 100%)"
                      : "linear-gradient(140deg, #201C16 0%, #302A20 100%)",
                  }}>
                    {/* Real image */}
                    <img
                      src={imgSrc}
                      alt={`${TESTIMONIALS_VISUAL[active].area} - ${label}`}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        filter: label === "Before" ? "saturate(0.85) brightness(0.9)" : "saturate(1) brightness(1.02)",
                      }}
                    />

                    {/* Subtle gradient overlay for label legibility */}
                    <div style={{
                      position: "absolute", left: 0, right: 0, bottom: 0, height: "40%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                    }} />

                    <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center", zIndex: 1 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 300, color: "rgba(247,243,238,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                        {label}
                      </div>
                      <div style={{ width: 40, height: 1, background: label === "After" ? "var(--gold)" : "rgba(247,243,238,0.3)", margin: "0 auto 8px" }} />
                      <div style={{ fontSize: 11, color: label === "After" ? "var(--gold)" : "rgba(247,243,238,0.4)", letterSpacing: "0.08em", fontWeight: 500 }}>
                        {label === "After" ? TESTIMONIALS_VISUAL[active].result : TESTIMONIALS_VISUAL[active].area}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: 28 }}>
              <span style={{ fontSize: 11, color: "rgba(247,243,238,0.35)", letterSpacing: "0.1em", fontWeight: 500 }}>
                {TESTIMONIALS_VISUAL[active].weeks} · Individual results may vary
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 64, padding: "32px", border: "1px solid rgba(184,149,90,0.15)", borderRadius: 4, maxWidth: 600, margin: "64px auto 0" }}>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: "rgba(247,243,238,0.35)", fontStyle: "italic" }}>
            Results are always discussed during your consultation. Actual before and after photography is available upon request and shared in complete confidence.
          </p>
          <a href="https://drmatla.com/book-online" target="_blank" rel="noopener"
            style={{ display: "inline-block", marginTop: 20, padding: "12px 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(184,149,90,0.4)", borderRadius: 2, transition: "background 0.3s, color 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#0F0D0A"; }}
            onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "var(--gold)"; }}>
            Request a Consultation
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .results-panel { grid-template-columns: 1fr !important; }
          .results-panel > div { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}