"use client";
import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import { offer as offers } from "@/app/data";
import React, { useState } from "react";
import OfferCard from "./OfferCard";
import Slider from "react-slick";

type Props = {};

const Offer = (props: Props) => {
  const [selected, setSelected] = useState(1);

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full py-32 bg-bg-transparent">
      <div className="w-5/6 m-auto ">
        <div className="flex flex-col items-center justify-center text-center w-full gap-2">
          <Header> Offer </Header>
          <SubHeader> Special Offer For You </SubHeader>
        </div>
        <Slider {...settings} className="pb-8 mt-16 " dotsClass={`custom_dot`}>
          {offers.map(({ id, img, title, discount, description }) => (
            <OfferCard
              key={`offer-${id}`}
              img={img}
              title={title}
              discount={discount}
              description={description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
