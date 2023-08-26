import React from "react";

const SMain = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen">{children}</main>;
};

export default SMain;
