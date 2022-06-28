import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface SelectPropsType {
  children?: ReactNode;
  label?: string;
  wrapperClassName?: string;
  className?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  multiple?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectPropsType>(
  (
    {
      children,
      label = "",
      className = "",
      placeholder = "",
      wrapperClassName = "",
      disabled = false,
      error = false,
      multiple = false,
      ...props
    },
    ref
  ) => {
    const selectNode = (
      <select
        className={clsx(
          className,
          "w-full text-sm h-11 border-none rounded-lg placeholder:text-blue-gray focus:outline-none focus:ring-0",
          { "bg-error-light text-system-error caret-alert-error": error },
          { "bg-blue-white text-text focus:bg-blue-bg caret-blue": !error }
        )}
        placeholder={placeholder}
        ref={ref}
        multiple={multiple}
        {...props}
      >
        {children}
      </select>
    );

    if (label) {
      return (
        <label className={clsx(wrapperClassName, "flex flex-col")}>
          <span className="text-sm font-medium text-blue leading-5">
            {label}
          </span>
          {selectNode}
        </label>
      );
    }

    return selectNode;
  }
);

export default Select;
