import {memo} from 'react';

const DownloadIcon = ({height = 32, width = 32, className = ''}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
        <path
          className={className}
          d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.6103 14.671 11.8011 14.75 12 14.75C12.1989 14.75 12.3897 14.671 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893V7Z"
          fill="#1C274C"
        ></path>
        <path
          d="M8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
          className={className}
          fill="#1C274C"
        ></path>
      </g>
    </svg>
  );
};

export default memo(DownloadIcon);
