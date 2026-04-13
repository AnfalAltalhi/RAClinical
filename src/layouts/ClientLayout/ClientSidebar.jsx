import React from "react";
import { Home, Calendar, MessageCircle, User, Heart, Settings, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: User, label: "Profile", path: "/profile" },
];

export default function ClientSidebar () {
  const location = useLocation();
  const navigate = useNavigate(); // 

 
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/auth"); 
  };

  return (
    <div className="w-64 bg-white border-r border-gray-100 min-h-screen flex flex-col py-8 px-4 flex-shrink-0">
      
      {/* Logo */}
      <div className="px-3 mb-10">
        <h1 className="text-2xl font-black text-primary">RAClinical</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Your health, our priority</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${
                active
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={active ? 2.5 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="space-y-1 border-t border-gray-100 pt-4">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-foreground transition-colors"
        >
          <Settings className="w-5 h-5" strokeWidth={1.8} />
          Settings
        </Link>

       
        <button
  onClick={() => {
    console.log("CLICKED 🔥");
  }}
>
  Log Out
</button>
      </div>
    </div>
  );
}