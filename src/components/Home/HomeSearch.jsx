import React from "react";
import { Search } from "lucide-react";

export default function HomeSearch() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      background: "#f3f4f6",
      borderRadius: "50px",
      padding: "10px 16px",
      gap: "10px",
      flex: 1,
    }}>
      <Search style={{ width: "16px", height: "16px", color: "#9ca3af", flexShrink: 0 }} />
      <input
        type="text"
        placeholder='Example "heart"'
        style={{
          flex: 1,
          background: "transparent",
          fontSize: "14px",
          color: "#1f2937",
          outline: "none",
          border: "none",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}