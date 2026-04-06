import React from "react";
import { Search } from "lucide-react";

export default function HomeSearch() {
  return (
    <div className="px-5 pb-5">
      <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder='Example "heart"'
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-gray-400 outline-none font-inter"
        />
      </div>
    </div>
  );
}