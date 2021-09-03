import * as React from 'react'

function SvgUsers(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 10h-4l-3 9L8 1l-3 9H1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgUsers
