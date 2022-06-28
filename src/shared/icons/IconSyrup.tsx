import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconSyrup: FC<SVGAttributes<IconPropsType>> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 1H14C14.2761 1 14.5 1.22386 14.5 1.5V3.5C14.5 3.77614 14.2761 4 14 4H13.583H5.26301H5C4.72386 4 4.5 3.77614 4.5 3.5V1.5C4.5 1.22386 4.72386 1 5 1ZM4.96424 4.99958C4.15233 4.98059 3.5 4.31647 3.5 3.5V1.5C3.5 0.671573 4.17157 0 5 0H14C14.8284 0 15.5 0.671573 15.5 1.5V3.5C15.5 4.32843 14.8284 5 14 5H13.9008C14.2157 5.72778 14.6962 6.40104 15.2634 6.81685C15.7402 7.14182 16 7.69881 16 8.30228V18.1896C16 19.1645 15.2633 20 14.31 20H4.68998C3.77993 20 3 19.2108 3 18.1896V8.30228C3 7.69881 3.25998 7.14182 3.73671 6.81685C4.26925 6.40489 4.68505 5.71857 4.96424 4.99958ZM6.02603 5C5.71176 5.95013 5.16605 6.97543 4.34858 7.60781L4.3248 7.62621L4.29996 7.64314C4.13543 7.75529 4 7.97941 4 8.30228V18.1896C4 18.7074 4.37982 19 4.68998 19H14.31C14.6314 19 15 18.6954 15 18.1896V8.30228C15 7.9792 14.8646 7.75519 14.7002 7.64315L14.6861 7.63351L14.6723 7.62339C13.8293 7.00553 13.1857 6.00917 12.827 5H6.02603Z"
    />
  </svg>
);

export default IconSyrup;
