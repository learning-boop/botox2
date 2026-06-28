import { Instagram, Facebook } from "lucide-react";

const LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Conditions", href: "#conditions" },
  { label: "The Doctor", href: "#doctor" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(184,149,90,0.1)", padding: "60px 40px 36px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 80, marginBottom: 56, alignItems: "start" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 300, color: "#F7F3EE", letterSpacing: "0.04em", marginBottom: 4 }}>
              Botox 
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
              Newcastle
            </div>
            <p style={{ fontSize: 13, color: "rgba(247,243,238,0.35)", lineHeight: 1.75, maxWidth: 300 }}>
              Doctor-led aesthetic treatments focused on natural, refined results. CQC Registered. GMC Qualified.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(184,149,90,0.6)", marginBottom: 20 }}>
              Navigate
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {LINKS.map(l => (
                <a key={l.href} href={l.href}
                  style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.06em", color: "rgba(247,243,238,0.4)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,243,238,0.4)")}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(184,149,90,0.6)", marginBottom: 20 }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:03334441399" style={{ fontSize: 13, color: "rgba(247,243,238,0.4)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,243,238,0.4)")}>
                0333 444 1399
              </a>
              <span style={{ fontSize: 12, color: "rgba(247,243,238,0.25)", lineHeight: 1.6 }}>
                Old Brewery Court<br />Starbeck Avenue<br />Newcastle NE2 1XG
              </span>
              <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                <a href="https://instagram.com" target="_blank" rel="noopener"
                  style={{ color: "rgba(247,243,238,0.3)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,243,238,0.3)")}>
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener"
                  style={{ color: "rgba(247,243,238,0.3)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,243,238,0.3)")}>
                  <Facebook size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(184,149,90,0.1)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 11, color: "rgba(247,243,238,0.2)", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Botox by Dr. Matla. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ fontSize: 11, color: "rgba(247,243,238,0.2)", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(184,149,90,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,243,238,0.2)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
