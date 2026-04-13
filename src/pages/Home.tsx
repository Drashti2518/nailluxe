import React from "react";
import ServiceCard, { SERVICES } from "../components/ServiceCard";

type Props = {
  goToBooking: (serviceName?: string) => void;
};

const STATS = [
  { num: "500+", label: "Happy Clients" },
  { num: "4.9★", label: "Avg Rating" },
  { num: "3 yr", label: "Experience" },
  { num: "6+",   label: "Services" },
];

const TRUST_BADGES = [
  "Hygienic & Safe Tools",
  "Premium Products Only",
  "Certified Artists",
  "Rajkot's #1 Nail Studio",
];

const REVIEWS = [
  { text: "Absolutely loved my gel extensions! Easily the best nail studio in Rajkot.", name: "Priya Shah" },
  { text: "Very clean and hygienic, with stunning nail art and a super friendly team. 10/10 experience!", name: "Meera Patel" },
  { text: "The chrome finish looked amazing. I’ll definitely be coming back soon!", name: "Riya Desai" },
];

const HOW_STEPS = [
  { num: "1", title: "Choose Service", desc: "6 premium services" },
  { num: "2", title: "Pick a Slot",    desc: "Your Comfertable Date & time select" },
  { num: "3", title: "Visit & Relax",  desc: "Step in and enjoy pampering — we’ve got everything covered!" },
];

