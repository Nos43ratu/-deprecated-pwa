import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface TextareaPropsType {
  children?: ReactNode;
  label?: string;
  wrapperClassName?: string;
  className?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(
  (
    {
      children,
      label = "",
      className = "",
      placeholder = "",
      wrapperClassName = "",
      disabled = false,
      value,
      error = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputNode = (
      <textarea
        className={clsx(
          className,
          "w-full text-sm h-[120px] border-none rounded-lg placeholder:text-blue-gray focus:outline-none focus:ring-0",
          { "bg-error-light text-system-error caret-alert-error": error },
          { "bg-blue-white text-text focus:bg-blue-bg caret-blue": !error }
        )}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        ref={ref}
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

export default Textarea;
