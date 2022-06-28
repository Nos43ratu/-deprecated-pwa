import React, { ReactNode, useState } from "react";
import { CabinetHeaderLayout } from "@layouts";
import { IconChevronRight } from "@icons";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import ChangeProfileInfo from "./ChangeProfileInfo";
import DeleteAccount from "./DeleteAccount";

export enum Settings {
  Profile = "profile",
  Password = "password",
  Delete = "delete",
}

const Profile = () => {
  const [setting, setSetting] = useState<Settings | null>(null);
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("authToken");
    navigate("/sign-in");
  };

  const handleGoBack = () => setSetting(null);

  return (
    <div className="flex flex-col h-full pt-14 pb-10">
      <div className="flex flex-col">
        <CabinetHeaderLayout>Personal information</CabinetHeaderLayout>
        <div className="px-4 mt-3">
          <SectionButton onClick={() => setSetting(Settings.Profile)}>
            My Account
          </SectionButton>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <CabinetHeaderLayout>Account settings</CabinetHeaderLayout>
        <div className="px-4 mt-3">
          <SectionButton onClick={() => setSetting(Settings.Password)} disabled>
            Change Password
          </SectionButton>
        </div>
        <div className="px-4 mt-4">
          <SectionButton onClick={() => setSetting(Settings.Delete)}>
            Delete Account
          </SectionButton>
        </div>
      </div>
      <div className="flex items-center justify-center mt-auto">
        <button className="text-system-pink text-lg" onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <ChangeProfileInfo
        handleGoBack={handleGoBack}
        isOpen={setting === Settings.Profile}
      />
      <ChangePassword
        handleGoBack={handleGoBack}
        isOpen={setting === Settings.Password}
      />
      <DeleteAccount
        handleGoBack={handleGoBack}
        isOpen={setting === Settings.Delete}
      />
    </div>
  );
};

const SectionButton = ({
  children,
  onClick,
  disabled = false,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    className="flex justify-between text-text w-full border-b border-blue-white pb-4 disabled:text-blue-gray"
    onClick={onClick}
    disabled={disabled}
  >
    <span className="text-sm">{children}</span>
    <span className="text-blue-gray">
      <IconChevronRight />
    </span>
  </button>
);

export default Profile;
