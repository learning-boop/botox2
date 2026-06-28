import { motion } from "framer-motion";

const STATS = [
  { value: "9+", label: "Years Experience" },
  { value: "2,800+", label: "Treatments Performed" },
  { value: "100%", label: "Personalised Care" },
];

export default function DoctorSection() {
  return (
    <section id="doctor" style={{ background: "var(--cream-deep)", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div className="doctor-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}>

            {/* Portrait image */}
            <div style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 32px 80px rgba(17,17,17,0.16)" }}>
              <img
                src="/assets/matla.jpg"
                alt="Dr. Matla — Medical Director, Botox by Dr. Matla Newcastle"
                style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center top", aspectRatio: "4/5" }}
              />
              {/* Bottom name strip */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "40px 28px 24px",
                background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 100%)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 300, color: "#F7F3EE", letterSpacing: "0.03em" }}>Dr. Matla</div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginTop: 4 }}>Medical Director</div>
              </div>
            </div>

            {/* CQC badge */}
            <div style={{
              position: "absolute", top: 20, right: 20,
              padding: "8px 14px",
              background: "rgba(10,10,10,0.85)",
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              border: "1px solid rgba(184,149,90,0.35)",
            }}>
              <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)" }}>CQC Registered</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>

            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
              The Doctor
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300, lineHeight: 0.95, color: "var(--ink)", marginBottom: 32, letterSpacing: "-0.01em" }}>
              Expert.<br />
              Artist.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Advocate.</em>
            </h2>

            <div style={{ width: 44, height: 1, background: "var(--gold)", marginBottom: 28 }} />

            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 18 }}>
              Doctor-led treatments focused on subtle, natural-looking enhancement. Every patient is assessed holistically — we treat the person, not just the concern.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 48 }}>
              Our practice is built on frank, medical-grade advice and complete discretion — the kind of honesty you'd expect from a trusted physician, not a beauty brand.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(184,149,90,0.2)", paddingTop: 36 }}>
              {STATS.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ paddingRight: i < 2 ? 24 : 0, borderRight: i < 2 ? "1px solid rgba(184,149,90,0.2)" : "none", paddingLeft: i > 0 ? 24 : 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3vw, 44px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1, marginBottom: 6 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GMC credentials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 40 }}>
              {["GMC Registered", "Harley Academy", "British Cosmetic Association"].map(c => (
                <div key={c} style={{ padding: "7px 14px", border: "1px solid rgba(184,149,90,0.3)", borderRadius: 2, fontSize: 11, fontWeight: 500, color: "var(--ink-soft)", letterSpacing: "0.04em" }}>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .doctor-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}
