import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface InputPropsType {
  children?: ReactNode;
  label?: string;
  wrapperClassName?: string;
  className?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  (
    {
      children,
      label = "",
      className = "",
      placeholder = "",
      type = "text",
      wrapperClassName = "",
      disabled = false,
      error = false,
      value,
      ...props
    },
    ref
  ) => {
    const inputNode = (
      <input
        className={clsx(
          className,
          "w-full text-sm h-11 border-none rounded-lg placeholder:text-blue-gray focus:outline-none focus:ring-0",
          { "bg-error-light text-system-error caret-alert-error": error },
          { "bg-blue-white text-text focus:bg-blue-bg caret-blue": !error }
        )}
        type={type}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        value={value}
        {...props}
      />
    );

    if (label) {
      return (
        <label className={clsx(wrapperClassName, "flex flex-col")}>
          <span className="text-sm font-medium text-blue leading-5">
            {label}
          </span>
          {inputNode}
        </label>
      );
    }

    return inputNode;
  }
);

export default Input;
