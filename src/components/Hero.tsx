import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Botox Newcastle – Doctor-led anti-wrinkle injections"
      style={{ position: "relative", minHeight: "100vh", background: "var(--cream)", overflow: "hidden", display: "flex" }}
    >
      {/* ── Left text side ── */}
      <div className="hero-left" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", width: "40%", padding: "120px 0 80px 60px" }}>
        <div style={{ maxWidth: 460 }}>

          <motion.div {...fade(0.2)} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 32 }}>
            Doctor-Led Botulinum Toxin · Newcastle upon Tyne
          </motion.div>

          <motion.h1 {...fade(0.4)} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 80px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: 32, textTransform: "uppercase" }}>
            Refined.<br />Natural.<br />
            <span style={{ color: "var(--gold)" }}>Timeless.</span>
          </motion.h1>

          <motion.p {...fade(0.55)} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", maxWidth: 360, marginBottom: 40 }}>
            Bespoke Botox anti-wrinkle treatments in Jesmond, Newcastle — softening forehead lines, frown lines and crow's feet while preserving your natural expression.
          </motion.p>

          {/* SEO micro-detail row */}
          <motion.div {...fade(0.62)} style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", marginBottom: 36 }}>
            {["Forehead Lines", "Frown Lines", "Crow's Feet", "Jawline Slimming"].map(t => (
              <span key={t} style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", padding: "4px 10px", border: "1px solid rgba(184,149,90,0.25)", borderRadius: 2 }}>{t}</span>
            ))}
          </motion.div>

          <motion.div {...fade(0.68)} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://drmatla.com/book-online/" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 32px", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--ink)", color: "var(--cream)", borderRadius: 2, transition: "background 0.3s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.transform = ""; }}>
              Book Consultation
            </a>
            <a href="#treatments"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 32px", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink)", border: "1px solid rgba(17,17,17,0.25)", borderRadius: 2, transition: "border-color 0.3s, color 0.3s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(17,17,17,0.25)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.transform = ""; }}>
              Explore Treatments
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div {...fade(0.9)} style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 64 }}>
            <div style={{ position: "relative", width: 22, height: 36, border: "1px solid rgba(184,149,90,0.4)", borderRadius: 12 }}>
              <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)", width: 3, height: 3, borderRadius: "50%", background: "var(--gold)" }} />
            </div>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Scroll</span>
          </motion.div>
        </div>
      </div>

      {/* ── Right portrait side ── */}
      <div className="hero-right" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60%", overflow: "hidden" }}>

        {/* Gold halo glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "75%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(184,149,90,0.18) 0%, rgba(184,149,90,0.06) 45%, transparent 70%)", zIndex: 1, pointerEvents: "none" }}
        />
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "68%", aspectRatio: "1", borderRadius: "50%", border: "1px solid rgba(184,149,90,0.25)", zIndex: 1, pointerEvents: "none" }}
        />

        {/* Fades */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, var(--cream) 0%, transparent 100%)", zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 80, background: "linear-gradient(to bottom, var(--cream) 20%, transparent 100%)", zIndex: 3, pointerEvents: "none" }} />

        {/* Portrait */}
        <motion.img
          src="/assets/hero-model1.jpg"
          alt="Dr. Matla Newcastle Botox clinic — anti-wrinkle injections Jesmond"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% top", zIndex: 2 }}
        />

        {/* Glassmorphism quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-quote-card"
          style={{ position: "absolute", bottom: 40, right: 36, zIndex: 4 }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 200, padding: "22px 24px", background: "rgba(247,243,238,0.72)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(184,149,90,0.3)", borderRadius: 4, boxShadow: "0 16px 48px rgba(17,17,17,0.12)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--gold)", lineHeight: 1, marginBottom: 8 }}>"</div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 300, color: "var(--ink)", lineHeight: 1.5, marginBottom: 14 }}>
              Natural results,<br />never overdone.
            </p>
            <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)" }}>— Dr. Matla</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        /* ─── Mobile: side by side ─── */
        @media (max-width: 860px) {
          #top {
            flex-direction: row !important;
            min-height: 100svh !important;
            align-items: stretch !important;
          }
          .hero-left {
            width: 50% !important;
            padding: 80px 20px 40px 20px !important;
            position: relative !important;
            z-index: 3 !important;
            display: flex !important;
            align-items: center !important;
          }
          .hero-right {
            position: relative !important;
            width: 50% !important;
            height: auto !important;
            min-height: unset !important;
            max-height: unset !important;
          }
          .hero-right > div:first-child,
          .hero-right > div:nth-child(2) {
            display: none !important;
          }
          .hero-quote-card {
            display: none !important;
          }
        }

        /* ─── Small mobile: stack (image top, text bottom) ─── */
        @media (max-width: 480px) {
          #top {
            flex-direction: column !important;
          }
          .hero-left {
            width: 100% !important;
            padding: 32px 20px 48px !important;
            order: 1 !important;
          }
          .hero-right {
            width: 100% !important;
            height: 72vw !important;
            order: -1 !important;
          }
        }
      `}</style>
    </section>
  );
}