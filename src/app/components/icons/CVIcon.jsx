import {memo} from 'react';

const CVIcon = ({color = '#ffffff', height = 64, width = 64}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      id="a"
    >
      <g id="b">
        <line
          id="c"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="28.4318"
          y1="12.9115"
          x2="30.5405"
          y2="12.9115"
        />

        <line
          id="d"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="28.4318"
          y1="15.0202"
          x2="29.8024"
          y2="15.0202"
        />

        <line
          id="e"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="28.4318"
          y1="12.9115"
          x2="28.4318"
          y2="17.1289"
        />
      </g>

      <path
        id="f"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M23.5849,17.129v-4.2174h.6853c1.1598,0,2.1087,.9489,2.1087,2.1087h0c0,1.1598-.9489,2.1087-2.1087,2.1087h-.6853Z"
      />

      <g id="g">
        <path
          id="h"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          d="M18.9045,16.8963v-4.2174h1.3707c.7908,0,1.4234,.6326,1.4234,1.4234s-.6326,1.4234-1.4234,1.4234h-1.3707"
        />
      </g>

      <path
        id="i"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16.6627,35.6723h7.6508"
      />

      <path
        id="j"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16.6921,32.6919h13.7214"
      />

      <path
        id="k"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16.6921,29.5563h16.1546"
      />

      <rect
        id="l"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        x="12.8772"
        y="9.2878"
        width="23.3737"
        height="30.0519"
        rx="2.0054"
        ry="2.0054"
      />

      <path
        id="m"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M13.2512,5.4749H7.0302v6.3715"
      />

      <path
        id="n"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M34.7237,5.4749h6.3214v6.3715"
      />

      <path
        id="o"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M41.0451,36.2288v6.2963h-6.3214"
      />

      <path
        id="p"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M13.2512,42.5251H7.0302v-6.2963"
      />

      <path
        id="q"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M5.5,24.0878H42.5"
      />

      <path
        id="r"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16.6627,20.7264h16.1546"
      />

      <path
        id="s"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16.6921,25.919h16.1546"
      />
    </svg>
  );
};

export default memo(CVIcon);
