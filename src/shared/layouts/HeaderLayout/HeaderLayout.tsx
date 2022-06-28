import React, { FC, ReactNode } from "react";

interface HeaderLayoutProps {
  children: ReactNode;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = ({
  children,
  leftNode = null,
  rightNode = null,
}) => {
  return (
    <div className="flex bg-blue-white justify-between w-full px-2.5 py-3">
      <div className="flex-1 flex items-center justify-start">{leftNode}</div>
      <div className="flex-1 text-center text-lg font-semibold text-text">
        {children}
      </div>
      <div className="flex-1 flex items-center justify-end">{rightNode}</div>
    </div>
  );
};

export default HeaderLayout;
