import React, { useState } from "react";

interface NavbarProps {
  onBook: (serviceName?: string) => void;
  onHome?: () => void;
  onServices?: () => void;
  onGallery?: () => void;
  onAbout?: () => void;
  onAdmin?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onBook,
  onHome,
  onServices,
  onGallery,
  onAbout,
  onAdmin,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    if (link === "Home") onHome?.();
    else if (link === "Services") onServices?.();
    else if (link === "Gallery") onGallery?.();
    else if (link === "About") onAbout?.();
    else if (link === "Admin") onAdmin?.();
    setMenuOpen(false);
  };

  return (
    <>
      <style>{navStyles}</style>

      <nav style={styles.navbar}>
        {/* LOGO */}
        <div style={styles.logo} onClick={() => onHome?.()}>
          <div style={styles.logoDot} />
          <span style={styles.logoText}>NailLuxe</span>
          <span style={styles.logoTag}>Studio</span>
        </div>

        {/* DESKTOP LINKS */}
        <ul style={styles.navLinks}>
          {["Home", "Services", "Gallery", "About"].map((link) => (
            <li
              key={link}
              className={`nl-navli${activeLink === link ? " nl-navli-active" : ""}`}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* RIGHT GROUP */}
        <div style={styles.rightGroup}>
          <button style={styles.bookBtn} className="nl-bookbtn" onClick={() => onBook()}>
            Book Now
          </button>
          <div
            style={styles.ham}
            className="nl-ham"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              style={styles.hamLine}
              className={`nl-hamline${menuOpen ? " nl-hamline1-open" : ""}`}
            />
            <span
              style={{ ...styles.hamLine, ...(menuOpen ? { opacity: 0 } : {}) }}
              className="nl-hamline"
            />
            <span
              style={styles.hamLine}
              className={`nl-hamline${menuOpen ? " nl-hamline3-open" : ""}`}
            />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {["Home", "Services", "Gallery", "About"].map((link) => (
            <div
              key={link}
              style={styles.mobLink}
              className="nl-moblink"
              onClick={() => handleNavClick(link)}
            >
              {link}
            </div>
          ))}
          <div style={styles.mobDivider} />
          <button
            style={styles.mobBook}
            onClick={() => {
              setMenuOpen(false);
              onBook();
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
};

const navStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@400;500&display=swap');

  .nl-navli {
    font-size: 14px;
    color: #9d7474;
    padding: 6px 16px;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.01em;
    list-style: none;
  }
  .nl-navli:hover {
    background: #fce7f3;
    color: #993556;
  }
  .nl-navli-active {
    color: #993556;
    font-weight: 500;
    background: #fce7f3;
  }
  .nl-bookbtn:hover {
    background: #993556 !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(212,83,126,0.35);
  }
  .nl-bookbtn:active { transform: scale(0.97) !important; }

  .nl-ham { display: none !important; }

  .nl-hamline {
    display: block;
    transition: transform 0.22s ease, opacity 0.18s;
  }
  .nl-hamline1-open { transform: rotate(45deg) translate(4px, 4px); }
  .nl-hamline3-open { transform: rotate(-45deg) translate(4px, -4px); }

  .nl-moblink:hover {
    background: #fce7f3;
    color: #993556;
  }

  @media (max-width: 700px) {
    .nl-ham { display: flex !important; }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 36px",
    height: "68px",
    background: "rgba(255, 248, 245, 0.96)",
    borderBottom: "1px solid rgba(243, 224, 224, 0.8)",
    backdropFilter: "blur(12px)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  logoDot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    background: "#D4537E",
    flexShrink: 0,
  },

  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 600,
    color: "#1c0a0a",
    letterSpacing: "-0.3px",
  },

  logoTag: {
    fontSize: "10px",
    color: "#993556",
    background: "#FBEAF0",
    borderRadius: "100px",
    padding: "2px 10px",
    fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  rightGroup: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  bookBtn: {
    background: "#D4537E",
    color: "#fff",
    border: "none",
    padding: "9px 22px",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s, transform 0.15s, box-shadow 0.2s",
    letterSpacing: "0.02em",
  },

  ham: {
    flexDirection: "column" as const,
    gap: "5px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "10px",
  },

  hamLine: {
    width: "20px",
    height: "1.5px",
    background: "#1c0a0a",
    borderRadius: "2px",
  },

  mobileMenu: {
    display: "flex",
    flexDirection: "column" as const,
    background: "rgba(255,248,245,0.98)",
    borderBottom: "1px solid rgba(243,224,224,0.8)",
    padding: "14px 24px 22px",
    gap: "2px",
    backdropFilter: "blur(12px)",
  },

  mobLink: {
    fontSize: "15px",
    color: "#9d7474",
    padding: "11px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s, color 0.18s",
  },

  mobDivider: {
    height: "1px",
    background: "rgba(243,224,224,0.9)",
    margin: "10px 0",
  },

  mobBook: {
    background: "#D4537E",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    marginTop: "4px",
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
  },
};

export default Navbar;