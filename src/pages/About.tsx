import React from "react";

const features = [
  { icon: "✦", title: "Professional Artists", desc: "Certified nail technicians with 5+ years experience" },
  { icon: "✦", title: "Hygienic Environment", desc: "Sterilized tools & single-use materials for every client" },
  { icon: "✦", title: "Trendy Designs", desc: "Latest nail art trends updated every season" },
  { icon: "✦", title: "Premium Products", desc: "Only top-grade gels, polishes & skin-safe materials" },
];

const About = () => {
  return (
    <>
      <style>{aboutStyles}</style>

      <div style={styles.wrap}>

        {/* HERO */}
        <section style={styles.hero}>
          <span style={styles.heroTag}>✦ Our Story</span>
          <h1 style={styles.heroTitle}>
            Where Nails Become<br />
            <em style={styles.heroEm}>Art</em>
          </h1>
          <p style={styles.heroSub}>
            At NailLuxe, beauty is not just a service — it's an experience
            crafted with precision, care, and creativity.
          </p>
          <div style={styles.blobPink} />
        </section>

        {/* MISSION + IMAGE */}
        <section style={styles.missionSection}>
          <div style={styles.missionContent}>
            <span style={styles.secTag}>Our Mission</span>
            <h2 style={styles.secTitle}>Making Every Client Feel Extraordinary</h2>
            <p style={styles.secText}>
              We believe every person deserves to feel confident and beautiful.
              Our expert nail technicians bring creativity, precision, and heart
              to every appointment — from classic manicures to elaborate nail art.
            </p>
            <p style={styles.secText}>
              Founded in Rajkot, NailLuxe has become the city's go-to destination
              for premium nail care. We blend modern techniques with timeless elegance.
            </p>
          </div>

          <div style={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=700&auto=format&fit=crop"
              alt="NailLuxe salon"
              style={styles.img}
            />
            <div style={styles.imgBadge}>
              <span style={styles.imgBadgeNum}>500+</span>
              <span style={styles.imgBadgeText}>Happy Clients</span>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section style={styles.featuresSection}>
          <div style={styles.featuresHeader}>
            <span style={styles.secTag}>Why Choose Us</span>
            <h2 style={styles.secTitle}>The NailLuxe Difference</h2>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} style={styles.featureCard} className="ab-card">
                <span style={styles.featureIcon}>{f.icon}</span>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

const aboutStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .ab-card {
    animation: abFadeUp 0.45s ease both;
  }
  .ab-card:nth-child(2) { animation-delay: 0.08s; }
  .ab-card:nth-child(3) { animation-delay: 0.16s; }
  .ab-card:nth-child(4) { animation-delay: 0.24s; }

  @keyframes abFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ab-card:hover {
    border-color: rgba(212,83,126,0.35) !important;
    transform: translateY(-4px);
    box-shadow: 0 14px 40px rgba(244,63,94,0.08);
  }

  @media (max-width: 700px) {
    .ab-mission { flex-direction: column !important; }
    .ab-features-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  wrap: {
    minHeight: "100vh",
    background: "#fff8f5",
    fontFamily: "'DM Sans', sans-serif",
  },

  // HERO
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "80px 5vw 72px",
    background: "#fff8f5",
  },

  heroTag: {
    display: "inline-block",
    background: "#fce7f3",
    color: "#993556",
    borderRadius: "50px",
    padding: "4px 16px",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "1.2rem",
    fontWeight: 500,
  },

  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
    fontWeight: 400,
    color: "#1c0a0a",
    lineHeight: 1.08,
    margin: "0 0 1rem",
    letterSpacing: "-0.5px",
  },

  heroEm: {
    fontStyle: "italic",
    color: "#D4537E",
  },

  heroSub: {
    fontSize: "1rem",
    color: "#9d7474",
    lineHeight: 1.7,
    margin: 0,
    maxWidth: "520px",
  },

  blobPink: {
    position: "absolute",
    top: "-80px",
    right: "-60px",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "rgba(249,168,212,0.16)",
    zIndex: 0,
    pointerEvents: "none" as const,
  },

  // MISSION
  missionSection: {
    display: "flex",
    gap: "60px",
    alignItems: "center",
    padding: "64px 5vw",
    background: "#fff",
  },

  missionContent: {
    flex: 1,
  },

  secTag: {
    display: "inline-block",
    background: "#fce7f3",
    color: "#D4537E",
    borderRadius: "50px",
    padding: "4px 14px",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "0.8rem",
    fontWeight: 500,
  },

  secTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
    fontWeight: 400,
    color: "#1c0a0a",
    margin: "0 0 1.1rem",
    lineHeight: 1.15,
  },

  secText: {
    fontSize: "14px",
    color: "#9d7474",
    lineHeight: 1.8,
    margin: "0 0 1rem",
  },

  imgWrap: {
    flex: 1,
    position: "relative",
    maxWidth: "420px",
  },

  img: {
    width: "100%",
    height: "380px",
    objectFit: "cover" as const,
    borderRadius: "24px",
    display: "block",
    border: "1px solid rgba(243,224,224,0.7)",
  },

  imgBadge: {
    position: "absolute",
    bottom: "24px",
    left: "-20px",
    background: "#fff",
    borderRadius: "16px",
    padding: "14px 20px",
    border: "1px solid rgba(243,224,224,0.9)",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "2px",
  },

  imgBadgeNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#D4537E",
    lineHeight: 1,
  },

  imgBadgeText: {
    fontSize: "11px",
    color: "#9d7474",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  },

  // FEATURES
  featuresSection: {
    padding: "64px 5vw 80px",
    background: "#fff8f5",
  },

  featuresHeader: {
    marginBottom: "2.4rem",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    maxWidth: "900px",
  },

  featureCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "1.6rem",
    border: "1px solid rgba(243,224,224,0.8)",
    transition: "border-color 0.2s, transform 0.22s, box-shadow 0.22s",
  },

  featureIcon: {
    display: "block",
    color: "#D4537E",
    fontSize: "18px",
    marginBottom: "0.8rem",
  },

  featureTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#1c0a0a",
    margin: "0 0 0.4rem",
  },

  featureDesc: {
    fontSize: "13px",
    color: "#9d7474",
    lineHeight: 1.65,
    margin: 0,
  },
};

export default About;