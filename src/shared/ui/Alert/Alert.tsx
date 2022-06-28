import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface AlertPropsType {
  children: ReactNode;
  className?: string;
}

const Alert: FC<AlertPropsType> = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-[10px] px-4 py-2.5 bg-alert-light text-alert-error"
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
