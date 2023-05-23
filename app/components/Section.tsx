"use client";
import { motion } from "framer-motion";
import useNavigation from "../hooks/useNavigation";

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
  const { set } = useNavigation();
  return (
    <motion.div
      onViewportEnter={() => {
        set(name || "home");
      }}
      className={`${className} w-full  py-24 ${
        transparent ? "bg-bg-transparent" : "bg-bg-color"
      } ${screenSize ? "h-fit xl:h-screen" : "h-fit"}`}
      id={`${name}`}
    >
      {children}
    </motion.div>
  );
};

export default Section;