const Home = ({ goToBooking }: Props) => {
  return (
    <>
      <style>{homeStyles}</style>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.heroTag}>✦ Rajkot's Premium Nail Studio</span>
          <h1 style={styles.heroTitle}>
            Your Nails,<br />
            <em style={styles.heroEm}>Your Story</em>
          </h1>
          <p style={styles.heroSub}>
            Luxury nail art, gel extensions — crafted with love.
          </p>
          <div style={styles.heroBtns}>
            <button
              style={styles.btnPrimary}
              className="hn-btn-primary"
              onClick={() => goToBooking()}
            >
              Book Appointment
            </button>
            <button
              style={styles.btnOutline}
              className="hn-btn-outline"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </button>
          </div>
        </div>
        <div style={styles.blobPink} />
        <div style={styles.blobPurple} />
      </section>

      {/* ── STATS STRIP ── */}
      <div style={styles.statsStrip}>
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              ...styles.statItem,
              borderRight: i < STATS.length - 1
                ? "1px solid rgba(243,224,224,0.8)"
                : "none",
            }}
          >
            <span style={styles.statNum}>{s.num}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── TRUST BADGES ── */}
      <div style={styles.trustBar}>
        {TRUST_BADGES.map((b) => (
          <div key={b} style={styles.trustBadge}>
            <div style={styles.trustDot} />
            <span style={styles.trustText}>{b}</span>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section style={styles.servicesSection} id="services">
        <div style={styles.secHeader}>
          <span style={styles.secTag}>💅 What We Offer</span>
          <h2 style={styles.secTitle}>Our Signature Services</h2>          
        </div>
        <div style={styles.servicesGrid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} onBook={goToBooking} />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={styles.hiwSection}>
        <span style={styles.hiwTag}>Simple Process</span>
        <h2 style={styles.hiwTitle}>Book in 3 Easy Steps</h2>
        <div style={styles.hiwSteps}>
          <div style={styles.hiwLine} />
          {HOW_STEPS.map((step) => (
            <div key={step.num} style={styles.hiwStep}>
              <div style={styles.hiwNum}>{step.num}</div>
              <div style={styles.hiwStepTitle}>{step.title}</div>
              <div style={styles.hiwStepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={styles.reviewsSection}>
        <div style={styles.secHeader}>
          <span style={styles.secTag}>💬 Client Love</span>
          <h2 style={styles.secTitle}>What Our Clients Say</h2>
        </div>
        <div style={styles.reviewsGrid}>
          {REVIEWS.map((r) => (
            <div key={r.name} style={styles.reviewCard} className="hn-review-card">
              <div style={styles.reviewStars}>★★★★★</div>
              <p style={styles.reviewText}>"{r.text}"</p>
              <div style={styles.reviewName}>— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Ready for Beautiful Nails?</h2>          
          <button
            style={styles.ctaBtn}
            className="hn-btn-primary"
            onClick={() => goToBooking()}
          >
            Book My Appointment →
          </button>
        </div>
        <div style={styles.ctaBlob} />
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLogo}>
            <div style={styles.footerDot} />
            <span style={styles.footerName}>NailLuxe</span>
          </div>
          <p style={styles.footerText}>© 2026 NailLuxe Studio · Rajkot</p>
          <p style={styles.footerTagline}>Made with 💅 for beautiful nails</p>
        </div>
      </footer>
    </>
  );
};

const homeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .hn-btn-primary:hover {
    background: #993556 !important;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(212,83,126,0.38) !important;
  }
  .hn-btn-primary:active { transform: scale(0.97) !important; }

  .hn-btn-outline:hover {
    background: #fce7f3 !important;
    border-color: #D4537E !important;
    color: #D4537E !important;
  }

  .hn-review-card:hover {
    border-color: rgba(212,83,126,0.4) !important;
    transform: translateY(-4px);
    box-shadow: 0 14px 40px rgba(244,63,94,0.08);
  }

  @media (max-width: 640px) {
    .hn-hiw-steps { flex-direction: column !important; align-items: center; gap: 28px !important; }
    .hn-hiw-line  { display: none !important; }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {

  /* HERO */
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "80px 5vw 90px",
    background: "#fff8f5",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
  },
  heroInner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "640px",
  },
  heroTag: {
    display: "inline-block",
    background: "#fce7f3",
    color: "#993556",
    borderRadius: "50px",
    padding: "5px 18px",
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "1.4rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(3rem, 7vw, 5.5rem)",
    fontWeight: 400,
    color: "#1c0a0a",
    lineHeight: 1.05,
    margin: "0 0 1.2rem",
    letterSpacing: "-1px",
  },
  heroEm: { fontStyle: "italic", color: "#D4537E" },
  heroSub: {
    fontSize: "1rem",
    color: "#9d7474",
    lineHeight: 1.7,
    margin: "0 0 2.4rem",
    fontFamily: "'DM Sans', sans-serif",
    maxWidth: "440px",
  },
  heroBtns: { display: "flex", gap: "12px", flexWrap: "wrap" as const },
  btnPrimary: {
    background: "#D4537E",
    color: "#fff",
    border: "none",
    padding: "13px 28px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s, transform 0.15s, box-shadow 0.2s",
    letterSpacing: "0.03em",
  },
  btnOutline: {
    background: "transparent",
    color: "#9d7474",
    border: "1.5px solid rgba(212,83,126,0.3)",
    padding: "13px 28px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.18s",
    letterSpacing: "0.03em",
  },
  blobPink: {
    position: "absolute", top: "-80px", right: "-60px",
    width: "500px", height: "500px", borderRadius: "50%",
    background: "rgba(249,168,212,0.18)", zIndex: 1, pointerEvents: "none" as const,
  },
  blobPurple: {
    position: "absolute", bottom: "-100px", right: "200px",
    width: "340px", height: "340px", borderRadius: "50%",
    background: "rgba(196,181,253,0.14)", zIndex: 1, pointerEvents: "none" as const,
  },

  /* STATS STRIP */
  statsStrip: {
    display: "flex",
    background: "#fff",
    borderTop: "1px solid rgba(243,224,224,0.8)",
    borderBottom: "1px solid rgba(243,224,224,0.8)",
  },
  statItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "28px 16px",
    gap: "5px",
  },
  statNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2.2rem",
    fontWeight: 600,
    color: "#D4537E",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "11px",
    color: "#9d7474",
    textTransform: "uppercase" as const,
    letterSpacing: "0.07em",
    fontFamily: "'DM Sans', sans-serif",
  },

  /* TRUST BAR */
  trustBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    gap: "28px",
    padding: "20px 5vw",
    background: "#fff8f5",
    borderBottom: "1px solid rgba(243,224,224,0.6)",
  },
  trustBadge: { display: "flex", alignItems: "center", gap: "8px" },
  trustDot: {
    width: "6px", height: "6px", borderRadius: "50%",
    background: "#D4537E", flexShrink: 0,
  },
  trustText: {
    fontSize: "13px", color: "#9d7474", fontFamily: "'DM Sans', sans-serif",
  },

  /* SERVICES */
  servicesSection: { padding: "72px 5vw 80px", background: "#fff" },
  secHeader: { textAlign: "center" as const, marginBottom: "3rem" },
  secTag: {
    display: "inline-block",
    background: "#fce7f3", color: "#D4537E",
    borderRadius: "50px", padding: "4px 16px",
    fontSize: "11px", letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.8rem",
    fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
  },
  secTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 400, color: "#1c0a0a",
    margin: "0 0 0.5rem", lineHeight: 1.15,
  },
  secSub: {
    fontSize: "14px", color: "#9d7474",
    fontFamily: "'DM Sans', sans-serif", margin: 0,
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.4rem", maxWidth: "1100px", margin: "0 auto",
  },

  /* HOW IT WORKS */
  hiwSection: { background: "#1c0a0a", padding: "64px 5vw" },
  hiwTag: {
    display: "inline-block",
    background: "rgba(212,83,126,0.2)", color: "#f9a8d4",
    borderRadius: "50px", padding: "4px 14px",
    fontSize: "11px", letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "0.9rem",
    fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
  },
  hiwTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
    fontWeight: 400, color: "#fff8f5",
    margin: "0 0 2.4rem", lineHeight: 1.1,
  },
  hiwSteps: {
    display: "flex", gap: "0",
    position: "relative" as const, maxWidth: "700px",
  },
  hiwLine: {
    position: "absolute" as const, top: "18px",
    left: "calc(16.67% + 18px)", right: "calc(16.67% + 18px)",
    height: "1px", background: "rgba(212,83,126,0.3)",
  },
  hiwStep: {
    flex: 1, textAlign: "center" as const,
    padding: "0 12px", position: "relative" as const, zIndex: 1,
  },
  hiwNum: {
    width: "36px", height: "36px", borderRadius: "50%",
    background: "#D4537E", color: "#fff",
    fontSize: "14px", fontWeight: 500,
    display: "flex", alignItems: "center", justifyContent: "center",
    margin: "0 auto 12px", fontFamily: "'DM Sans', sans-serif",
  },
  hiwStepTitle: {
    fontSize: "14px", fontWeight: 500,
    color: "#fff8f5", marginBottom: "6px",
    fontFamily: "'DM Sans', sans-serif",
  },
  hiwStepDesc: {
    fontSize: "12px", color: "rgba(255,248,245,0.45)",
    lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif",
  },

  /* REVIEWS */
  reviewsSection: { padding: "72px 5vw 80px", background: "#fff8f5" },
  reviewsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px", maxWidth: "1000px", margin: "0 auto",
  },
  reviewCard: {
    background: "#fff", borderRadius: "20px", padding: "1.6rem",
    border: "1px solid rgba(243,224,224,0.9)",
    transition: "border-color 0.2s, transform 0.22s, box-shadow 0.22s",
  },
  reviewStars: {
    color: "#D4537E", fontSize: "13px",
    letterSpacing: "2px", marginBottom: "10px",
  },
  reviewText: {
    fontSize: "14px", color: "#9d7474", lineHeight: 1.7,
    marginBottom: "12px", fontFamily: "'DM Sans', sans-serif",
    fontStyle: "italic",
  },
  reviewName: {
    fontSize: "13px", fontWeight: 500,
    color: "#1c0a0a", fontFamily: "'DM Sans', sans-serif",
  },

  /* BOTTOM CTA */
  ctaSection: {
    background: "#fce7f3", padding: "72px 5vw",
    textAlign: "center" as const,
    position: "relative" as const, overflow: "hidden",
  },
  ctaInner: { position: "relative" as const, zIndex: 2 },
  ctaTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2rem, 4.5vw, 3rem)",
    fontWeight: 400, color: "#1c0a0a",
    margin: "0 0 0.6rem", lineHeight: 1.1,
  },
  ctaSub: {
    fontSize: "15px", color: "#9d7474",
    margin: "0 0 2rem", fontFamily: "'DM Sans', sans-serif",
  },
  ctaBtn: {
    background: "#D4537E", color: "#fff",
    border: "none", padding: "14px 32px",
    borderRadius: "50px", fontSize: "15px",
    fontWeight: 500, cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s, transform 0.15s, box-shadow 0.2s",
    letterSpacing: "0.03em",
  },
  ctaBlob: {
    position: "absolute" as const, top: "-80px", right: "-80px",
    width: "360px", height: "360px", borderRadius: "50%",
    background: "rgba(212,83,126,0.1)", zIndex: 1, pointerEvents: "none" as const,
  },

  /* FOOTER */
  footer: { background: "#1c0a0a", padding: "40px 5vw" },
  footerInner: {
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", gap: "8px", textAlign: "center" as const,
  },
  footerLogo: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" },
  footerDot: {
    width: "8px", height: "8px", borderRadius: "50%", background: "#D4537E",
  },
  footerName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px", fontWeight: 600,
    color: "#fff8f5", letterSpacing: "-0.3px",
  },
  footerText: {
    fontSize: "13px", color: "rgba(255,248,245,0.45)",
    fontFamily: "'DM Sans', sans-serif", margin: 0,
  },
  footerTagline: {
    fontSize: "12px", color: "rgba(255,248,245,0.3)",
    fontFamily: "'DM Sans', sans-serif", margin: 0,
  },
};

export default Home;