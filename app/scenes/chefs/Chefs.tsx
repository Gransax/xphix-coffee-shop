"use client";

import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import { chefs } from "@/app/data";
import ChefCard from "./ChefCard";
import Section from "@/app/components/Section";

type Props = {};

const Chefs = (props: Props) => {
  return (
    <Section>
      <div className="w-5/6 m-auto flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header> Chefs </Header>
            <SubHeader> Meet Our Experts </SubHeader>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-8">
            {chefs.map(({ id, img, title, name }) => (
              <ChefCard
                key={`team-${id}`}
                title={title}
                img={img}
                name={name}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Chefs;
