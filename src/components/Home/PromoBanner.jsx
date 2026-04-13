import React from "react";

export default function PromoBanner() {
  return (
    <div style={{
      borderRadius: "24px",
      overflow: "hidden",
      height: "200px",
      position: "relative",
      marginBottom: "24px",
      background: "linear-gradient(135deg, #0f4c75 0%, #1b6ca8 50%, #2389d4 100%)",
    }}>

      {/* Wave shape */}
      <svg viewBox="0 0 500 200" preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
        <path d="M0,100 C100,20 200,180 300,80 C400,-20 450,120 500,60 L500,200 L0,200 Z" fill="white" />
      </svg>

      {/* Circle decorations */}
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "120px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

      {/* Doctor image */}
      <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=top"
       style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "100%",
          width: "45%",
          objectFit: "cover",
          objectPosition: "bottom center",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "24px 28px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "60%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "4px 12px", marginBottom: "10px", width: "fit-content" }}>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.9)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            Fauget Hospital
          </span>
        </div>

        <p style={{ fontSize: "12px", color: "#93d4f7", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px" }}>
          Medical
        </p>
        <p style={{ fontSize: "30px", fontWeight: "900", color: "white", textTransform: "uppercase", lineHeight: 1, margin: "0 0 10px" }}>
          CHECK-UP
        </p>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: "0 0 16px" }}>
          Early detection saves lives. Book your free check-up today.
        </p>

        <button style={{
          background: "white",
          color: "#0f4c75",
          border: "none",
          borderRadius: "12px",
          padding: "9px 20px",
          fontSize: "12px",
          fontWeight: "700",
          cursor: "pointer",
          width: "fit-content",
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        }}>
          Book Free Check-up →
        </button>
      </div>

      {/* FREE badge */}
      <div style={{
        position: "absolute",
        top: "16px",
        right: "46%",
        background: "#f59e0b",
        color: "white",
        borderRadius: "20px",
        padding: "4px 10px",
        fontSize: "10px",
        fontWeight: "800",
        zIndex: 3,
        boxShadow: "0 2px 8px rgba(245,158,11,0.4)",
      }}>
        FREE
      </div>

    </div>
  );
}