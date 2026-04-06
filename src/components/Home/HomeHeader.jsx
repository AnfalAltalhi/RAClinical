import React from "react";
import { Bell, MapPin } from "lucide-react";

export default function HomeHeader({ userName = "Raneem", location = "SA, Taif 26711" }) {
  return (
    <div className="flex items-center gap-4">
      <button className="relative w-10 h-10 flex items-center justify-center">
        <Bell className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
      </button>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
          {userName[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">{userName}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}