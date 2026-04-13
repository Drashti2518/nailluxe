import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  "https://images.unsplash.com/photo-1612810806563-4cb8265db55f",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
];

const Gallery = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{galleryStyles}</style>

      <div style={styles.wrap}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.tag}>✦ Our Portfolio</span>
          <h1 style={styles.title}>Nail Art Gallery</h1>
          <p style={styles.subtitle}>
            Aapari kaam ni jhalak — har design ek story che.
          </p>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {images.map((img, i) => (
            <div
              key={i}
              style={styles.item}
              className="gl-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={`${img}?w=600&auto=format&fit=crop`}
                alt={`nail art ${i + 1}`}
                style={{
                  ...styles.img,
                  transform: hovered === i ? "scale(1.08)" : "scale(1)",
                }}
              />
              <div
                style={{
                  ...styles.overlay,
                  opacity: hovered === i ? 1 : 0,
                }}
              >
                <span style={styles.overlayText}>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const galleryStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@400;500&display=swap');

  .gl-item {
    animation: glFadeUp 0.5s ease both;
  }
  .gl-item:nth-child(2) { animation-delay: 0.07s; }
  .gl-item:nth-child(3) { animation-delay: 0.14s; }
  .gl-item:nth-child(4) { animation-delay: 0.21s; }
  .gl-item:nth-child(5) { animation-delay: 0.28s; }
  .gl-item:nth-child(6) { animation-delay: 0.35s; }

  @keyframes glFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .gl-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  wrap: {
    minHeight: "100vh",
    padding: "64px 5vw 80px",
    background: "#fff8f5",
    fontFamily: "'DM Sans', sans-serif",
  },

  header: {
    textAlign: "center" as const,
    marginBottom: "3rem",
  },

  tag: {
    display: "inline-block",
    background: "#fce7f3",
    color: "#993556",
    borderRadius: "50px",
    padding: "4px 16px",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.9rem",
    fontWeight: 500,
  },

  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 400,
    color: "#1c0a0a",
    margin: "0 0 0.5rem",
    lineHeight: 1.1,
  },

  subtitle: {
    fontSize: "14px",
    color: "#9d7474",
    margin: 0,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  item: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    cursor: "pointer",
    border: "1px solid rgba(243,224,224,0.6)",
  },

  img: {
    width: "100%",
    height: "240px",
    objectFit: "cover" as const,
    display: "block",
    transition: "transform 0.42s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(28,10,10,0.42)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.28s ease",
    borderRadius: "20px",
  },

  overlayText: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontFamily: "'DM Sans', sans-serif",
    border: "1px solid rgba(255,255,255,0.5)",
    padding: "8px 20px",
    borderRadius: "50px",
  },
};

export default Gallery;