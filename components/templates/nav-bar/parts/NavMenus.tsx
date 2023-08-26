"use client";

import SCenter from "@/components/sui/SCenter";
import { Button } from "@/components/ui/button";
import { navLinkLists } from "@/constents/NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenus = () => {
  const pathname = usePathname();

  return (
    <nav>
      <SCenter as="ul">
        {navLinkLists.map((list, index) => (
          <ActiveLink
            key={index}
            href={list.link}
            active={pathname === list.link ? true : false}
          >
            {list.title}
          </ActiveLink>
        ))}
        <li>
          <Button variant="outline">Sign In</Button>
        </li>

        <li>
          <Button>Sign Up</Button>
        </li>
      </SCenter>
    </nav>
  );
};

const ActiveLink = ({
  children,
  href = "",
  active = false,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "py-1 hover:border-b-2 hover:border-b-black dark:border-b-white font-medium transition-all duration-100",
          active && "border-b-2 border-b-black dark:border-b-white"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavMenus;
