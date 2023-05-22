import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      alt="coffee-logo"
      width={220}
      height={220}
      className="cursor-pointer"
    />
  );
};

export default Logo;
