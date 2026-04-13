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
  return (
    <div style={styles.card}>
      <div style={styles.cardBody}>
        <div style={styles.name}>{item.name}</div>
        <div style={styles.phone}>{item.phone}</div>

        <div style={styles.meta}>
          <span>{item.service}</span>
          <span>{item.date}</span>
          <span>{item.time}</span>
        </div>

        {item.notes && <div style={styles.note}>{item.notes}</div>}
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
    border: "1px solid #ddd",
    borderRadius: 10,
    background: "#fff",
  },
  cardBody: {
    padding: 12,
  },
  name: {
    fontWeight: 600,
  },
  phone: {
    fontSize: 12,
    color: "#777",
  },
  meta: {
    marginTop: 10,
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    background: "#f9f9f9",
    padding: 6,
    borderRadius: 6,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
  },
  center: {
    textAlign: "center",
    marginTop: 50,
  },
  spinner: {
    width: 20,
    height: 20,
    border: "3px solid #ddd",
    borderTop: "3px solid #333",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin 1s linear infinite",
  },
};

export default AdminPanel;