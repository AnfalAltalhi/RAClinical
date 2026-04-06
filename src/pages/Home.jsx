import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSearch from "../components/home/HomeSearch";
import PromoBanner from "../components/Home/PromoBanner";
import CategorySection from "../components/home/CategorySection";
import PopularDoctors from "../components/home/PopularDoctors";
import Sidebar from "../components/Home/Sidebar.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-100 px-8 py-4">
          <div className="max-w-5xl mx-auto flex items-center gap-6">
            <div className="flex-1">
              <HomeSearch />
            </div>
            <div className="flex-shrink-0">
              <HomeHeader userName="Raneem" location="SA, Taif 26711" />
            </div>
          </div>
        </div>

        {/* Page Body */}
        <div className="flex-1 px-8 py-6 max-w-5xl mx-auto w-full">
          {/* Promo Banner */}
          <div className="mb-8">
            <PromoBanner />
          </div>

          {/* Categories + Doctors Grid */}
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
              <CategorySection />
            </div>
            <div className="col-span-2">
              <PopularDoctors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}