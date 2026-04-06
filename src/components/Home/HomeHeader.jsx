import React from "react";
import { Bell, MapPin } from "lucide-react";

export default function HomeHeader({ userName = "Raneem", location = "SA, Taif 26711" }) {
  return (
    <div className="flex items-start justify-between px-5 pt-8 pb-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Wellcome Back, {userName}!
        </h1>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
      </div>
      <button className="relative mt-1 w-10 h-10 flex items-center justify-center">
        <Bell className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </div>
  );
}