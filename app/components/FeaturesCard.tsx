"use client";

import Image from "next/image";
import { secondFont } from "../font";

type Props = {
  img: string;
  title: string;
  description: string;
};

const FeaturesCard = ({ img, title, description }: Props) => {
  return (
    <div className="bg-container-bg-color rounded-md p-3 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
      <div className="relative p-3 border-[2px] border-primary rounded-lg flex flex-col gap-8 h-full">
        <Image alt="icon" src={img} width={70} height={70} />
        <Image
          alt="icon"
          src={"/images/shape.png"}
          width={200}
          height={200}
          className="absolute right-4 top-4 opacity-40"
        />
        <div className="flex flex-col items-start justify-center gap-2 ">
          <span
            className={`text-title-color font-medium text-2xl ${secondFont.className}`}
          >
            {title}
          </span>
          <span className=" text-text-color font-medium text-justify">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
