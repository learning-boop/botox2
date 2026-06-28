import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    text: "I look refreshed,\nnot different.",
    author: "Sarah M.",
    detail: "Anti-Wrinkle Treatment · Newcastle",
    stars: 5,
  },
  {
    text: "Finally, a doctor who\nlistens before he treats.",
    author: "Claire R.",
    detail: "Full Face Consultation · Jesmond",
    stars: 5,
  },
  {
    text: "Natural results. I still\nlook like myself — just better.",
    author: "Emma T.",
    detail: "Crow's Feet & Forehead · Newcastle",
    stars: 5,
  },
];

const INTERVAL = 4000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % QUOTES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i) => {
    setActive(i);
    setPaused(true);
    // Resume auto-scroll after 8s of inactivity
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section style={{ background: "var(--cream)", padding: "140px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
            Patient Stories
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1 }}>
            Words from our patients.
          </h2>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(184,149,90,0.2)", paddingTop: 72 }}>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 32 }}>
                {[...Array(QUOTES[active].stars)].map((_, i) => (
                  <span key={i} style={{ fontSize: 14, color: "var(--gold)" }}>★</span>
                ))}
              </div>

              {/* Quote mark */}
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(80px, 12vw, 160px)", color: "rgba(184,149,90,0.15)", lineHeight: 0.7, marginBottom: 8 }}>"</div>

              {/* Quote text */}
              <blockquote style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                maxWidth: 900,
                marginBottom: 48,
                whiteSpace: "pre-line",
                margin: "0 0 48px 0",
              }}>
                {QUOTES[active].text}
              </blockquote>

              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 2 }}>{QUOTES[active].author}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.06em" }}>{QUOTES[active].detail}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation + progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 64 }}>
            {QUOTES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{
                  position: "relative",
                  width: active === i ? 32 : 8,
                  height: 2,
                  background: "rgba(17,17,17,0.15)",
                  border: "none", borderRadius: 1, cursor: "pointer",
                  transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
                  padding: 0,
                  overflow: "hidden",
                }}>
                {/* Auto-progress fill on active dot */}
                {active === i && !paused && (
                  <motion.div
                    key={active + "-fill"}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    style={{
                      position: "absolute", inset: 0,
                      background: "var(--gold)",
                      transformOrigin: "left center",
                    }}
                  />
                )}
                {/* Static gold fill when paused on active */}
                {active === i && paused && (
                  <div style={{ position: "absolute", inset: 0, background: "var(--gold)" }} />
                )}
              </button>
            ))}
            <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
              {String(active + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}