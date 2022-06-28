import React from "react";
import { Outlet } from "react-router-dom";
import MobileNavigation from "../../components/MobileNatigation/MobileNavigation";
import { IconHistory, IconProfile, IconScanner } from "@icons";
import { UserContextProvdier } from "../../context/useUser";

const config = [
  {
    to: "scan-qr",
    item: <IconScanner />,
  },
  {
    to: "history",
    item: <IconHistory />,
  },
  {
    to: "profile",
    item: <IconProfile />,
  },
];

export const DoctorCabinetLayout = () => {
  return (
    <div className="w-full h-full relative pb-[65px]">
      <UserContextProvdier>
        <Outlet />
        <MobileNavigation config={config} />
      </UserContextProvdier>
    </div>
  );
};

export default DoctorCabinetLayout;
