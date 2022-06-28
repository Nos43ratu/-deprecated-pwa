import clsx from "clsx";
import React, { forwardRef, ReactNode } from "react";

interface CheckBoxWithIconProps {
  children: ReactNode;
  wrapperClassName?: string;
  className?: string;
  value: string;
  type?: "radio" | "checkbox";
  defaultChecked?: boolean;
}

const CheckBoxWithIcon = forwardRef<HTMLInputElement, CheckBoxWithIconProps>(
  (
    {
      children,
      className = "",
      type = "radio",
      wrapperClassName = "",
      value,
      defaultChecked = false,
      ...props
    },
    ref
  ) => {
    return (
      <label className={clsx(wrapperClassName, "flex")}>
        <input
          defaultChecked={defaultChecked}
          onChange={() => console.log("asd")}
          type={type}
          className="sr-only peer"
          value={value}
          {...props}
          ref={ref}
        />
        <span className={clsx(className, "flex items-center justify-center")}>
          {children}
        </span>
      </label>
    );
  }
);

export default CheckBoxWithIcon;
