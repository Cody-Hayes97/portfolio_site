import { ProjectDetailsProps } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  title,
  description,
  iconSrc,
  id
}: ProjectDetailsProps) {
  return (
    <>
      <div className="md:w-4/4">
        <div className="flex rounded-lg h-full bg-themeGray p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
              <Image src={iconSrc} alt={title} width={32} height={32} />
            </div>
            <p className="font-medium text-primary-dark lg:text-[20px] text-[16px] undefined">
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-primary-dark text-[14px] lg:text-[16px] undefined">
              {description}
            </p>
            <Link href={`/projects/${id}`}>
              <button className="mt-3 text-white hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
