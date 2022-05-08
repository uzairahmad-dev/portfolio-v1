import * as React from 'react';
import { SVGProps } from 'react';

const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="m13 7 5 5m0 0-5 5m5-5H6" />
  </svg>
);

export default SvgRightArrow;
