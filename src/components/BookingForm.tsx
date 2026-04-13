import React, { useState, useEffect } from "react";
import { SERVICES } from "./ServiceCard";

interface BookingPageProps {
  preSelected?: string;
  onBack?: () => void;
}

const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "05:00 PM",
];

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

const BookingPage: React.FC<BookingPageProps> = ({ preSelected, onBack }) => {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", date: "", time: "",
    service: preSelected || "", notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelected) setForm((f) => ({ ...f, service: preSelected }));
  }, [preSelected]);

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())  e.name    = "Please Enter Name";
    if (!form.phone.trim()) e.phone   = "Please Enter Phone Number.";
    if (!form.service)      e.service = "Please Select Service";
    if (!form.date)         e.date    = "Please Select Date";
    if (!form.time)         e.time    = "Please Select Your Time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbz4s_dnPcZWIul6e0yjq10VP9IZEeoqqM7pizDueQCTTJ2F2qgDheQKhYqDUfbNb60r/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });
  
      setSubmitted(true);
    } catch (err) {
      alert("Error sending data");
    }
  };

  if (submitted) {
    return (
      <>
        <style>{bookingStyles}</style>
        <div style={styles.wrap}>
          <div style={styles.successCard} className="bp-card">
            <div style={styles.successIcon}>🎉</div>
            <h2 style={styles.successTitle}>Booking Confirmed!</h2>
            <p style={styles.successText}>
  <strong>{form.name}</strong>, your{" "}
  <strong>{form.service}</strong> appointment has been confirmed for{" "}
  <strong>{form.date}</strong> at{" "}
  <strong>{form.time}</strong>. We will contact you at{" "}
  <strong>{form.phone}</strong>. 💅
</p>

            <div style={styles.confirmCard}>
              {[["Service", form.service], ["Date", form.date], ["Time", form.time], ["Contact", form.phone]].map(
                ([label, value]) => (
                  <div key={label} style={styles.confirmRow}>
                    <span style={styles.confirmLabel}>{label}</span>
                    <strong style={styles.confirmValue}>{value}</strong>
                  </div>
                )
              )}
            </div>

            <div style={styles.successBtns}>
              <button
                style={styles.btnPrimary}
                className="bp-btn-hover"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", date: "", time: "", service: "", notes: "" });
                }}
              >
                New Booking
              </button>
              {onBack && (
                <button style={styles.btnOutline} className="bp-outline-hover" onClick={onBack}>
                  ← Back to Services
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{bookingStyles}</style>
      <div style={styles.wrap}>
        {onBack && (
          <button style={styles.backBtn} className="bp-back" onClick={onBack}>
            ← Back to Services
          </button>
        )}

        {/* Header */}
        <div style={styles.header}>
          <span style={styles.headerTag}>📅 Appointment</span>
          <h1 style={styles.title}>Book Your Session</h1>
          <p style={styles.subtitle}>Please keep our reservation; we’ll confirm within 2 hours.</p>
        </div>

        {/* Form card */}
        <div style={styles.card} className="bp-card">
          <div style={styles.grid}>

            {/* Name */}
            <div style={styles.group}>
              <label style={styles.label}>Naam *</label>
              <input
                style={{ ...styles.input, ...(errors.name ? styles.inputErr : {}) }}
                className="bp-input"
                placeholder="e.g. Priya Shah"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
              />
              {errors.name && <span style={styles.errTxt}>{errors.name}</span>}
            </div>

            {/* Phone */}
            <div style={styles.group}>
              <label style={styles.label}>Phone Number *</label>
              <input
                style={{ ...styles.input, ...(errors.phone ? styles.inputErr : {}) }}
                className="bp-input"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
              {errors.phone && <span style={styles.errTxt}>{errors.phone}</span>}
            </div>

            {/* Service */}
            <div style={styles.group}>
              <label style={styles.label}>Services *</label>
              <select
                style={{ ...styles.input, ...(errors.service ? styles.inputErr : {}) }}
                className="bp-input"
                value={form.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option value="">Services...</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.emoji} {s.name} — {s.price}
                  </option>
                ))}
              </select>
              {errors.service && <span style={styles.errTxt}>{errors.service}</span>}
            </div>

            {/* Date */}
            <div style={styles.group}>
              <label style={styles.label}>Date *</label>
              <input
                type="date"
                style={{ ...styles.input, ...(errors.date ? styles.inputErr : {}) }}
                className="bp-input"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
              />
              {errors.date && <span style={styles.errTxt}>{errors.date}</span>}
            </div>

            {/* Time Slots */}
            <div style={styles.groupFull}>
              <label style={styles.label}>Time Slot *</label>
              {errors.time && <span style={styles.errTxt}>{errors.time}</span>}
              <div style={styles.timeGrid}>
                {TIME_SLOTS.map((t) => (
                  <div
                    key={t}
                    style={form.time === t ? styles.slotActive : styles.slot}
                    className={form.time === t ? "" : "bp-slot"}
                    onClick={() => set("time", t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div style={styles.groupFull}>
              <label style={styles.label}>Special Notes</label>
              <textarea
                style={styles.textarea}
                className="bp-input"
                placeholder="Nail length, design ideas, allergies..."
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </div>
          </div>

          <button style={styles.submit} className="bp-submit" onClick={handleSubmit}>
            ✨ Confirm Appointment
          </button>
        </div>
      </div>
    </>
  );
};

const bookingStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

  .bp-card {
    animation: bpFadeUp 0.48s ease both;
  }
  @keyframes bpFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .bp-back:hover { color: #D4537E !important; }

  .bp-input:focus {
    outline: none;
    border-color: #D4537E !important;
    box-shadow: 0 0 0 3px rgba(212, 83, 126, 0.12);
  }

  .bp-slot:hover {
    border-color: #D4537E;
    color: #D4537E;
    background: #fbeaf0;
  }

  .bp-submit:hover {
    background: #993556 !important;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(212,83,126,0.38) !important;
  }
  .bp-submit:active { transform: scale(0.98) !important; }

  .bp-btn-hover:hover { background: #993556 !important; }
  .bp-outline-hover:hover { background: #fbeaf0 !important; }
`;

const styles: { [key: string]: React.CSSProperties } = {
  wrap: {
    minHeight: "100vh",
    padding: "48px 5vw 80px",
    background: "#fff8f5",
    fontFamily: "'DM Sans', sans-serif",
  },

  backBtn: {
    background: "none",
    border: "none",
    color: "#c4a0a0",
    fontSize: "13px",
    cursor: "pointer",
    padding: "0 0 1.2rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    display: "block",
    transition: "color 0.18s",
    fontFamily: "'DM Sans', sans-serif",
  },

  header: {
    marginBottom: "2rem",
  },

  headerTag: {
    display: "inline-block",
    background: "#fce7f3",
    color: "#D4537E",
    borderRadius: "50px",
    padding: "4px 16px",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.8rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
  },

  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 400,
    color: "#1c0a0a",
    margin: "0 0 0.4rem",
    lineHeight: 1.1,
  },

  subtitle: {
    fontSize: "0.92rem",
    color: "#9d7474",
    margin: 0,
  },

  card: {
    background: "#fff",
    borderRadius: "28px",
    padding: "2.4rem clamp(1.4rem, 4vw, 2.8rem)",
    border: "1px solid rgba(243,224,224,0.9)",
    maxWidth: "800px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.4rem",
  },

  group: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },

  groupFull: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    gridColumn: "1 / -1",
  },

  label: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c4a0a0",
    fontWeight: 500,
  },

  input: {
    background: "#fdf6f6",
    border: "1.5px solid rgba(235,213,213,0.9)",
    borderRadius: "12px",
    padding: "13px 16px",
    fontSize: "14px",
    color: "#1c0a0a",
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box" as const,
  },

  inputErr: {
    borderColor: "#ef4444",
  },

  errTxt: {
    fontSize: "12px",
    color: "#ef4444",
  },

  textarea: {
    background: "#fdf6f6",
    border: "1.5px solid rgba(235,213,213,0.9)",
    borderRadius: "12px",
    padding: "13px 16px",
    fontSize: "14px",
    color: "#1c0a0a",
    width: "100%",
    minHeight: "88px",
    resize: "vertical" as const,
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box" as const,
  },

  timeGrid: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
  },

  slot: {
    background: "#fdf6f6",
    border: "1.5px solid rgba(235,213,213,0.9)",
    borderRadius: "10px",
    padding: "9px 14px",
    fontSize: "13px",
    cursor: "pointer",
    color: "#1c0a0a",
    userSelect: "none" as const,
    transition: "all 0.18s",
    fontFamily: "'DM Sans', sans-serif",
  },

  slotActive: {
    background: "#D4537E",
    border: "1.5px solid #D4537E",
    borderRadius: "10px",
    padding: "9px 14px",
    fontSize: "13px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: 500,
    userSelect: "none" as const,
    fontFamily: "'DM Sans', sans-serif",
  },

  submit: {
    marginTop: "2rem",
    width: "100%",
    background: "#D4537E",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "16px",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.04em",
    transition: "background 0.18s, transform 0.15s, box-shadow 0.2s",
  },

  // Success state
  successCard: {
    maxWidth: "520px",
    margin: "60px auto",
    background: "#fff",
    borderRadius: "28px",
    padding: "48px 40px",
    border: "1px solid rgba(243,224,224,0.9)",
    textAlign: "center" as const,
  },

  successIcon: {
    fontSize: "3.2rem",
    marginBottom: "1rem",
  },

  successTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2rem",
    fontWeight: 400,
    color: "#1c0a0a",
    margin: "0 0 0.8rem",
  },

  successText: {
    color: "#9d7474",
    lineHeight: 1.7,
    fontSize: "0.92rem",
    margin: "0 0 1.6rem",
    fontFamily: "'DM Sans', sans-serif",
  },

  confirmCard: {
    background: "#fdf6f6",
    borderRadius: "16px",
    padding: "1.1rem 1.4rem",
    marginBottom: "1.6rem",
    border: "1px solid rgba(235,213,213,0.8)",
    textAlign: "left" as const,
  },

  confirmRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    fontSize: "14px",
    borderBottom: "1px solid rgba(243,224,224,0.7)",
    fontFamily: "'DM Sans', sans-serif",
  },

  confirmLabel: {
    color: "#9d7474",
  },

  confirmValue: {
    color: "#1c0a0a",
  },

  successBtns: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },

  btnPrimary: {
    background: "#D4537E",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "11px 26px",
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s",
  },

  btnOutline: {
    background: "transparent",
    color: "#D4537E",
    border: "1.5px solid #D4537E",
    borderRadius: "50px",
    padding: "11px 26px",
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.18s",
  },
};

export default BookingPage;