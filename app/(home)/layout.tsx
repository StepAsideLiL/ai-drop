import MainFooter from "@/components/templates/main-footer/MainFooter";
import NavBar from "@/components/templates/nav-bar/NavBar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home - AI Drop",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />

      {children}

      <MainFooter />
    </section>
  );
};

export default HomeLayout;
