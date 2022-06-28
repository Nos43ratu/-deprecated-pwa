import React, { useState } from "react";
import { Step, useScanner } from "../../context/useScanner";
import SlideFromRightLayout from "../../../../shared/layouts/SlideFromRightLayout/SlideFromRightLayout";
import { HeaderLayout } from "@layouts";
import IconChevronLeft from "../../../../shared/icons/IconChevronLeft";
import { Button, Input, Textarea } from "@ui-kit";
import IconPlus from "../../../../shared/icons/IconPlus";
import { IconLoader, IconPillBig } from "@icons";
import { useMutation } from "react-query";
import { UpdatePrescriptionDiagnisisMutation } from "@api";
import { useNavigate } from "react-router-dom";

const AddPrescription = () => {
  const { step } = useScanner();

  const isOpen = step === Step.ADD_PRESCRIPTION || step === Step.ADD_MEDICINE;

  return (
    <SlideFromRightLayout isOpen={isOpen} wrapperId="AddPrescription">
      <Form />
    </SlideFromRightLayout>
  );
};

const Form = () => {
  const [diagnosis, setDiagnosis] = useState("");
  const { prescriptionId, patientData } = useScanner();
  const navigate = useNavigate();

  const updateDiagnosis = useMutation(
    "updateDiagnosis",
    UpdatePrescriptionDiagnisisMutation,
    {
      onSuccess: async () => {
        navigate("/doctor/history");
      },
    }
  );

  const handleAddPrescription = async () => {
    await updateDiagnosis.mutate({
      diagnosis,
      id: prescriptionId,
    });
  };

  const loading = !patientData && !prescriptionId;

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <Header handleAddPrescription={handleAddPrescription} />
      {loading ? (
        <div className="flex text-blue items-center justify-center h-full">
          <IconLoader className="w-12 h-12" />
        </div>
      ) : (
        <Body diagnosis={diagnosis} setDiagnosis={setDiagnosis} />
      )}
    </div>
  );
};

const Body = ({
  diagnosis,
  setDiagnosis,
}: {
  diagnosis: string;
  setDiagnosis: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { patientData, setStep, medicines } = useScanner();

  return (
    <div className="flex flex-col p-4 space-y-4">
      <Input
        label="Surname"
        placeholder="Patient’s surname"
        disabled
        value={patientData?.surname}
      />
      <Input
        label="Name"
        placeholder="Patient’s name"
        disabled
        value={patientData?.name}
      />
      <Textarea
        label="Diagnosis"
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />
      <Button
        className="relative justify-center items-center"
        onClick={() => setStep(Step.ADD_MEDICINE)}
      >
        <IconPlus className="absolute left-2.5 top-4" />
        Add medication
      </Button>
      {medicines.length !== 0 &&
        medicines.map((medicine: any, index: any) => (
          <div
            className="bg-blue-white px-4 py-3 rounded-[10px] flex"
            key={index}
          >
            <div className="bg-white rounded-lg p-2.5 text-blue">
              <IconPillBig width="w-7" height="h07" />
            </div>
            <div className="flex flex-col ml-4">
              <span className="text-text text-lg tracking-[0.38px] w">
                {medicine.medicineName}
              </span>
              <span className="text-blue-gray text-sm font-medium">{`${medicine.dosage} ${medicine.dosageType} ${medicine.medicineType}, ${medicine.notes}`}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

const Header = ({
  handleAddPrescription,
}: {
  handleAddPrescription: () => void;
}) => {
  const { setStep } = useScanner();

  const handleGoBack = () => setStep(Step.SCAN_QR);

  const backButton = (
    <button
      className="text-blue flex items-center text-lg justify-start"
      onClick={handleGoBack}
    >
      <IconChevronLeft />
      <span className="ml-[5px]">Back</span>
    </button>
  );

  const nextButton = (
    <button
      className="text-blue flex items-start text-lg justify-end w-[55px] disabled:text-blue-gray"
      onClick={handleAddPrescription}
    >
      Done
    </button>
  );
  return (
    <HeaderLayout leftNode={backButton} rightNode={nextButton}>
      Prescription
    </HeaderLayout>
  );
};

export default AddPrescription;
