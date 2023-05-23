"use client";

import Header from "@/app/components/Header";
import MenuCard from "@/app/components/MenuCard";
import Section from "@/app/components/Section";
import SubHeader from "@/app/components/SubHeader";
import { menu } from "@/app/data";
import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <Section name="menu" transparent>
      <div className="w-5/6 m-auto flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header>Our Menu</Header>
            <SubHeader>Let&apos;s Check Our Menu</SubHeader>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
            {menu.map((menu) => (
              <MenuCard
                key={`menu-${menu.id}`}
                title={menu.title}
                img={menu.img}
                price={menu.price}
                description={menu.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Menu;
