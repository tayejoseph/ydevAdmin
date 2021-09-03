import * as React from "react";

function SvgDelete(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#Delete_svg__clip0)"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.913 3.74H13.13M5.029 3.74V2.492a1.246 1.246 0 011.246-1.246h2.493a1.246 1.246 0 011.246 1.246v1.246m1.87 0v8.725a1.246 1.246 0 01-1.247 1.246H4.406a1.247 1.247 0 01-1.247-1.246V3.739h8.725zM6.275 6.855v3.74M8.768 6.855v3.74" />
      </g>
      <defs>
        <clipPath id="Delete_svg__clip0">
          <path
            fill="#fff"
            transform="translate(.043)"
            d="M0 0h14.957v14.957H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgDelete;
