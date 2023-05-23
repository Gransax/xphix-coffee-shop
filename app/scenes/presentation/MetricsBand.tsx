"use client";
import { metrics } from "@/app/data";
import { secondFont } from "@/app/font";
import Image from "next/image";

type Props = {};

const MetricsBand = (props: Props) => {
  return (
    <div className="w-full m-auto bg-container-bg-color py-32">
      <div className="w-5/6 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 items-center ">
        {metrics.map(({ id, title, value, img }) => (
          <div
            key={`metric-${id}`}
            className="flex flex-col items-center justify-center gap-12"
          >
            <div>
              <Image alt="metric-icon" src={img} width={80} height={80} />
            </div>
            <span className="text-white text-6xl font-bold">{value}</span>
            <span
              className={` text-primary text-2xl font-medium ${secondFont.className}`}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsBand;
