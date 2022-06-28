import { FC, createContext, useContext, ReactNode, useState } from "react";

interface SignUpLayoutPropsType {
  children: ReactNode;
}

export enum Steps {
  whoIs,
  about,
  info,
  verify,
}

export type RoleType = "patient" | "doctor";

export type AboutDataType = {
  firstName: string;
  lastName: string;
  birthDate?: string;
  gender?: "female" | "male";
  iin?: string;
};

export type InfoDataType = {
  contactNumber: string;
  email: string;
  password: string;
};

type SignUpLayoutContextType = {
  step: Steps;
  setStep: (step: Steps) => void;
  role: RoleType;
  setRole: (role: RoleType) => void;
  aboutData?: AboutDataType;
  setAboutData: (aboutData: AboutDataType) => void;
  setInfoData: (infoData: InfoDataType) => void;
  infoData?: InfoDataType;
};

const SignUpContext = createContext({} as SignUpLayoutContextType);

export const SignUpContextProvider: FC<SignUpLayoutPropsType> = ({
  children,
}) => {
  const [step, setStep] = useState<Steps>(Steps.whoIs);
  const [role, setRole] = useState<RoleType>("patient");
  const [aboutData, setAboutData] = useState<AboutDataType>();
  const [infoData, setInfoData] = useState<InfoDataType>();

  const { Provider } = SignUpContext;

  return (
    <Provider
      value={{
        step,
        setStep,
        role,
        setRole,
        aboutData,
        setAboutData,
        setInfoData,
        infoData,
      }}
    >
      {children}
    </Provider>
  );
};

export const useSignUp = (): SignUpLayoutContextType =>
  useContext(SignUpContext);
