// import React, { useState } from "react";
import React from "react";

// interface Booking {
//   name: string;
//   phone: string;
//   service: string;
//   date: string;
//   time: string;
//   notes: string;
// }

// const PALETTE = [
//   { bg: "#FBEAF0", color: "#993556" },
//   { bg: "#E1F5EE", color: "#085041" },
//   { bg: "#E6F1FB", color: "#0C447C" },
//   { bg: "#FAEEDA", color: "#633806" },
//   { bg: "#EAF3DE", color: "#27500A" },
//   { bg: "#EEEDFE", color: "#3C3489" },
// ];

// function getInitials(name: string): string {
//   const parts = name.trim().split(" ");
//   return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
// }

// function getPalette(name: string) {
//   let h = 0;
//   for (let i = 0; i < name.length; i++) h += name.charCodeAt(i);
//   return PALETTE[h % PALETTE.length];
// }

// function formatDate(d: string): string {
//   const dt = new Date(d);
//   if (isNaN(dt.getTime())) return d || "—";
//   return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
// }

// function isUpcoming(d: string): boolean {
//   return new Date(d) >= new Date();
// }

// const CalendarIcon = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888780" strokeWidth="2" strokeLinecap="round">
//     <rect x="3" y="4" width="18" height="18" rx="2" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888780" strokeWidth="2" strokeLinecap="round">
//     <circle cx="12" cy="12" r="10" />
//     <polyline points="12 6 12 12 16 14" />
//   </svg>
// );

// const RefreshIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//     <polyline points="23 4 23 10 17 10" />
//     <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
//   </svg>
// );

// const BookingCard = ({ item }: { item: Booking }) => {
//   const up = isUpcoming(item.date);
//   const pal = getPalette(item.name || "");

//   return (
//     <div style={styles.card}>
//       <div style={{ ...styles.cardAccent, background: up ? "#F4C0D1" : "#D3D1C7" }} />
//       <div style={styles.cardBody}>
//         <div style={styles.cardHead}>
//           <span style={styles.svcPill}>{item.service || "Service"}</span>          
//         </div>

//         <div style={styles.avatarRow}>
//           <div style={{ ...styles.avatar, background: pal.bg, color: pal.color }}>
//             {getInitials(item.name || "?")}
//           </div>
//           <div>
//             <div style={styles.name}>{item.name || "—"}</div>
//             <div style={styles.phone}>{item.phone || "—"}</div>
//           </div>
//         </div>

//         <div style={styles.meta}>
//           <div style={styles.metaTag}>
//             <CalendarIcon />
//             {formatDate(item.date)}
//           </div>
//           {item.time && (
//             <div style={styles.metaTag}>
//               <ClockIcon />
//               {item.time}
//             </div>
//           )}
//         </div>

//         {item.notes ? (
//           <div style={styles.noteBox}>{item.notes}</div>
//         ) : (
//           <div style={styles.noNote}>No notes added</div>
//         )}
//       </div>
//     </div>
//   );
// };

const AdminPanel = () => {
  // const [data, setData] = useState<Booking[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [activeFilter] = useState("all");

  // const fetchData = () => {
  //   setLoading(true);
  //   fetch("https://script.google.com/macros/s/AKfycbz4s_dnPcZWIul6e0yjq10VP9IZEeoqqM7pizDueQCTTJ2F2qgDheQKhYqDUfbNb60r/exec")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res.data || []);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.brandIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#993556" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <div style={styles.brandTitle}>Booking dashboard</div>
            <div style={styles.brandSub}>All appointments</div>
          </div>
        </div>
        {/* <button style={styles.refreshBtn} onClick={fetchData}>
          <RefreshIcon /> Refresh
        </button> */}
      </div>  

     

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "28px 24px",
    background: "#FAFAF8",
    minHeight: "100vh",
    fontFamily: "DM Sans, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px",
  },
  brand: { display: "flex", alignItems: "center", gap: "12px" },
  brandIcon: {
    width: "38px",
    height: "38px",
    background: "#F4C0D1",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  brandTitle: { fontSize: "16px", fontWeight: 500, color: "#2C2C2A", lineHeight: "1.2" },
  brandSub: { fontSize: "12px", color: "#888780" },
  refreshBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "#fff",
    border: "0.5px solid #D3D1C7",
    borderRadius: "8px",
    padding: "7px 14px",
    fontSize: "13px",
    color: "#5F5E5A",
    cursor: "pointer",
  },  
  chip: {
    background: "#fff",
    border: "0.5px solid #D3D1C7",
    borderRadius: "20px",
    padding: "5px 12px",
    fontSize: "12px",
    color: "#5F5E5A",
    cursor: "pointer",
  },
  chipActive: {
    background: "#FBEAF0",
    border: "0.5px solid #F4C0D1",
    color: "#72243E",
    fontWeight: 500,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "12px",
  },
  card: {
    background: "#fff",
    border: "0.5px solid #E8E6E0",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "border-color 0.15s",
    cursor: "default",
  },
  cardAccent: { height: "3px" },
  cardBody: { padding: "16px" },
  cardHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "14px",
  },
  svcPill: {
    background: "#FBEAF0",
    color: "#72243E",
    fontSize: "11px",
    fontWeight: 500,
    padding: "3px 10px",
    borderRadius: "20px",
  },
  statusDot: { width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0 },
  avatarRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 500,
    flexShrink: 0,
  },
  name: { fontSize: "14px", fontWeight: 500, color: "#2C2C2A" },
  phone: { fontSize: "12px", color: "#888780" },
  meta: { display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" },
  metaTag: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    background: "#F7F6F2",
    borderRadius: "6px",
    padding: "4px 8px",
    fontSize: "11px",
    color: "#5F5E5A",
  },
  noteBox: {
    background: "#FDF6F9",
    borderLeft: "2px solid #F4C0D1",
    borderRadius: "0 6px 6px 0",
    padding: "8px 10px",
    fontSize: "12px",
    color: "#5F5E5A",
    lineHeight: "1.5",
  },
  noNote: { fontSize: "12px", color: "#B4B2A9", fontStyle: "italic" },
  empty: { textAlign: "center", padding: "60px 0", color: "#888780", fontSize: "14px" },
  spinner: {
    width: "18px",
    height: "18px",
    border: "2px solid #E8E6E0",
    borderTopColor: "#D4537E",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin 0.7s linear infinite",
  },
};

export default AdminPanel;