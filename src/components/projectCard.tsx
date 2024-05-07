import { ProjectDetailsProps } from "@/utils";
import React from "react";

export default function ProjectCard({
  title,
  description,
}: ProjectDetailsProps) {
  return (
    <>
      <div className="md:w-4/4">
        <div className="flex rounded-lg h-full bg-themeGray p-8 flex-col">
          <div className="flex items-center mb-3">
            <p className="font-medium text-primary-dark lg:text-[20px] text-[16px] undefined">
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-primary-dark text-[14px] lg:text-[16px] undefined">
              {description}
            </p>
            <button className="mt-3 text-white hover:text-blue-600 inline-flex items-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
