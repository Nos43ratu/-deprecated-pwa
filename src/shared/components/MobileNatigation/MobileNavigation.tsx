import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface MobileNavigationPropsType {
  config: {
    item: ReactNode;
    to: string;
  }[];
}

const MobileNavigation: FC<MobileNavigationPropsType> = ({ config }) => {
  return (
    <div className="fixed bottom-0 justify-center bg-blue-white w-full flex pb-3 pt-3">
      {config.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          className={({ isActive }) =>
            clsx(
              "px-8 py-2",
              { "text-blue": isActive },
              { "text-blue-gray": !isActive }
            )
          }
        >
          {link.item}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNavigation;
