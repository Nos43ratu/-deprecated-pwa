import { HeaderLayout, SlideFromRightLayout } from "@layouts";
import React, { FC } from "react";
import IconChevronLeft from "../../../../shared/icons/IconChevronLeft";

interface DeleteAccountProps {
  isOpen: boolean;
  handleGoBack: () => void;
}

const DeleteAccount: FC<DeleteAccountProps> = ({ isOpen, handleGoBack }) => {
  const backButton = (
    <button
      className="text-blue flex items-center text-lg justify-start"
      onClick={handleGoBack}
    >
      <IconChevronLeft />
      <span className="ml-[5px]">Back</span>
    </button>
  );

  return (
    <SlideFromRightLayout isOpen={isOpen}>
      <div className="bg-white flex flex-col h-full w-full">
        <HeaderLayout leftNode={backButton}>My Account</HeaderLayout>
        <Body />
      </div>
    </SlideFromRightLayout>
  );
};

const Body = () => {
  return (
    <div className="flex flex-col p-4 h-full space-y-3">
      <span className="text-lg text-blue font-semibold">
        Are you sure you want to delete your account?
      </span>
      <p className="text-sm text-text">
        We’re sorry to see you go, but we respect your choice. If you decide to
        delete your account, all your personal information will be deleted right
        now.
      </p>
      <button className="bg-alert-light py-4 text-alert-error rounded-lg mt-6">
        Delete my account
      </button>
    </div>
  );
};

export default DeleteAccount;
