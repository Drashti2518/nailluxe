import React from "react";

export interface Service {
  id: number;
  name: string;
  desc: string;
  price: string;
  duration: string;
  emoji: string;
  color: string;
}

export const SERVICES: Service[] = [
  { id: 1, name: "Classic Manicure",  desc: "Shape, buff, cuticle care & polish of your choice",    price: "₹599",   duration: "45 min", emoji: "💅", color: "#f9a8d4" },
  { id: 2, name: "Gel Extension",     desc: "Full set gel extensions with nail art design",          price: "₹1,299", duration: "90 min", emoji: "✨", color: "#c4b5fd" },
  { id: 3, name: "Nail Art Design",   desc: "Custom hand-painted art, florals, gems & glitter",     price: "₹799",   duration: "60 min", emoji: "🌸", color: "#fca5a5" },
  { id: 4, name: "French Tips",       desc: "Timeless French manicure — classic or modern twist",   price: "₹699",   duration: "50 min", emoji: "🤍", color: "#bfdbfe" },
  { id: 6, name: "Chrome & Foil",     desc: "Mirror chrome, holographic or foil nail finish",       price: "₹999",   duration: "65 min", emoji: "🪩", color: "#fde68a" },
];

interface ServiceCardProps {
  service: Service;
  onBook: (serviceName: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <>
      <style>{cardStyles}</style>

      <div
        className="sc-card"
        style={{ "--dot-color": service.color } as React.CSSProperties}
      >
        {/* Background orb */}
        <div className="sc-orb" />

        {/* Top row: emoji + duration */}
        <div style={styles.topRow}>
          <span style={styles.emoji}>{service.emoji}</span>
          <span style={styles.dur}>⏱ {service.duration}</span>
        </div>

        {/* Name */}
        <h3 style={styles.name}>{service.name}</h3>

        {/* Desc */}
        <p style={styles.desc}>{service.desc}</p>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Price + CTA */}
        <div style={styles.footer}>
          <div>
            <span style={styles.priceLabel}>Starting from</span>
            <span style={styles.price}>{service.price}</span>
          </div>
          <button
            style={styles.btn}
            className="sc-btn"
            onClick={() => onBook(service.name)}
          >
            Book →
          </button>
        </div>
      </div>
    </>
  );
};

const cardStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@400;500&display=swap');

  .sc-card {
    background: #fff;
    border-radius: 24px;
    padding: 1.8rem;
    border: 1px solid rgba(243, 224, 224, 0.9);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
    animation: scFadeUp 0.45s ease both;
  }

  @keyframes scFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .sc-orb {
    position: absolute;
    top: -50px; right: -50px;
    width: 140px; height: 140px;
    border-radius: 50%;
    background: var(--dot-color, #f9a8d4);
    opacity: 0.15;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
  }

  .sc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 48px rgba(244, 63, 94, 0.12);
    border-color: rgba(212, 83, 126, 0.4);
  }

  .sc-card:hover .sc-orb {
    opacity: 0.28;
    transform: scale(1.18);
  }

  .sc-btn:hover {
    background: #993556 !important;
    transform: translateX(2px);
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },

  emoji: {
    fontSize: "2rem",
    lineHeight: 1,
  },

  dur: {
    fontSize: "12px",
    color: "#f43f5e",
    background: "#fce7f3",
    borderRadius: "50px",
    padding: "4px 12px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
  },

  name: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#1c0a0a",
    margin: "0 0 0.5rem",
    lineHeight: 1.2,
  },

  desc: {
    fontSize: "0.84rem",
    color: "#9d7474",
    lineHeight: 1.65,
    margin: "0 0 1.2rem",
    fontFamily: "'DM Sans', sans-serif",
    flexGrow: 1,
  },

  divider: {
    height: "1px",
    background: "rgba(243,224,224,0.8)",
    margin: "0 0 1.1rem",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceLabel: {
    display: "block",
    fontSize: "10px",
    color: "#c4a0a0",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: "2px",
  },

  price: {
    display: "block",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "#D4537E",
    fontFamily: "'Cormorant Garamond', serif",
  },

  btn: {
    background: "#D4537E",
    color: "#fff",
    border: "none",
    padding: "9px 20px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s, transform 0.15s",
    letterSpacing: "0.02em",
  },
};

export default ServiceCard;