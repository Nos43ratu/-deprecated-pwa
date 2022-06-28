import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconPillBig: FC<SVGAttributes<IconPropsType>> = ({
  className,
  width = "w-7",
  height = "w-7",
}) => (
  <svg
    fill="currentColor"
    className={clsx(className, width, height)}
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.5809 14.7C26.2177 21.3332 20.7239 26.6 14 26.6C7.2761 26.6 1.78233 21.3332 1.41912 14.7H26.5809ZM26.5809 13.3H1.41912C1.78233 6.66681 7.2761 1.4 14 1.4C20.7239 1.4 26.2177 6.66681 26.5809 13.3ZM27.9828 13.3C27.6181 5.89322 21.4973 0 14 0C6.50274 0 0.381917 5.89322 0.0171955 13.3H0V14V14.7H0.0171955C0.381917 22.1068 6.50274 28 14 28C21.4973 28 27.6181 22.1068 27.9828 14.7H28V14V13.3H27.9828Z"
    />
  </svg>
);

export default IconPillBig;
