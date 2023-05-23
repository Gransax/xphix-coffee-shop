"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import Section from "@/app/components/Section";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <Section>
      <div className="w-5/6 m-auto flex items-center justify-start h-full">
        <div
          className="
            flex flex-col xl:flex-row gap-24 xl:gap-8 items-start justify-center
            xl:items-center xl:justify-start h-full
          "
        >
          <div className="flex-1">
            <div className="relative aspect-square z-10 lg:w-5/6 h-[400px] md:h-[600px]  ml-8">
              <div className="absolute -left-8 -bottom-8 bg-primary w-full h-[410px] md:h-[610px] " />
              <Image alt="about" src="/images/about-img.jpg" fill />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col items-start justify-center gap-8 text-text-color">
            <Header>About Us</Header>
            <SubHeader>
              Fresh Quality And Organic Tasty Coffee House For You
            </SubHeader>

            <p className="font-medium leading-7 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              quisquam nesciunt, exercitationem amet illum, nulla magnam iste
              sunt quae asperiores vero ipsam quod! Autem placeat voluptas
              temporibus sint minus! Facere. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo veritatis voluptate in
              officia accusamus maxime beatae necessitatibus deserunt adipisci
              soluta omnis magni, animi dignissimos illum quas similique a, nemo
              assumenda?
            </p>
            <div className="flex flex-col items-start justify-center gap-2 font-medium mb-4">
              <div className="flex items-center justify-start gap-2">
                <GoCheck /> <span>At vero eos et accusamus et iusto odio</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <GoCheck />
                <span>Established fact that a reader will be distracted</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <GoCheck />
                <span>Sed ut perspiciatis ubde omnis iste natus sit</span>
              </div>
            </div>
            <Button>Oue Exports</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
