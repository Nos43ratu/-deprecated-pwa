import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";
import { IconsBasePropsType } from "./types";

const IconEyeOff: FC<SVGAttributes<IconsBasePropsType>> = ({ className }) => (
  <svg
    className={clsx(className, "w-5 h-5")}
    stroke="currentColor"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7668 11.7666C11.538 12.0122 11.262 12.2092 10.9553 12.3459C10.6486 12.4825 10.3176 12.556 9.98191 12.5619C9.64624 12.5678 9.31281 12.5061 9.00151 12.3804C8.69022 12.2546 8.40744 12.0675 8.17004 11.8301C7.93265 11.5927 7.7455 11.3099 7.61976 10.9986C7.49402 10.6873 7.43227 10.3539 7.4382 10.0182C7.44412 9.68253 7.51759 9.35148 7.65423 9.04482C7.79087 8.73815 7.98788 8.46215 8.2335 8.23328M14.9502 14.95C13.5257 16.0358 11.7911 16.6373 10.0002 16.6666C4.16683 16.6666 0.833496 9.99995 0.833496 9.99995C1.87007 8.06819 3.30778 6.38045 5.05017 5.04994L14.9502 14.95ZM8.25017 3.53327C8.82378 3.39901 9.41106 3.33189 10.0002 3.33327C15.8335 3.33327 19.1668 9.99995 19.1668 9.99995C18.661 10.9463 18.0577 11.8372 17.3668 12.6583L8.25017 3.53327Z"
      stroke="#96A6C2"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.833496 0.833252L19.1668 19.1666"
      stroke="#96A6C2"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconEyeOff;
