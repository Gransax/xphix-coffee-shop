"use client";

import FeaturesCard from "@/app/components/FeaturesCard";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import SubHeader from "@/app/components/SubHeader";
import { features } from "@/app/data";
type Props = {};

const Features = (props: Props) => {
  return (
    <Section name="features">
      <div className="w-5/6 m-auto flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header> Features </Header>
            <SubHeader> Our Best Features </SubHeader>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature) => (
              <FeaturesCard
                key={`feature-${feature.id}`}
                title={feature.title}
                img={feature.img}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
