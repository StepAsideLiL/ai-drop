"use client";

import { useStore } from "@/lib/app-state/store";
import clsx from "clsx";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ToolsContentInView = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const setInViewFeature = useStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
    }
  }, [id, isInView, setInViewFeature]);

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
