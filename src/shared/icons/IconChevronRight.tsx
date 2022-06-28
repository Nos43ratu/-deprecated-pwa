import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconChevronRight: FC<SVGAttributes<IconPropsType>> = ({
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
    <path d="M13.5693 10.4275C13.5693 10.1711 13.4741 9.95142 13.269 9.76099L7.5708 4.17993C7.40967 4.0188 7.20459 3.93091 6.96289 3.93091C6.47949 3.93091 6.09131 4.31177 6.09131 4.80249C6.09131 5.04419 6.19385 5.25659 6.35498 5.42505L11.4893 10.4275L6.35498 15.4299C6.19385 15.5984 6.09131 15.8181 6.09131 16.0525C6.09131 16.5432 6.47949 16.9241 6.96289 16.9241C7.20459 16.9241 7.40967 16.8362 7.5708 16.675L13.269 11.1013C13.4741 10.9036 13.5693 10.6838 13.5693 10.4275Z" />
  </svg>
);

export default IconChevronRight;
