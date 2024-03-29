import * as React from "react";

function SvgDoc(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.314 0c.193 0 .342.158.342.345V2.76a2.512 2.512 0 002.48 2.505c.565 0 1.01.008 1.352.008l.126-.001c.228-.002.536-.007.802-.007.185 0 .334.15.334.338v6.03c0 1.86-1.493 3.367-3.334 3.367H3.505C1.575 15 0 13.418 0 11.467V3.382C0 1.523 1.5 0 3.349 0h3.965zm.795 9.675h-4.04a.557.557 0 00-.557.555c0 .307.253.563.557.563h4.04a.564.564 0 00.557-.563.557.557 0 00-.557-.555zm-1.53-3.75H4.07a.564.564 0 00-.557.563c0 .307.253.554.557.554h2.51a.557.557 0 00.557-.554.564.564 0 00-.557-.563zM8.738.68c0-.324.388-.484.61-.251l2.99 3.14a.358.358 0 01-.255.606c-.61.002-1.33 0-1.847-.006a1.513 1.513 0 01-1.498-1.512V.678z"
        fill="#7FCA9F"
      />
    </svg>
  );
}

export default SvgDoc;
