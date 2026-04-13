import React, { useEffect, useState } from "react";

interface Booking {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const AdminPanel = () => {
  const [data, setData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch("https://script.google.com/macros/s/AKfycbz4s_dnPcZWIul6e0yjq10VP9IZEeoqqM7pizDueQCTTJ2F2qgDheQKhYqDUfbNb60r/exec")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <div style={styles.brandTitle}>Booking Dashboard</div>
          <div style={styles.brandSub}>All appointments</div>
        </div>

        <button style={styles.refreshBtn} onClick={fetchData}>
          Refresh
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div style={styles.center}>
          <span style={styles.spinner}></span>
        </div>
      ) : data.length === 0 ? (
        <div style={styles.empty}>No bookings found</div>
      ) : (
        <div style={styles.grid}>
          {data.map((item, i) => (
            <BookingCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------- CARD ---------------- */

const BookingCard = ({ item }: { item: Booking }) => {
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    { bg: "#deeaf8", color: "#185FA5", noteBorder: "#85B7EB" },
    { bg: "#c8f0e3", color: "#0F6E56", noteBorder: "#5DCAA5" },
    { bg: "#f7d6e4", color: "#993556", noteBorder: "#ED93B1" },
    { bg: "#fde8cc", color: "#854F0B", noteBorder: "#EF9F27" },
    { bg: "#e8e7fe", color: "#534AB7", noteBorder: "#AFA9EC" },
  ];

  const c = colors[item.name.charCodeAt(0) % colors.length];

  return (
    <div style={styles.card}>
      <div style={styles.cardBody}>
        {/* Avatar + Name */}
        <div style={styles.row}>
          <div
            style={{
              ...styles.avatar,
              background: c.bg,
              color: c.color,
            }}
          >
            {initials}
          </div>
          <div>
            <div style={styles.name}>{item.name}</div>
            <div style={styles.phone}>{item.phone}</div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Badge + Meta */}
        <div style={styles.meta}>
          <span
            style={{
              ...styles.badge,
              background: c.bg,
              color: c.color,
            }}
          >
            {item.service}
          </span>
          <div style={styles.metaRow}>
          <span>
  {new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}
</span>
<span>
  🕐{" "}
  {new Date(item.time).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  })}
</span>
          </div>
        </div>

        {/* Notes */}
        {item.notes && (
          <div
            style={{
              ...styles.note,
              borderLeft: `2px solid ${c.noteBorder}`,
            }}
          >
            {item.notes}
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 20,
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  brandSub: {
    fontSize: 12,
    color: "#777",
  },
  refreshBtn: {
    padding: "6px 12px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: 12,
  },
  card: {
    border: "0.5px solid #e5e3db",
    borderRadius: 12,
    background: "#fff",
  },
  cardBody: {
    padding: "1rem 1.25rem",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 500,
    flexShrink: 0,
  },
  name: {
    fontSize: 15,
    fontWeight: 500,
    color: "#1a1a18",
    margin: 0,
  },
  phone: {
    fontSize: 12,
    color: "#888780",
    margin: 0,
  },
  divider: {
    borderTop: "0.5px solid #e5e3db",
    marginBottom: 10,
  },
  meta: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
  },
  badge: {
    fontSize: 11,
    fontWeight: 500,
    padding: "2px 10px",
    borderRadius: 20,
    display: "inline-block",
    alignSelf: "flex-start",
  },
  metaRow: {
    display: "flex",
    gap: 12,
    fontSize: 12,
    color: "#888780",
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: "#5F5E5A",
    background: "#f7f6f2",
    padding: "8px 10px",
    borderRadius: 8,
    textAlign:"left"
  },
};

export default AdminPanel;