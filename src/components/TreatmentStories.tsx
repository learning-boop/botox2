import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TREATMENTS = [
  {
    
    title: "Anti-Wrinkle\nInjections",
    description:
      "Our signature treatment targets dynamic wrinkles and expression lines while maintaining natural facial movement.",
    tag: "Most Popular",
    image: "/assets/anti-wrinkle.png",
    flip: false,
  },
  {
  
    title: "Jawline\nSlimming",
    description:
      "Refine facial contours and create a more sculpted appearance with targeted masseter treatment.",
    tag: "Contouring",
    image: "/assets/jaw-line2.png",
    flip: true,
  },
  {
    
    title: "Migraine\nRelief",
    description:
      "Clinically proven treatment helping reduce migraine frequency and severity for long-term comfort.",
    tag: "Medical",
    image: "/assets/migrane.png",
    flip: false,
  },
  {
    number: "04",
    title: "Neck & Shoulder\nRelaxation",
    description:
      "Relax tension while creating a smoother, lifted neck profile with advanced injection techniques.",
    tag: "Rejuvenation",
    image: "/assets/shoulder.png",
    flip: true,
  },
];

function TreatmentRow({
  t,
  index,
}: {
  t: (typeof TREATMENTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [t.flip ? -40 : 40, t.flip ? 40 : -40]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="treatment-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "520px",
        direction: t.flip ? "rtl" : "ltr",
      }}
    >
      {/* IMAGE SIDE */}

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          direction: "ltr",
        }}
      >
        <motion.div
          style={{
            y: imageY,
            position: "absolute",
            inset: "-5%",
          }}
        >
          <img
            src={t.image}
            alt={t.title}
            style={{
              width: "110%",
              height: "110%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </motion.div>

        {/* Overlay */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.15))",
          }}
        />

        {/* Number */}

        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            color: "#B8955A",
            fontSize: "14px",
            letterSpacing: "4px",
            zIndex: 2,
          }}
        >
          {t.number}
        </div>

        {/* Tag */}

        <div
          style={{
            position: "absolute",
            left: 30,
            bottom: 30,
            zIndex: 2,
          }}
        >
          <span
            style={{
              border: "1px solid rgba(184,149,90,.5)",
              padding: "8px 16px",
              color: "#B8955A",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {t.tag}
          </span>
        </div>
      </div>

      {/* CONTENT SIDE */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "70px",
          background:
            index % 2 === 0 ? "var(--cream)" : "var(--cream-deep)",
          direction: "ltr",
        }}
      >
        <div>
          <div
            style={{
              color: "#B8955A",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Treatment {t.number}
          </div>

          <h3
            style={{
              fontSize: "56px",
              fontWeight: 300,
              lineHeight: 1.05,
              whiteSpace: "pre-line",
              marginBottom: "25px",
              color: "#1f1f1f",
            }}
          >
            {t.title}
          </h3>

          <div
            style={{
              width: "60px",
              height: "1px",
              background: "#B8955A",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              maxWidth: "450px",
              lineHeight: 1.9,
              color: "#555",
              marginBottom: "35px",
            }}
          >
            {t.description}
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              gap: "10px",
              color: "#111",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 600,
            }}
          >
            Book This Treatment →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function TreatmentStories() {
  return (
    <section id="treatments">
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 40px 70px",
        }}
      >
        <div
          style={{
            color: "#B8955A",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          Our Treatments
        </div>

        <h2
          style={{
            fontSize: "72px",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          Crafted for you.
        </h2>
      </div>

      {TREATMENTS.map((t, i) => (
        <TreatmentRow key={t.number} t={t} index={i} />
      ))}

      <style>{`
        @media(max-width:768px){

          .treatment-row{
            grid-template-columns:1fr !important;
            direction:ltr !important;
          }

          .treatment-row > div:first-child{
            height:320px;
          }

          .treatment-row > div:last-child{
            padding:40px 25px !important;
          }

          h2{
            font-size:42px !important;
          }

          h3{
            font-size:34px !important;
          }
        }
      `}</style>
    </section>
  );
}