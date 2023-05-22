"use client";

import { secondFont } from "../font";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <h3
        className={`text-4xl font-medium text-primary ${secondFont.className}`}
      >
        {children}
      </h3>
    </div>
  );
};

export default Header;
