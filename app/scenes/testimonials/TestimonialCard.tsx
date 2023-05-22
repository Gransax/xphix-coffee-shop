"use client";
import { secondFont } from "@/app/font";
import Image, { StaticImageData } from "next/image";
import { BsFillStarFill } from "react-icons/bs";

type Props = {
  img: StaticImageData;
  title: string;
  service: string;
  description: string;
};

const TestimonialCard = ({ img, title, service, description }: Props) => {
  return (
    <div className="flex flex-col items-start justify-center gap-12">
      <div className="rounded-lg bg-container-bg-color text-text-color font-medium px-14 text-justify text-lg leading-8 py-16">
        {description}
      </div>
      <div className="flex items-center justify-start gap-4">
        <div className="rounded-full overflow-hidden border-[2px] border-primary border-dashed p-0.5">
          <Image
            alt="avatar"
            src={img}
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <span
            className={`text-2xl leading-5 font-medium text-white ${secondFont.className}`}
          >
            {title}
          </span>
          <span className="text-secondary">{service}</span>
          <span className="text-primary flex items-center justify-start gap-1">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
