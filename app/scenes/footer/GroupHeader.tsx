import { secondFont } from "@/app/font";

type Props = {
  children: React.ReactNode;
};

const GroupHeader = ({ children }: Props) => {
  return (
    <div className="w-fit flex flex-col gap-6">
      <span
        className={`font-medium text-white text-3xl ${secondFont.className}`}
      >
        {children}
      </span>
      <div className="flex items-center justify-start gap-2 w-full">
        <hr className="border-primary border-b-[2px] rounded-3xl w-[15%]" />
        <hr className="border-primary border-b-[2px] rounded-3xl w-[30%]" />
      </div>
    </div>
  );
};

export default GroupHeader;
