import {memo} from 'react';

const NpmIcon = ({width = 32, height = 32}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width={width}
      height={height}
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
        {' '}
        <g
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <rect
            width="24"
            height="24"
            fill="#D40001"
          ></rect>{' '}
          <path
            fill="#FFF"
            d="M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z"
          ></path>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export default memo(NpmIcon);