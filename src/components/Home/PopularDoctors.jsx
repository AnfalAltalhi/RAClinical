import React from "react";
import { Star } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Mohhamed",
    specialty: "Pediatrics",
    reviews: 123,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Khaled",
    specialty: "Pediatrics",
    reviews: 123,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
  },
];

export default function PopularDoctors() {
  return (
    <div className="px-5 pb-28">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">Popular Doctors</h2>
        <button className="text-sm text-primary font-medium">See all</button>
      </div>
      <div className="space-y-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="flex items-center gap-3 py-1">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base text-foreground">{doc.name}</p>
              <p className="text-sm text-muted-foreground">{doc.specialty}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-sm text-gray-400">({doc.reviews} reviews)</span>
              <Star className="w-4 h-4 text-pink-500 fill-pink-500 ml-1" />
              <span className="text-base font-bold text-foreground">{doc.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}