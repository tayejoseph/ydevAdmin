import * as React from 'react'

function SvgPrimaryCreditCard(props) {
  return (
    <svg
      viewBox="0 0 186 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={186}
        height={110}
        rx={14}
        fill="url(#PrimaryCreditCard_svg__paint0_linear)"
      />
      <path
        d="M62 0h91v51c0 11.046-8.954 20-20 20H82c-11.046 0-20-8.954-20-20V0z"
        fill="#fff"
        fillOpacity={0.03}
      />
      <path
        d="M146 110H62V66c0-11.046 8.954-20 20-20h44c11.046 0 20 8.954 20 20v44z"
        fill="#fff"
        fillOpacity={0.03}
      />
      <path
        d="M104 110H20V66c0-11.046 8.954-20 20-20h44c11.046 0 20 8.954 20 20v44z"
        fill="#fff"
        fillOpacity={0.03}
      />
      <defs>
        <linearGradient
          id="PrimaryCreditCard_svg__paint0_linear"
          x1={156.817}
          y1={80.938}
          x2={-282.645}
          y2={-174.119}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#021F4F" />
          <stop offset={1} stopColor="#1669F0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgPrimaryCreditCard
