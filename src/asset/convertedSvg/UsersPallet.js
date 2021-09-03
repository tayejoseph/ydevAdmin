import * as React from "react";

function SvgUsersPallet(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity={0.1} cx={31} cy={31} r={31} fill="#C3272E" />
      <path
        d="M38.374 43.875v-2.75a5.5 5.5 0 00-5.5-5.5h-11a5.5 5.5 0 00-5.5 5.5v2.75M27.375 30.125a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM46.626 43.875v-2.75a5.5 5.5 0 00-4.125-5.321M37 19.304a5.5 5.5 0 010 10.656"
        stroke="#C3272E"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgUsersPallet;
