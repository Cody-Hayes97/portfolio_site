import React, { PropsWithChildren, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Carousel({ children: slides }: PropsWithChildren) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    slides &&
    Array.isArray(slides) &&
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    slides &&
    Array.isArray(slides) &&
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-x-hidden relative ">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center p-4 ">
        {curr !== 0 && (
          <button onClick={prev}>
            <div className=" bg-themeZinc rounded-full p-2 shadow absolute left-2">
              <ChevronLeftIcon fontSize="large" className="scale-150" />
            </div>
          </button>
        )}
        {slides && Array.isArray(slides) && curr !== slides.length - 1 && (
          <button onClick={next}>
            <div className=" bg-themeZinc rounded-full p-2 shadow absolute right-2">
              <ChevronRightIcon fontSize="large" className="scale-150" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
