import React from "react";

type Props = {
  placeholder: string;
  secondary?: boolean;
};

const Input = ({ placeholder, secondary }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={`
        placeholder:text-text-color
        text-text-color
        rounded-lg 
        bg-bg-color
        p-5
        w-full
        font-medium
        focus:outline-none
        focus:border-[2px]
        ${
          secondary
            ? "border-[2px] border-white"
            : "border-[1px] border-primary"
        }
      `}
    />
  );
};

export default Input;
