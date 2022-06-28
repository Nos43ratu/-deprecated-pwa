import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";
import { IconsBasePropsType } from "./types";

const IconLoader: FC<SVGAttributes<IconsBasePropsType>> = ({ className }) => (
  <svg
    className={clsx(className, "w-6 h-6 animate-spin")}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 24C11.5481 24 11.1818 23.6337 11.1818 23.1818C11.1818 22.7299 11.5481 22.3636 12 22.3636C17.7237 22.3636 22.3636 17.7237 22.3636 12C22.3636 6.27632 17.7237 1.63636 12 1.63636C6.27632 1.63636 1.63636 6.27632 1.63636 12C1.63636 13.2045 1.84158 14.3798 2.23821 15.4893C2.39032 15.9148 2.16869 16.3831 1.7432 16.5352C1.3177 16.6873 0.849455 16.4657 0.697344 16.0402C0.237738 14.7545 0 13.3929 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24Z" />
  </svg>
);

export default IconLoader;
