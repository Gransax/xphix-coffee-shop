import IconButton from "@/app/components/IconButton";
import { secondFont } from "@/app/font";
import Image, { StaticImageData } from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

type Props = {
  title: string;
  img: StaticImageData;
  name: string;
};

const ChefCard = ({ title, img, name }: Props) => {
  return (
    <div
      className="
            relative group rounded-tr-md rounded-tl-md overflow-hidden
            flex flex-col items-center justify-center gap-8 border-b-[4px] border-primary bg-container-bg-color pb-6
            hover:-translate-y-2 transition-all duration-500
        "
    >
      <div
        className="
            absolute flex flex-col items-end justify-start gap-2 top-2 right-2
            opacity-0 
            group-hover:opacity-100 
            translate-x-2
            group-hover:translate-x-0 
            transition 
            duration-500
        "
      >
        <IconButton icon={FaFacebookF} />
        <IconButton icon={FaTwitter} />
        <IconButton icon={FaLinkedinIn} />
        <IconButton icon={FaYoutube} />
      </div>
      <Image alt="team-picture" src={img} width={400} height={400} />
      <div className="flex flex-col items-center justify-center gap-2">
        <span
          className={`${secondFont.className} text-white text-3xl font-medium`}
        >
          {name}
        </span>
        <span className="text-primary font-medium text-xl">{title}</span>
      </div>
    </div>
  );
};

export default ChefCard;
