"use client";

import Button from "@/app/components/Button";
import React from "react";
import { secondFont } from "@/app/font";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-full h-screen bg-home">
      <div className="w-5/6 m-auto flex items-center justify-start h-full">
        <div className="flex flex-col items-start justify-start gap-8 w-1/2">
          <h3
            className={`font-medium text-3xl text-title-color ${secondFont.className}`}
          >
            Welcome To Coffero!
          </h3>
          <h1
            className={`text-7xl font-bold text-title-color ${secondFont.className}`}
          >
            Discover Amazing Coffee House & get Energy
          </h1>
          <p className="text-lg font-medium leading-7 text-white/80">
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
