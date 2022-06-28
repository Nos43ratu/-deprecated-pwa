import React, { FC, ReactNode } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { IconLoader } from "@icons";

interface ButtonPropsType {
  children: ReactNode;
  name?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonPropsType> = ({
  children,
  disabled = false,
  className = "",
  href = "",
  loading = false,
  type,
  name = "",
  onClick,
}) => {
  if (href) {
    return (
      <Link
        to={href}
        className={clsx(className, "text-blue text-sm font-medium")}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      name={name}
      className={clsx(
        className,
        "rounded-lg w-full py-[14px] text-lg bg-blue text-white disabled:bg-blue-white disabled:text-blue-gray flex items-center justify-center"
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <IconLoader /> : children}
    </button>
  );
};

export default Button;
