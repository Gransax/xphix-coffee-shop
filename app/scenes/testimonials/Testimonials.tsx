"use client";
import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import { testimonials } from "@/app/data";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import Section from "@/app/components/Section";

var settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  draggable: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};
type Props = {};

const Testimonials = (props: Props) => {
  return (
    <Section screenSize={false} name="testimonials">
      <div className="w-5/6 m-auto flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header>Testimonials</Header>
            <SubHeader>What Client Say&apos;s</SubHeader>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-8 w-full">
            {testimonials.map(({ id, img, title, service, description }) => (
              <TestimonialCard
                key={`testimonial-${id}`}
                img={img}
                title={title}
                service={service}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
