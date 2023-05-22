import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  size?: number;
  secondary?: boolean;
};

const IconButton = ({ icon: Icon, size, secondary }: Props) => {
  return (
    <div
      className={`
          w-fit rounded-full  bg-black hover:bg-primary cursor-pointer
          ${secondary ? "border-[3px] border-primary p-3" : "p-4"} 
        `}
    >
      <Icon size={size} className="text-white" />
    </div>
  );
  1;
};

export default IconButton;
