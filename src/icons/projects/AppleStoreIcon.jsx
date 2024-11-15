import {memo} from 'react';

const AppleStoreIcon = ({width = 32, height = 32}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000000"
      width={width}
      height={height}
      fill="none"
    >
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
      ></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <line
          x1="24.03"
          y1="39.07"
          x2="22.37"
          y2="41.97"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="34.86"
          y1="20.12"
          x2="26.05"
          y2="35.53"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="34.19"
          y1="28.31"
          x2="42.17"
          y2="41.97"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="29.39"
          y1="20.12"
          x2="32.16"
          y2="24.84"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="19.54"
          y1="35.53"
          x2="34.39"
          y2="35.53"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="44.71"
          y1="35.53"
          x2="38.41"
          y2="35.53"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <rect
          x="10.23"
          y="10.23"
          width="43.55"
          height="43.55"
          rx="10.31"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></rect>
      </g>
    </svg>
  );
};

export default memo(AppleStoreIcon);
