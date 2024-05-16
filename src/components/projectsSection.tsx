import React from "react";
import ProjectCard from "./projectCard";
import { projectDetails } from "@/utils";

export default function ProjectsSection() {
  return (
    <div className="mb-8">
      <div className="relative flex items-center">
        <h2 className="pb-2 pr-2 md:text-3xl text-xl text-primary text-themeYellow">
          Projects I&apos;ve Worked On
        </h2>
        <div className="flex-grow border-t-2 border-themeYellow"></div>
      </div>
      <section className="mt-2">
        <div className="md:grid md:grid-cols-3 flex flex-col justify-between gap-4">
          {projectDetails.map((deets) => (
            <ProjectCard
              title={deets.title}
              description={deets.description}
              iconSrc={deets.iconSrc}
              id={deets.id}
              key={deets.id}
              technologiesIcons={deets.technologiesIcons}
              projectImages={deets.projectImages}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
