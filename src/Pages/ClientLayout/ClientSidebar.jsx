import React from "react";
import { Home, Calendar, MessageCircle, User, Heart, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: User, label: "Profile", path: "/profile" },
];

export default function ClientSidebar() {
  const location = useLocation();

  return (
    <div style={{
      width: "240px",
      background: "white",
      borderRight: "1px solid #f1f5f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "28px 16px",
      flexShrink: 0,
    }}>

      {/* Logo */}
      <div style={{ padding: "0 8px", marginBottom: "36px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "900", color: "#1a9e8a", margin: 0 }}>
          RAClinical
        </h1>
        <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>
          Your health, our priority
        </p>
      </div>

      {/* Nav Links */}
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.15s",
                background: active ? "#1a9e8a" : "transparent",
                color: active ? "white" : "#6b7280",
                borderLeft: active ? "none" : "none",
              }}
              onMouseEnter={e => {
                if (!active) {
                  e.currentTarget.style.background = "#f0fdf4";
                  e.currentTarget.style.color = "#1a9e8a";
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6b7280";
                }
              }}
            >
              <item.icon
                style={{ width: "20px", height: "20px", flexShrink: 0 }}
                strokeWidth={active ? 2.5 : 1.8}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
        <Link
          to="/settings"
          style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", fontSize: "14px", fontWeight: "600", color: "#6b7280", textDecoration: "none" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.color = "#1f2937"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b7280"; }}
        >
          <Settings style={{ width: "20px", height: "20px" }} strokeWidth={1.8} />
          Settings
        </Link>

        <button style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 12px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#ef4444",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          width: "100%",
          fontFamily: "inherit",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#fef2f2"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <LogOut style={{ width: "20px", height: "20px" }} strokeWidth={1.8} />
          Log Out
        </button>
      </div>

    </div>
  );
}