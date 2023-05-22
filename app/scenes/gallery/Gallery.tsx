"use client";

import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import { gallery } from "@/app/data";
import GalleryItem from "./GalleryItem";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="w-full py-32 bg-bg-color">
      <div className="w-5/6 m-auto">
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header> Gallery </Header>
            <SubHeader> Our Photo Gallery </SubHeader>
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-8">
            {gallery.map(({ id, img, title }) => (
              <GalleryItem key={`gallery-${id}`} title={title} img={img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
