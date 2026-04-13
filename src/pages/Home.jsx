import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import HomeSearch from "../components/Home/HomeSearch";
import PromoBanner from "../components/Home/PromoBanner";
import CategorySection from "../components/Home/CategorySection";
import PopularDoctors from "../components/Home/PopularDoctors";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top Bar */}
        <div style={{
          background: "white",
          borderBottom: "1px solid #f1f5f9",
          padding: "12px 20px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <HomeSearch />
          <div style={{ flexShrink: 0 }}>
            <HomeHeader userName="Raneem" location="SA, Taif 26711" />
          </div>
        </div>

        {/* Page Body */}
        <div style={{ flex: 1, padding: "24px 28px" }}>
          <PromoBanner />
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "24px",
            alignItems: "start",
            marginTop: "24px",
          }}>
            <CategorySection />
            <PopularDoctors />
          </div>
        </div>

      </div>
    </div>
  );
}