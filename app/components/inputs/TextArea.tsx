import React from "react";

type Props = {
  placeholder: string;
  className?: string;
};

const TextArea = ({ placeholder, className }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className={`
        bg-bg-color
        ring-1
        ring-primary
        rounded-lg 
        p-5
        font-medium
        focus:outline-none
        focus:ring-2
        ${className}
        `}
    />
  );
};

export default TextArea;
