import * as React from 'react'

function SvgSecondaryCreditCard(props) {
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
        fill="url(#SecondaryCreditCard_svg__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="SecondaryCreditCard_svg__paint0_linear"
          x1={156.817}
          y1={80.938}
          x2={-282.645}
          y2={-174.119}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1463E3" />
          <stop offset={1} stopColor="#1669F0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgSecondaryCreditCard
