import React, { FC, ReactElement, useState } from "react";
import { IconEye, IconEyeOff } from "@icons";
import clsx from "clsx";

interface WithHidePasswordPropsType {
  children(type: PasswordType): ReactElement;
  className?: string;
}

type PasswordType = "password" | "text";

const WithHidePassword: FC<WithHidePasswordPropsType> = ({
  children,
  className,
}) => {
  const [type, setType] = useState<PasswordType>("password");

  const handleHide = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className={clsx(className, "flex relative")}>
      {children && children(type)}
      <button
        tabIndex={-1}
        type="button"
        className={clsx("flex absolute bottom-3 right-3 text-blue-gray")}
        onClick={handleHide}
      >
        {type === "text" && <IconEye />}
        {type === "password" && <IconEyeOff />}
      </button>
    </div>
  );
};

export default WithHidePassword;
