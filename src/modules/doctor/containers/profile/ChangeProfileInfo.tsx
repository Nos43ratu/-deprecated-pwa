import React, { FC, useEffect, useState } from "react";
import IconChevronLeft from "../../../../shared/icons/IconChevronLeft";
import { HeaderLayout, SlideFromRightLayout } from "@layouts";
import { useQuery } from "react-query";
import { userDataQuery } from "@api";
import { Input } from "@ui-kit";
import { IconLoader } from "@icons";

interface ChangeProfileInfoProps {
  isOpen: boolean;
  handleGoBack: () => void;
}

const ChangeProfileInfo: FC<ChangeProfileInfoProps> = ({
  isOpen,
  handleGoBack,
}) => {
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
  const [patientId, setPatientId] = useState("");

  const { isLoading, data: patientData } = useQuery(
    ["patientData", patientId],
    () => userDataQuery({ userId: patientId }),
    { enabled: !!patientId }
  );

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData")!);
    setPatientId(userData.id);
  }, []);

  return (
    <div className="flex flex-col p-4 space-y-4 h-full">
      {isLoading ? (
        <div className="flex items-center justify-center text-blue h-full">
          <IconLoader className="w-12 h-12" />
        </div>
      ) : (
        <>
          <Input label="Name" value={patientData?.name} disabled />
          <Input label="Surname" value={patientData?.surname} disabled />
        </>
      )}
    </div>
  );
};

export default ChangeProfileInfo;
