import {
  addPrescriptionMutation,
  getPrescriptionQuery,
  userDataQuery,
  UserDataResponse,
} from "@api";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation, useQuery } from "react-query";
import { useUser } from "../../../shared/context/useUser";

export enum Step {
  SCAN_QR,
  ADD_PRESCRIPTION,
  ADD_MEDICINE,
}

interface ScannerContextType {
  step: Step | null;
  setStep: (step: Step) => void;
  patientId: string | null;
  setPatientId: (patientId: string) => void;
  patientData: UserDataResponse | undefined;
  prescriptionId: string;
  setPrescriptionId: (id: string) => void;
  prescriptionData: any;
  medicines: any;
  setMedicines: (medicines: any) => void;
}
const ScannerContext = createContext<ScannerContextType>({
  step: null,
  setStep: (step: Step) => {},
  patientId: null,
  setPatientId: (patientId: string) => {},
  patientData: undefined,
  prescriptionId: "",
  setPrescriptionId: (id: string) => {},
  prescriptionData: {},
  medicines: [],
  setMedicines: (medicines: any) => {},
});

interface ScannerContextProviderProps {
  children: ReactNode;
}

export const ScannerContextProvider: FC<ScannerContextProviderProps> = ({
  children,
}) => {
  const { id } = useUser();
  const [patientId, setPatientId] = useState("");
  const [step, setStep] = useState<Step>(Step.SCAN_QR);
  const [prescriptionId, setPrescriptionId] = useState("");
  const [prescriptionData, setPrescriptionData] = useState<any>({});
  const [medicines, setMedicines] = useState<any>([]);

  const addPrescription = useMutation(
    "addPrescription",
    addPrescriptionMutation,
    {
      onSuccess: (data) => {
        setPrescriptionId(data._id);
      },
    }
  );

  const { data: patientData } = useQuery(
    ["patientData", patientId],
    () => userDataQuery({ userId: patientId }),
    { enabled: !!patientId }
  );

  useEffect(() => {
    if (patientId && !prescriptionId) {
      addPrescription.mutate({
        userId: patientId,
        doctorId: id,
      });
    }
  }, [patientId]);

  const getPrescription = useQuery(
    "prescription",
    () => getPrescriptionQuery({ id: prescriptionId }),
    {
      enabled: !!prescriptionId,
      onSuccess: (data) => {
        setPrescriptionData(data);
      },
    }
  );

  const { Provider } = ScannerContext;

  return (
    <Provider
      value={{
        step,
        setStep,
        patientData,
        patientId,
        setPatientId,
        prescriptionId,
        setPrescriptionId,
        prescriptionData,
        medicines,
        setMedicines,
      }}
    >
      {children}
    </Provider>
  );
};

export const useScanner = () => useContext(ScannerContext);
