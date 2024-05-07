import { AboutSectionProps } from "@/utils";
import React from "react";

export default function AboutSection({ header, text }: AboutSectionProps) {
  return (
    <div className="mb-8">
      <div className="relative flex items-center">
        <h2 className="pb-2 pr-2 md:text-3xl text-xl text-primary text-themeYellow">
          {header}
        </h2>
        <div className="flex-grow border-t-2 border-themeYellow"></div>
      </div>
      <p className="text-primary-dark font-normal lg:text-[22px] md:text-[18px] text-[16px] undefined mt-2">
        {text}
      </p>
    </div>
  );
}
