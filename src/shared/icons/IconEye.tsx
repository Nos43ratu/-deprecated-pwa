import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";
import { IconsBasePropsType } from "./types";

const IconEye: FC<SVGAttributes<IconsBasePropsType>> = ({ className }) => (
  <svg
    className={clsx(className, "w-5 h-5")}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      d="M0.833496 9.99999C0.833496 9.99999 4.16683 3.33331 10.0002 3.33331C15.8335 3.33331 19.1668 9.99999 19.1668 9.99999C19.1668 9.99999 15.8335 16.6667 10.0002 16.6667C4.16683 16.6667 0.833496 9.99999 0.833496 9.99999Z"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconEye;
