import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Treatments", href: "#treatments" },
  { label: "Conditions", href: "#conditions" },
  { label: "The Doctor", href: "#doctor" },
 
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(247,243,238,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(184,149,90,0.15)" : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      padding: "0 40px",
    }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top">
          <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 400, letterSpacing: "0.04em", color: "var(--ink)", lineHeight: 1.1 }}>
            Botox 
          </div>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1, marginTop: 2 }}>
            Newcastle
          </div>
        </a>

        <nav className="hdr-nav" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href}
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-soft)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hdr-cta" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="tel:03334441399"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", color: "var(--ink-soft)", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
            0333 444 1399
          </a>
          <a href="https://drmatla.com/book-online/" target="_blank" rel="noopener"
            style={{ padding: "10px 24px", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", background: "var(--ink)", color: "var(--cream)", borderRadius: 2, transition: "background 0.3s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.transform = ""; }}>
            Book
          </a>
        </div>

        <button className="hdr-burger" onClick={() => setOpen(!open)}
          style={{ display: "none", flexDirection: "column", gap: 5, padding: 4, background: "none", border: "none", cursor: "pointer" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: 24, height: 1.5, background: "var(--ink)", transition: "all 0.3s",
              transform: i === 0 && open ? "rotate(45deg) translateY(6px)" : i === 2 && open ? "rotate(-45deg) translateY(-6px)" : "none",
              opacity: i === 1 && open ? 0 : 1 }} />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ background: "var(--cream)", borderTop: "1px solid rgba(184,149,90,0.15)", padding: "28px 40px 36px", display: "flex", flexDirection: "column", gap: 22 }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 300, color: "var(--ink)", letterSpacing: "0.03em" }}>
                {n.label}
              </a>
            ))}
            <a href="https://drmatla.com/book-online/" target="_blank" rel="noopener" onClick={() => setOpen(false)}
              style={{ marginTop: 12, display: "inline-block", padding: "14px 28px", background: "var(--ink)", color: "var(--cream)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", borderRadius: 2 }}>
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) {
          .hdr-nav { display: none !important; }
          .hdr-cta { display: none !important; }
          .hdr-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
