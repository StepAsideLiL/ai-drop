import clsx from "clsx";
import Link from "next/link";
import React from "react";

const SBtnLink = ({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  if (href !== "") {
    return (
      <Link
        href={href}
        className={clsx(
          "px-3 py-2 inline-block border-2 border-blue-500 rounded"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        "px-3 py-2 inline-block border-2 border-blue-500 rounded"
      )}
    >
      {children}
    </button>
  );
};

export default SBtnLink;
