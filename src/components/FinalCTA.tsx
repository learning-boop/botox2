import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" style={{ position: "relative", background: "#0A0A0A", padding: "160px 40px", overflow: "hidden", textAlign: "center" }}>

      {/* Gold halo */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(184,149,90,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Elegant gold border lines top/bottom */}
      <div style={{ position: "absolute", top: 0, left: 80, right: 80, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,149,90,0.4), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 80, right: 80, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,149,90,0.4), transparent)" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>

        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 36 }}>
          Begin Your Journey
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(40px, 6vw, 88px)",
          fontWeight: 300,
          lineHeight: 1.0,
          color: "#F7F3EE",
          marginBottom: 32,
          letterSpacing: "-0.01em",
        }}>
          Let's create your<br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>most confident you.</em>
        </h2>

        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(247,243,238,0.5)", maxWidth: 420, margin: "0 auto 52px" }}>
          Every treatment begins with an honest, unhurried consultation. No pressure — just expert guidance tailored to you.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <a href="https://drmatla.com/book-online" target="_blank" rel="noopener"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", background: "var(--gold)", color: "#0A0A0A", borderRadius: 2, transition: "transform 0.2s, box-shadow 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(184,149,90,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
            Book Consultation
          </a>
          <a href="tel:03334441399"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(247,243,238,0.7)", border: "1px solid rgba(247,243,238,0.2)", borderRadius: 2, transition: "border-color 0.3s, color 0.3s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(184,149,90,0.5)"; e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,243,238,0.2)"; e.currentTarget.style.color = "rgba(247,243,238,0.7)"; e.currentTarget.style.transform = ""; }}>
            0333 444 1399
          </a>
        </div>

        {/* Address */}
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(184,149,90,0.12)" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(184,149,90,0.5)", marginBottom: 10 }}>
            Find Us
          </div>
          <p style={{ fontSize: 13, color: "rgba(247,243,238,0.35)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
            Old Brewery Court, Starbeck Avenue<br />Newcastle upon Tyne, NE2 1XG
          </p>
        </div>
      </motion.div>
    </section>
  );
}
