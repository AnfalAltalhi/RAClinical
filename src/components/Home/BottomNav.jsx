import React from "react";
import { Home, FileText, MessageCircle, User, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { icon: Home, path: "/" },
  { icon: FileText, path: "/appointments" },
  { icon: MessageCircle, path: "/messages" },
  { icon: User, path: "/profile" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <div style={{
      position: "fixed",
      bottom: 0, left: 0, right: 0,
      zIndex: 50,
      background: "white",
      borderTop: "1px solid #f1f5f9",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "10px 24px",
    }}>
      {tabs.slice(0, 2).map((tab) => {
        const active = location.pathname === tab.path;
        return (
          <Link key={tab.path} to={tab.path} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "40px", height: "40px", borderRadius: "12px",
            color: active ? "#1b4f72" : "#9ca3af",
            textDecoration: "none",
          }}>
            <tab.icon size={24} strokeWidth={active ? 2 : 1.5} />
          </Link>
        );
      })}

      <Link to="/new" style={{
        width: "56px", height: "56px",
        borderRadius: "50%",
        background: "#1b4f72",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(27,79,114,0.35)",
        marginTop: "-20px",
        textDecoration: "none",
      }}>
        <Plus size={28} color="white" strokeWidth={2.5} />
      </Link>

      {tabs.slice(2).map((tab) => {
        const active = location.pathname === tab.path;
        return (
          <Link key={tab.path} to={tab.path} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "40px", height: "40px", borderRadius: "12px",
            color: active ? "#1b4f72" : "#9ca3af",
            textDecoration: "none",
          }}>
            <tab.icon size={24} strokeWidth={active ? 2 : 1.5} />
          </Link>
        );
      })}
    </div>
  );
}