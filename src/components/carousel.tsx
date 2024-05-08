import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Carousel({ children: slides }) {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{slides}</div>
      <div>
        <button>
          <div>
            <ChevronLeftIcon />
          </div>
        </button>
        <button>
          <div>
            <ChevronRightIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
