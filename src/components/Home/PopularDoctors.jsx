import React from "react";
import { Star } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Mohammed",
    specialty: "Pediatrics",
    reviews: 123,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Khaled",
    specialty: "Pediatrics",
    reviews: 98,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dr. Sarah",
    specialty: "Cardiology",
    reviews: 210,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
  },
];

export default function PopularDoctors() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1f2937", margin: 0 }}>Popular Doctors</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {doctors.map((doc) => (
          <div
            key={doc.id}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "white", borderRadius: "14px", border: "1px solid #f1f5f9", cursor: "pointer", transition: "box-shadow 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
          >
            <img
              src={doc.image}
              alt={doc.name}
              style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: "700", color: "#1f2937", fontSize: "14px", margin: 0 }}>{doc.name}</p>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "2px 0 0" }}>{doc.specialty}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <Star style={{ width: "13px", height: "13px", color: "#ec4899", fill: "#ec4899" }} />
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1f2937" }}>{doc.rating}</span>
              </div>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>({doc.reviews} reviews)</span>
            </div>
          </div>
        ))}
      </div>

      {/* See all button at bottom */}
      <button style={{
        width: "100%",
        marginTop: "12px",
        padding: "12px",
        background: "#f0fdfa",
        border: "1px solid #ccfbf1",
        borderRadius: "14px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#0f766e",
        cursor: "pointer",
      }}>
        See all
      </button>
    </div>
  );
}