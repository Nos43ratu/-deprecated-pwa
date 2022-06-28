import { createContext, FC, ReactNode, useContext, useState } from "react";

export enum SignUpStep {
  ROLE = "ROLE",
  INFO = "INFO",
  DATA = "DATA",
  VERIFY = "VERIFY",
}

export type InfoType = {
  firstName: string;
  lastName: string;
  birthDate?: string;
  gender?: "female" | "male";
  iin?: string;
};

export type DataType = {
  contactNumber: string;
  email: string;
  password: string;
};

interface SignUpContextType {
  step: SignUpStep;
  setStep: (step: SignUpStep) => void;
  role: "patient" | "doctor" | null;
  setRole: (role: "patient" | "doctor" | null) => void;
  info: InfoType | null;
  setInfo: (infoType: InfoType) => void;
  data: DataType | null;
  setData: (dataType: DataType) => void;
}

const SignUpContext = createContext<SignUpContextType>({
  step: SignUpStep.ROLE,
  setStep: () => {},
  role: null,
  setRole: () => {},
  info: null,
  setInfo: () => {},
  data: null,
  setData: () => {},
});

interface SignUpContextProviderProps {
  children: ReactNode;
}

export const SignUpContextProvider: FC<SignUpContextProviderProps> = ({
  children,
}) => {
  const [step, setStep] = useState<SignUpStep>(SignUpStep.ROLE);
  const [role, setRole] = useState<"patient" | "doctor" | null>(null);
  const [info, setInfo] = useState<InfoType | null>(null);
  const [data, setData] = useState<DataType | null>(null);

  const { Provider } = SignUpContext;
  return (
    <Provider
      value={{ step, setStep, role, setRole, info, setInfo, data, setData }}
    >
      {children}
    </Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
