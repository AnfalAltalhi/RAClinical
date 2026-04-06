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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto flex items-center justify-around px-4 py-2">
        {/* First two tabs */}
        {tabs.slice(0, 2).map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                active ? "text-primary" : "text-gray-400"
              }`}
            >
              <tab.icon className="w-6 h-6" strokeWidth={active ? 2 : 1.5} />
            </Link>
          );
        })}

        {/* Center + button */}
        <Link
          to="/new"
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 -mt-5"
        >
          <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
        </Link>

        {/* Last two tabs */}
        {tabs.slice(2).map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                active ? "text-primary" : "text-gray-400"
              }`}
            >
              <tab.icon className="w-6 h-6" strokeWidth={active ? 2 : 1.5} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}