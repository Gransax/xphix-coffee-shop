import Button from "@/app/components/Button";
import { offer } from "@/app/data";
import { secondFont } from "@/app/font";
import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  title: string;
  discount: string;
  description: string;
};

const OfferCard = ({ img, title, discount, description }: Props) => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-center ">
      <Image
        alt="offer-img"
        src={img}
        width={1000}
        height={1000}
        className="rounded-lg flex-[5] "
      />
      <div className="flex-[3] flex items-center justify-end -mt-8 md:mt-16 xl:mt-0 xl:-ml-32">
        <div className=" bg-container-bg-color p-3 rounded-xl  z-10 h-5/6">
          <div className="rounded-lg border-[2px] border-dashed border-primary px-8 py-16 flex flex-col justify-center gap-8 h-full">
            <span className={`text-3xl text-white ${secondFont.className}`}>
              Cappuccino Arabica
            </span>
            <span className={`text-2xl text-white ${secondFont.className}`}>
              Get 40% Offer
            </span>
            <p className="text-text-color font-medium leading-7 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              eveniet incidunt! Eum perferendis maiores alias porro delectus
              nihil odit. Corporis eos aspernatur molestiae beatae minus
              dignissimos sequi amet ea exercitationem.
            </p>
            <div>
              <Button>Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
