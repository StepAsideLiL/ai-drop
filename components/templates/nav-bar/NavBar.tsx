import SLogoLink from "@/components/sui/SLogoLink";
import React from "react";
import NavMenus from "./parts/NavMenus";

const NavBar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-5 mx-auto max-w-7xl">
        <div>
          <SLogoLink />
        </div>

        <div>
          <NavMenus />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
