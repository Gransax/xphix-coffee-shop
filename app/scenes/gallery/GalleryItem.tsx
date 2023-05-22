import { StaticImageData } from "next/image";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { secondFont } from "@/app/font";

type Props = {
  title: string;
  img: StaticImageData;
};

const GalleryItem = ({ title, img }: Props) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <Image
        alt="gallery-img"
        src={img}
        width={600}
        height={600}
        className="object-contain"
      />
      <div
        className="
            scale-y-0 
            group-hover:scale-y-100 
            transition duration-500 
            absolute 
            inset-0 
            z-10 
            rounded-xl 
            opacity-80 
            bg-primary 
            h-[95%] w-[95%] 
            m-auto"
      />
      <div
        className="
            delay-100 
            opacity-0 
            group-hover:opacity-100 
            translate-y-32
            group-hover:translate-y-0 
            transition 
            duration-700 
            absolute 
            inset-0 
            z-20 
            w-fit 
            h-fit 
            bg-white 
            rounded-full 
            p-3 
            m-auto
            cursor-pointer
            "
      >
        <AiOutlinePlus size={32} className="text-primary" />
      </div>
      <div
        className={`
            delay-100
            opacity-0 
            group-hover:opacity-100 
            translate-y-4
            group-hover:translate-y-0 
            transition 
            duration-700 
            absolute 
            rounded-xl 
            bottom-8 
            inset-x-0 
            w-5/6 
            z-30 
            m-auto 
            bg-black 
            py-6 
            px-12 
            flex 
            items-center 
            justify-center 
            ${secondFont.className}
        `}
      >
        <span className="text-2xl text-white text-center w-full">{title}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
