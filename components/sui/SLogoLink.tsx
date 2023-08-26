import Link from "next/link";
import SLogo from "./SLogo";

const SLogoLink = () => {
  return (
    <Link href="/" className="inline-block">
      <SLogo />
    </Link>
  );
};

export default SLogoLink;
