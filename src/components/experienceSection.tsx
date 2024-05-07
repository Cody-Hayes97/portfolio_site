import React from "react";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

export default function ExperienceSection() {
  return (
    <>
      <div className="relative flex items-center">
        <h2 className="pb-2 pr-2 md:text-3xl text-xl text-primary text-themeYellow">
          Over The Years
        </h2>
        <div className="flex-grow border-t-2 border-themeYellow"></div>
      </div>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <time className="font-mono italic text-lg">2021 - 2024</time>
            <div className="text-lg font-black">Front End Developer - II</div>
            <div className="text-sm font-black">Medical Solutions, LLC</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
