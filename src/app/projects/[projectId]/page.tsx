"use client";
import Carousel from "@/components/carousel";
import { ProjectDetailsProps, projectDetails } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  const [project, setProject] = useState<ProjectDetailsProps>();

  useEffect(() => {
    const currentProject = projectDetails.find(
      (item) => item.id === parseInt(params.projectId)
    );
    setProject(currentProject);
  }, [params]);

  return (
    <>
      <section>
        <div className="flex  flex-col justify-between mx-auto p-2 max-w-screen-xl">
          <div className="2xl:container md:mx-auto p-8">
            <div className="flex justify-between items-center">
              <h1 className="sm:text-4xl text-2xl leading-10 font-bold">
                {project?.title}
              </h1>
              <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                <span>❮</span>
                <Link href="/">Back</Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 mt-10 gap-4">
              <span className="sm:text-lg text-md font-bold min-w-2.5 self-center">
                About the project
              </span>
              <div className="col-span-4 sm:text-lg text-md flex flex-col">
                <span className="self-center">{project?.description}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 mt-10 gap-4">
              <span className="sm:text-lg text-md font-bold self-center">
                Technology Stack
              </span>
              <div className="grid grid-cols-3 gap-4 col-span-2 md:col-span-4">
                {project?.technologiesIcons?.map((icon) => (
                  <div
                    key={icon}
                    className="w-38 h-30 bg-themeZinc flex items-center justify-center rounded-md sm:p-4 p-1 shadow-md"
                  >
                    <Image alt={icon} width={48} height={48} src={icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center ">
          <div className="flex-grow border-t-2 border-themeYellow"></div>
          <h2 className="pb-2 pr-4 pl-4 md:text-3xl text-xl text-primary text-themeYellow">
            Preview
          </h2>
          <div className="flex-grow border-t-2 border-themeYellow"></div>
        </div>
        <div className="flex justify-center flex-col mx-auto max-w-6xl mb-6">
          <Carousel>
            {project?.projectImages?.map((img) => (
              <img src={img} key={img} />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
