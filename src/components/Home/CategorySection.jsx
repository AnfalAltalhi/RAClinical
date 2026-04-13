import React from "react";
import { Heart, Eye } from "lucide-react";

function ToothIcon({ style }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C9.5 2 7 3.5 7 6c0 1.5.5 2.5.5 4C7.5 13 8 16 9 18c.5 1.5 1 3 2 3 .5 0 1-.5 1-1.5V18c0-1 .5-1.5 1-1.5s1 .5 1 1.5v1.5c0 1 .5 1.5 1 1.5 1 0 1.5-1.5 2-3 1-2 1.5-5 1.5-8 0-1.5.5-2.5.5-4C19 3.5 14.5 2 12 2z" />
    </svg>
  );
}

const categories = [
  { name: "Cardiologyst", icon: Heart, iconColor: "#fb7185", bg: "#fff1f2" },
  { name: "Ophthalmologyst", icon: Eye, iconColor: "#60a5fa", bg: "#eff6ff" },
  { name: "Dentist", icon: ToothIcon, iconColor: "#eab308", bg: "#fefce8" },
];

export default function CategorySection() {
  return (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
        Categories
      </h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {categories.map((cat) => (
          <button
            key={cat.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseEnter={e => e.currentTarget.querySelector(".icon-wrap").style.transform = "scale(1.08)"}
            onMouseLeave={e => e.currentTarget.querySelector(".icon-wrap").style.transform = "scale(1)"}
          >
            <div className="icon-wrap" style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: cat.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <cat.icon style={{ width: "36px", height: "36px", color: cat.iconColor }} />
            </div>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#4b5563", textAlign: "center" }}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}