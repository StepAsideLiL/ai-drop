import DashboardPreview from "@/components/pages/home/DashboardPreview";
import FeaturesOverview from "@/components/pages/home/FeaturesOverview";
import HomeBanner from "@/components/pages/home/HomeBanner";
import ProductivityMessage from "@/components/pages/home/ProductivityMessage";
import SMain from "@/components/sui/SMain";
import React from "react";

const HomePage = () => {
  return (
    <SMain>
      <div className="container mx-auto max-w-7xl">
        <HomeBanner />

        <DashboardPreview />

        <FeaturesOverview />

        <ProductivityMessage />

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
