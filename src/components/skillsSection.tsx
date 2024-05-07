import { TechIconsProps, techIcons } from "@/utils";
import Image from "next/image";
import React from "react";

export default function SkillsSection() {
  return (
    <div className="mb-8">
      <div className="relative flex items-center">
        <h2 className="pb-2 pr-2 md:text-3xl text-xl text-primary text-themeYellow">
          My Skills
        </h2>
        <div className="flex-grow border-t-2 border-themeYellow"></div>
      </div>
      <div className="flex flex-wrap sm:gap-4 gap-2 w-fit mt-2">
        {techIcons.map((icon) => (
          <div className="w-38 h-30 bg-themeZinc flex items-center justify-center rounded-md sm:p-4 p-1 shadow-md">
            <Image src={icon.source} alt={icon.alt} width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  );
}
