import React from "react";
import { Outlet } from "react-router-dom";
import { IconMedHistory, IconQr, IconHome, IconProfile } from "@icons";
import MobileNavigation from "../../components/MobileNatigation/MobileNavigation";
import { UserContextProvdier } from "../../context/useUser";

const config = [
  {
    to: "qr-code",
    item: <IconQr />,
  },
  {
    to: "history",
    item: <IconMedHistory />,
  },
  {
    to: "home",
    item: <IconHome />,
  },
  {
    to: "profile",
    item: <IconProfile />,
  },
];

export const PatientCabinetLayout = () => {
  return (
    <div className="w-full h-full relative pb-[65px]">
      <UserContextProvdier>
        <Outlet />
        <MobileNavigation config={config} />
      </UserContextProvdier>
    </div>
  );
};

export default PatientCabinetLayout;
