import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconPills: FC<SVGAttributes<IconPropsType>> = ({
  className,
  width = "w-5",
  height = "h-5",
}) => (
  <svg
    className={clsx(className, width, height)}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_352_5754)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.93243 9.08904L3.58247 8.32238L3.5783 8.31888L4.76109 6.9093L13.9536 14.6227L12.1392 16.7851L12.1392 16.785L12.1343 16.7909L12.1054 16.8257C10.0304 19.2986 6.28385 19.6108 3.73239 17.4699C1.18094 15.329 0.837859 11.5851 2.91289 9.1122L2.93243 9.08904ZM15.3625 14.4995L14.7197 15.2655L12.9053 17.4279L12.8715 17.4684C10.4306 20.3773 6.05113 20.721 3.08961 18.2359C0.137299 15.7587 -0.291352 11.4055 2.12414 8.49662L2.14685 8.46941L2.1697 8.44233L2.16947 8.44214L2.81226 7.6761L3.99504 6.26651L4.63783 5.50046L6.66898 3.07983L7.20898 2.43629L7.31177 2.31379L7.31314 2.31494C9.8158 -0.535369 14.1502 -0.87717 17.0708 1.57349C19.9914 4.02415 20.4074 8.35208 18.035 11.3117L18.0364 11.3128L17.9336 11.4353L17.3936 12.0789L15.3625 14.4995ZM5.40388 6.14325L7.97503 3.07907L8.01927 3.02635L8.06459 2.97473C10.2094 0.531953 13.9248 0.239052 16.428 2.33953C18.9313 4.44001 19.288 8.14977 17.2548 10.6862L17.2118 10.7398L17.1676 10.7925L14.5964 13.8567L5.40388 6.14325Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_352_5754">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconPills;
