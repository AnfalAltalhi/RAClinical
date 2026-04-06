import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSearch from "../components/home/HomeSearch";
import PromoBanner from "../components/home/PromoBanner";
import CategorySection from "../components/home/CategorySection";
import PopularDoctors from "../components/home/PopularDoctors";
import BottomNav from "../components/home/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <div className="max-w-md mx-auto relative">
        <HomeHeader userName="Raneem" location="SA, Taif 26711" />
        <HomeSearch />
        <PromoBanner />
        <CategorySection />
        <PopularDoctors />
        <BottomNav />
      </div>
    </div>
  );
}