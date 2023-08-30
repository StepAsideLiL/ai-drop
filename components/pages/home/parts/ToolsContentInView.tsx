"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const ToolsContentInView = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <div
      ref={ref}
      className={clsx(
        "space-y-10 transition-colors",
        isInView ? "text-white" : "text-gray-600"
      )}
    >
      {children}
    </div>
  );
};

export default ToolsContentInView;
