import React from "react";

export default function PromoBanner() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ height: 220 }}>
      <div className="relative w-full h-full flex">
        {/* Left blue section */}
        <div
          className="relative flex flex-col justify-between p-4 z-10"
          style={{
            width: "55%",
            background: "linear-gradient(135deg, #1a4a7a 0%, #1e5fa0 60%, #2a7bbf 100%)",
          }}
        >
          {/* Diagonal cut on the right side */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #1a4a7a 0%, #1e5fa0 60%, #2a7bbf 100%)",
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-[9px] font-semibold text-white/70 uppercase tracking-widest mb-1">
              Fauget Hospital
            </p>
            <div className="mb-1">
              <p className="text-[11px] font-medium text-cyan-300 uppercase tracking-wider">Medical</p>
              <p className="text-2xl font-black text-cyan-300 uppercase leading-tight">CHECK-UP</p>
            </div>
            <p className="text-[8px] text-white/60 leading-relaxed mb-3" style={{ maxWidth: 130 }}>
              Regular medical check-ups are an important aspect of maintaining good health. They allow doctors to detect any potential health issues early on and provide appropriate treatment before they become more serious.
            </p>
            <button className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-md">
              Check Now
            </button>
          </div>

          {/* Decorative dots */}
          <div className="absolute bottom-3 left-3 grid grid-cols-4 gap-0.5 z-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
            ))}
          </div>

          {/* FREE CHECK badge */}
          <div
            className="absolute z-20 flex items-center justify-center"
            style={{ right: -18, bottom: 28, width: 52, height: 52 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="text-[8px] font-black text-white leading-none">FREE</p>
                <p className="text-[8px] font-black text-white leading-none">CHECK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="flex-1 relative">
          <img
            src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=center"
            alt="Medical professional"
            className="w-full h-full object-cover object-center"
          />
          {/* Decorative dots top right */}
          <div className="absolute top-3 right-3 grid grid-cols-4 gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/60" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}