import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        opacity={0.5}
        stroke="#08225D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM19 19l-4.35-4.35" />
      </g>
    </svg>
  );
}

export default SvgSearch;
