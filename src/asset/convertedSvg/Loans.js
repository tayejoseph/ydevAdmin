import * as React from "react";

function SvgLoans(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 13a2 2 0 01-2 2H5l-4 4V3a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLoans;
