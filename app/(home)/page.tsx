import DashboardPreview from "@/components/pages/home/DashboardPreview";
import FeaturesOverview from "@/components/pages/home/FeaturesOverview";
import HomeBanner from "@/components/pages/home/HomeBanner";
import ProductivityMessage from "@/components/pages/home/ProductivityMessage";
import ToolsOverview from "@/components/pages/home/ToolsOverview";
import SMain from "@/components/sui/SMain";
import React from "react";

const HomePage = () => {
  return (
    <SMain>
      <div className="">
        <HomeBanner />

        <DashboardPreview />

        <FeaturesOverview />

        <ProductivityMessage />

        <ToolsOverview />

        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
      </div>
    </SMain>
  );
};

export default HomePage;
