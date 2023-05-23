"use client";

import { secondFont } from "../font";

type Props = {
  children: React.ReactNode;
};

const SubHeader = ({ children }: Props) => {
  return (
    <h2
      className={`text-4xl md:text-5xl font-medium text-title-color ${secondFont.className}`}
    >
      {children}
    </h2>
  );
};

export default SubHeader;
