import React from "react";
import { Bell, MapPin } from "lucide-react";

export default function HomeHeader({ userName = "Raneem", location = "SA, Taif 26711" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button style={{
        position: "relative",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Bell style={{ width: "22px", height: "22px", color: "#6b7280" }} strokeWidth={1.5} />
        <span style={{
          position: "absolute", top: "4px", right: "4px",
          width: "8px", height: "8px",
          background: "#ef4444",
          borderRadius: "50%",
          border: "2px solid white",
        }} />
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "38px", height: "38px",
          borderRadius: "50%",
          background: "#1b4f72",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: "700", fontSize: "16px",
          flexShrink: 0,
        }}>
          {userName[0]}
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: "700", color: "#1f2937", margin: 0 }}>
            {userName}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "3px", marginTop: "2px" }}>
            <MapPin style={{ width: "11px", height: "11px", color: "#9ca3af" }} />
            <span style={{ fontSize: "11px", color: "#9ca3af" }}>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}