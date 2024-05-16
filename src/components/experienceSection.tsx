import React from "react";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { ExperienceDetailsProps, experienceDetails } from "@/utils";

export default function ExperienceSection() {
  return (
    <>
      <div className="relative flex items-center">
        <h2 className="pb-2 pr-2 md:text-3xl text-xl text-primary text-themeYellow">
          Over The Years
        </h2>
        <div className="flex-grow border-t-2 border-themeYellow"></div>
      </div>
      <Timeline position="alternate-reverse" className="hidden sm:block">
        {experienceDetails.map((exp: ExperienceDetailsProps) => (
          <TimelineItem key={exp.company}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#f6af3b" }} />
              <TimelineConnector sx={{ backgroundColor: "#f6af3b" }} />
            </TimelineSeparator>
            <TimelineContent>
              <time className="font-mono italic text-lg">{exp.years}</time>
              <div className="text-lg font-bold">{exp.jobTitle}</div>
              <div className="text-sm font-bold mb-2">{exp.company}</div>
              <div className="flex flex-col items-start">
                {exp.experienceItems.map((item) => (
                  <span className="flex justify-center" key={item}>
                    <span className="mt-1.5">
                      <svg
                        className="w-[12px] h-[12px] fill-[#ffffff]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                      </svg>
                    </span>
                    <p className="text-left ml-4">{item}</p>
                  </span>
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Timeline
        className="block sm:hidden p-0"
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            margin: 0,
          },
        }}
      >
        {experienceDetails.map((exp: ExperienceDetailsProps) => (
          <TimelineItem key={exp.company}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#f6af3b" }} />
              <TimelineConnector sx={{ backgroundColor: "#f6af3b" }} />
            </TimelineSeparator>
            <TimelineContent>
              <time className="font-mono italic text-lg">{exp.years}</time>
              <div className="text-lg font-bold">{exp.jobTitle}</div>
              <div className="text-sm font-bold mb-2">{exp.company}</div>
              <div className="flex flex-col items-start">
                {exp.experienceItems.map((item) => (
                  <span className="flex justify-center" key={item}>
                    <span className="mt-1.5">
                      <svg
                        className="w-[12px] h-[12px] fill-[#ffffff]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                      </svg>
                    </span>
                    <p className="text-left ml-4">{item}</p>
                  </span>
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
