import React, { ElementType, FC, ReactNode } from "react";
import clsx from "clsx";

interface TextPropsType {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Text: FC<TextPropsType> = ({
  as: Component = "p",
  children,
  className,
}) => {
  return (
    <Component className={clsx(className, "text-sm leading-5 font-medium")}>
      {children}
    </Component>
  );
};

export default Text;
