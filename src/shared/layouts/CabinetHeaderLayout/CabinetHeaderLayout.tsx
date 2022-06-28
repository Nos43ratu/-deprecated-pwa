import React, { FC, ReactNode } from "react";

interface CabinetHeaderLayoutProps {
  children: ReactNode;
  className?: string;
}

const CabinetHeaderLayout: FC<CabinetHeaderLayoutProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`${className} bg-white px-4 py-3`}>
      <span className="text-blue text-lg font-semibold">{children}</span>
    </div>
  );
};

export default CabinetHeaderLayout;
