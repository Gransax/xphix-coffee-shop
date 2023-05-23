import React from "react";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
  screenSize?: boolean;
  className?: string;
  name?: string;
};

const Section = ({
  children,
  screenSize = true,
  transparent,
  className,
  name,
}: Props) => {
  return (
    <div
      className={`${className} w-full  py-24 ${
        transparent ? "bg-bg-transparent" : "bg-bg-color"
      } ${screenSize ? "h-fit xl:h-screen" : "h-fit"}`}
      id={`${name}`}
    >
      {children}
    </div>
  );
};

export default Section;
