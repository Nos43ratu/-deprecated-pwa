import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface CheckboxGroupProps {
  label: string;
  children: ReactNode;
  wrapperClassName?: string;
  className?: string;
  error?: boolean;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  label,
  children,
  className = "",
  wrapperClassName = "",
  error = false,
}) => {
  return (
    <legend className={clsx(wrapperClassName, "flex flex-col")}>
      <span className="text-sm font-medium text-blue leading-5">{label}</span>
      <div
        className={clsx(
          className,
          "flex rounded-lg",
          {
            "bg-blue-white": !error,
          },
          { "bg-alert-light": error }
        )}
      >
        {children}
      </div>
    </legend>
  );
};

export default CheckboxGroup;
