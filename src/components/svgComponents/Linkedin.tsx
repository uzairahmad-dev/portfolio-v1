import * as React from 'react';

const SvgLinkedin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 22 21"
    {...props}
  >
    <g
      transform="translate(-1 -1)"
      fill="none"
      stroke="#EAFCFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path
        data-name="Path 3"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
      />
      <path data-name="Rectangle 3" d="M2 9h4v12H2z" />
      <circle
        data-name="Ellipse 1"
        cx={2}
        cy={2}
        r={2}
        transform="translate(2 2)"
      />
    </g>
  </svg>
);

export default SvgLinkedin;
