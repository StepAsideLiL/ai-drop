import clsx from "clsx";
import React from "react";

const SCenter = ({
  children,
  between = false,
  as = "",
}: {
  children: React.ReactNode;
  between?: boolean;
  as?: string;
}) => {
  const styleClasses = clsx(
    "flex items-center gap-3",
    between ? "justify-between" : "justify-center"
  );

  if (as === "ul") {
    return <ul className={styleClasses}>{children}</ul>;
  }

  return <div className={styleClasses}>{children}</div>;
};

export default SCenter;
