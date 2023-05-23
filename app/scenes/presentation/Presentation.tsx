"use client";

import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import Image from "next/image";
import { presentations } from "@/app/data";
import { secondFont } from "@/app/font";
import MetricsBand from "./MetricsBand";

type Props = {};

const Presentation = (props: Props) => {
  return (
    <div className="w-full bg-bg-color pt-24">
      <div className="w-full xl:h-[100vh]">
        <div className="w-5/6 m-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
          {/* Content */}
          <div className="flex-[1] flex flex-col items-start justify-start gap-4 text-text-color">
            <Header>Why Choose Us</Header>
            <SubHeader>
              Coffero Most Out Of Your Favorite & Tasty Coffee House
            </SubHeader>
            <p className="leading-7 my-8 text-justify text-sm xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id
              at esse quisquam animi sapiente accusantium, modi reprehenderit ab
              illum cum consequatur maxime ullam vel, cumque nisi voluptatem
              ipsum earum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos asperiores magni blanditiis obcaecati veniam adipisci
              excepturi veritatis aspernatur ducimus reprehenderit, commodi
              architecto inventore natus tempora. Culpa dolorem impedit tempora
              iusto?
            </p>

            <div className="flex flex-col items-start justify-start gap-8">
              {presentations.map(({ id, img, title, description }) => (
                <div
                  key={`presentation-${id}`}
                  className="
                    flex
                    items-start
                    justify-start
                    gap-4
                "
                >
                  <div className="border-[2px] border-dashed rounded-full border-primary p-2">
                    <Image
                      src={img}
                      alt="presentation-icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span
                      className={`text-2xl font-medium text-title-color ${secondFont.className}`}
                    >
                      {title}
                    </span>
                    <span className="font-medium leading-7  text-justify">
                      {description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="flex-[1] flex justify-end">
            <Image
              src="/images/choose.jpg"
              alt="cho0se-img"
              width={700}
              height={700}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="pt-24" />
      <MetricsBand />
    </div>
  );
};

export default Presentation;
