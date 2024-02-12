import * as React from "react";
const Funnel = ({ topColor, bottomColor, opacity = 0.29 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 259 146"
    fill="none"
  >
    <path
      d="M259 109.159L259 146L0 146L3.22075e-06 109.159L20.8348 104.267C71.7436 92.3141 110.781 51.411 120.347 3.13734e-06L135.941 4.50063e-06C146.215 51.4987 185.702 92.2044 236.865 104.039L259 109.159Z"
      fill="url(#paint0_linear_364_1947)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_364_1947"
        x1="129.5"
        y1="118.5"
        x2="129.5"
        y2="8.19564e-06"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={bottomColor} />
        <stop offset="1" stopColor={topColor} stopOpacity={opacity} />
      </linearGradient>
    </defs>
  </svg>
);
export default Funnel;
