"use client";

import SLogoLink from "@/components/sui/SLogoLink";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const MainFooter = () => {
  const [year, setYear] = useState("2023");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();

    setYear(year + "");
  }, []);

  return (
    <footer className="p-10 m-5 text-white rounded bg-stone-950">
      <div className="flex flex-col gap-7 md:flex-row md:gap-0">
        <div className="w-full space-y-4 md:w-1/5">
          <FooterHeader>
            <SLogoLink />
          </FooterHeader>

          <div className="flex flex-col space-y-3">
            <p className="text-sm">Your Personal AI Assistant</p>

            <p className="text-sm">contact@ai.drop</p>

            <p className="text-sm">+990 123 456 789</p>
          </div>
        </div>

        <div className="w-full space-y-4 md:w-1/5">
          <FooterHeader>Navigation</FooterHeader>

          <div className="flex flex-col space-y-3">
            <FooterLink>Tools</FooterLink>

            <FooterLink>Feature</FooterLink>

            <FooterLink>Pricing</FooterLink>

            <FooterLink>News</FooterLink>
          </div>
        </div>

        <div className="w-full space-y-4 md:w-1/5">
          <FooterHeader>Utility Pages</FooterHeader>

          <div className="flex flex-col space-y-3">
            <FooterLink>Instructions</FooterLink>

            <FooterLink>Licenses</FooterLink>

            <FooterLink>Models</FooterLink>
          </div>
        </div>

        <div className="w-full space-y-4 md:w-1/5">
          <FooterHeader>Resourses</FooterHeader>

          <div className="flex flex-col space-y-3">
            <FooterLink>Help & Support</FooterLink>

            <FooterLink>Documents</FooterLink>

            <FooterLink>Blogs</FooterLink>
          </div>
        </div>

        <div className="w-full space-y-4 md:w-1/5">
          <FooterHeader>AI.drop</FooterHeader>

          <div className="flex flex-col space-y-3">
            <FooterLink href="/about-p-for-pro">Why Us</FooterLink>

            <FooterLink>Careers</FooterLink>

            <FooterLink>Contact Us</FooterLink>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 my-4">
        <FooterHeader>Follow Us On</FooterHeader>

        <div className="flex gap-2">
          <FooterSocialLink href="#">
            <CiFacebook className="text-xl" />
          </FooterSocialLink>

          <FooterSocialLink href="#">
            <CiInstagram className="text-xl" />
          </FooterSocialLink>

          <FooterSocialLink href="#">
            <CiTwitter className="text-xl" />
          </FooterSocialLink>

          <FooterSocialLink href="#">
            <CiYoutube className="text-xl" />
          </FooterSocialLink>
        </div>
      </div>

      <Separator className="my-4" />

      <p className="text-xs">
        © {year} by{" "}
        <FooterLink href="http://stepasidelil.web.app/">Rifat Khan</FooterLink>
      </p>
    </footer>
  );
};

const FooterHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-sm font-bold">{children}</h1>;
};

const FooterLink = ({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="text-xs text-white border-b border-b-stone-950 hover:border-b hover:border-b-white w-fit"
    >
      {children}
    </Link>
  );
};

const FooterSocialLink = ({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="inline-block p-2 border border-white rounded-full hover:bg-stone-700"
    >
      {children}
    </Link>
  );
};

export default MainFooter;
