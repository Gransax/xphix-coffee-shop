"use client";

type Props = {
  children: React.ReactNode;
  secondary?: boolean;
  expand?: boolean;
};

const Button = ({ children, secondary, expand }: Props) => {
  return (
    <button
      type="button"
      className={`
        rounded-lg
        text-md
        text-center
        border-[2px]
        border-primary
        font-medium
        py-5
        px-6
        transition-all
        duration-300
        hover:bg-transparent
        hover:text-white-700
        hover:opacity-80
        ${secondary ? "text-white bg-transparent" : "text-white bg-primary"}
        ${expand && "w-full"}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
