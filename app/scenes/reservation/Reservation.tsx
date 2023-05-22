import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { FiBookmark } from "react-icons/fi";
import Image from "next/image";
type Props = {};

const Reservation = (props: Props) => {
  return (
    <div className="w-full h-[100vh] bg-bg-color ">
      <div className="relative w-5/6 m-auto flex items-center justify-center  bg-container-bg-color p-12">
        <Image
          alt="leaf-shape"
          src={"/images/shape-2.png"}
          width={200}
          height={200}
          className="absolute top-4 right-4 opacity-70"
        />
        <Image
          alt="leaf-shape"
          src={"/images/shape-3.png"}
          width={200}
          height={200}
          className="absolute bottom-4 left-4 opacity-70"
        />

        <div className="flex flex-col items-center justify-center gap-12 w-full z-10">
          <div className="flex flex-col items-center justify-center text-center w-full gap-2">
            <Header> Reservation </Header>
            <SubHeader> Book A Table </SubHeader>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <form className="grid grid-cols-3 gap-8 w-full">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Your Phone" />
              <Input placeholder="Data Ex DD/MM/YY" />
              <Input placeholder="Time Ex 01:25PM" />
              <Input placeholder="Number Of People" />
              <TextArea className="col-span-3" placeholder="Your Message" />
            </form>
            <Button>
              <div className="flex items-center justify-center text-center gap-2">
                <FiBookmark className="font-semibold" /> Book A Table
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
