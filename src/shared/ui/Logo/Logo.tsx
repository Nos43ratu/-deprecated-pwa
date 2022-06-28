import React, { FC } from "react";
import clsx from "clsx";

interface LogoPropsType {
  className?: string;
}

export const Logo: FC<LogoPropsType> = ({ className }) => {
  return (
    <h1
      className={clsx(
        className,
        "text-[40px] font-semibold text-blue tracking-wide"
      )}
    >
      easymed
    </h1>
  );
};

export default Logo;
