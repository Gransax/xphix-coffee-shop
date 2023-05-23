import { StaticImageData } from "next/image";
import { secondFont } from "../font";
import Image from "next/image";
type Props = {
  title: string;
  img: StaticImageData;
  price: number;
  description: string;
};

const MenuCard = ({ title, img, price, description }: Props) => {
  return (
    <div className="rounded-lg bg-container-bg-color p-5 hover:-translate-y-3 transition-all duration-700 cursor-pointer">
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center justify-start gap-3">
          <div className="rounded-full border-[2px] border-dashed border-primary overflow-hidden p-0.5">
            <Image
              src={img}
              alt="menu-item"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-center">
            <span
              className={` text-primary text-2xl lg:text-xl xl:text-2xl ${secondFont.className}`}
            >
              {title}
            </span>
            <span className={` text-text-color font-medium`}>
              {description}
            </span>
          </div>
        </div>

        <div>
          <span
            className="
                pl-8 lg:pl-4 xl:pl-8 pr-3 lg:pr-1 xl:pr-3 h-fit border-l-[2px] 
                border-dashed border-primary text-primary text-2xl lg:text-xl xl:text-2xl font-semibold
              "
          >
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
