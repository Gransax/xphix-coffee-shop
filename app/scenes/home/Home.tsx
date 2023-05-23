"use client";

import Button from "@/app/components/Button";
import React from "react";
import { secondFont } from "@/app/font";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-full h-screen bg-home pt-44 md:p-0" id="home">
      <div className="w-5/6 m-auto flex items-center justify-start h-full">
        <div className="flex flex-col items-start justify-start gap-8 w-full xl:w-2/3 2xl:w-1/2">
          <h3
            className={`font-medium text-2xl xl:text-3xl text-title-color ${secondFont.className}`}
          >
            Welcome To Coffero!
          </h3>
          <h1
            className={` text-5xl xl:text-7xl font-bold text-title-color ${secondFont.className}`}
          >
            Discover Amazing Coffee House & get Energy
          </h1>
          <p className="text-base md:text-lg font-medium leading-7 text-white/80">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour or
            randomized words
          </p>
          <div className="flex items-center justify-start gap-8">
            <Button>Check Menu</Button>
            <Button secondary>Book Table</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
