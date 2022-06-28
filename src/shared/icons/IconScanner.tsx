import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
}

const IconScanner: FC<SVGAttributes<IconPropsType>> = ({ className }) => (
  <svg
    className={clsx(className, "w-[25px] h-[25px]")}
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g clipPath="url(#clip0_414_1406)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.50377 7.88228C3.50377 8.58011 3.13305 8.96174 2.43522 8.96174C1.74829 8.96174 1.36667 8.58011 1.36667 7.88228V5.23271C1.36667 2.91025 2.58787 1.69995 4.94304 1.69995H7.59262C8.29044 1.69995 8.67207 2.08158 8.67207 2.7685C8.67207 3.45543 8.29044 3.83705 7.59262 3.83705H5.07389C4.05985 3.83705 3.50377 4.36043 3.50377 5.41807V7.88228ZM22.9667 7.88228C22.9667 8.58011 22.5959 8.96174 21.8981 8.96174C21.2112 8.96174 20.8296 8.58011 20.8296 7.88228V5.41807C20.8296 4.36043 20.2626 3.83705 19.2595 3.83705H16.7407C16.0429 3.83705 15.6613 3.45543 15.6613 2.7685C15.6613 2.08158 16.0429 1.69995 16.7407 1.69995H19.3903C21.7455 1.69995 22.9667 2.91025 22.9667 5.23271V7.88228ZM7.59262 23.2999H4.94304C2.58787 23.2999 1.36667 22.0897 1.36667 19.7563V17.1067C1.36667 16.4089 1.73739 16.0273 2.43522 16.0273C3.12215 16.0273 3.50377 16.4089 3.50377 17.1067V19.5709C3.50377 20.6395 4.05985 21.1628 5.07389 21.1628H7.59262C8.29044 21.1628 8.67207 21.5445 8.67207 22.2314C8.67207 22.9183 8.29044 23.2999 7.59262 23.2999ZM19.3903 23.2999H16.7407C16.0429 23.2999 15.6613 22.9183 15.6613 22.2314C15.6613 21.5445 16.0429 21.1628 16.7407 21.1628H19.2595C20.2626 21.1628 20.8296 20.6395 20.8296 19.5709V17.1067C20.8296 16.4198 21.2003 16.0273 21.8981 16.0273C22.585 16.0273 22.9667 16.4089 22.9667 17.1067V19.7563C22.9667 22.0897 21.7455 23.2999 19.3903 23.2999ZM1.36667 11.5C0.814384 11.5 0.366669 11.9477 0.366669 12.5C0.366669 13.0522 0.814384 13.5 1.36667 13.5H22.9667C23.519 13.5 23.9667 13.0522 23.9667 12.5C23.9667 11.9477 23.519 11.5 22.9667 11.5H1.36667Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_414_1406">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.166672 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default IconScanner;
