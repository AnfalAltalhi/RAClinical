import React from "react";
import { Heart, Eye } from "lucide-react";

// Custom tooth SVG icon since Lucide doesn't have one
function ToothIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C9.5 2 7 3.5 7 6c0 1.5.5 2.5.5 4C7.5 13 8 16 9 18c.5 1.5 1 3 2 3 .5 0 1-.5 1-1.5V18c0-1 .5-1.5 1-1.5s1 .5 1 1.5v1.5c0 1 .5 1.5 1 1.5 1 0 1.5-1.5 2-3 1-2 1.5-5 1.5-8 0-1.5.5-2.5.5-4C19 3.5 14.5 2 12 2z" />
    </svg>
  );
}

const categories = [
  {
    name: "Cardiologyst",
    icon: Heart,
    iconColor: "text-rose-400",
    bg: "bg-rose-50",
  },
  {
    name: "Ophthalmologyst",
    icon: Eye,
    iconColor: "text-blue-400",
    bg: "bg-blue-50",
  },
  {
    name: "Dentist",
    icon: ToothIcon,
    iconColor: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

export default function CategorySection() {
  return (
    <div className="px-5 mb-6">
      <h2 className="text-xl font-bold text-foreground mb-5">Categories</h2>
      <div className="flex gap-4">
        {categories.map((cat) => (
          <button key={cat.name} className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center`}>
              <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
            </div>
            <span className="text-xs text-gray-600 font-medium text-center">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}