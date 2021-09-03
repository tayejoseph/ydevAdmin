import * as React from "react";

function SvgEdit(props) {
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
        clipPath="url(#Edit_svg__clip0)"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.855 2.493H2.493a1.246 1.246 0 00-1.246 1.246v8.725a1.246 1.246 0 001.246 1.246h8.725a1.246 1.246 0 001.246-1.246V8.1" />
        <path d="M11.529 1.558a1.322 1.322 0 011.87 1.87l-5.92 5.92-2.494.623.624-2.493 5.92-5.92z" />
      </g>
      <defs>
        <clipPath id="Edit_svg__clip0">
          <path fill="#fff" d="M0 0h14.957v14.957H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgEdit;
