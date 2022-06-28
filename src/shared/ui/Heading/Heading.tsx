import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface HeadingTypeProps {
  children: ReactNode;
  className?: string;
}

const Heading: FC<HeadingTypeProps> = ({ children, className }) => (
  <h1 className={clsx(className, "text-lg font-semibold")}>{children}</h1>
);

export default Heading;
