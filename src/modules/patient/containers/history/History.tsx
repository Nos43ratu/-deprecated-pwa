import React, { useState } from "react";
import { CabinetHeaderLayout } from "@layouts";
import { IconLoader } from "@icons";
import PrescriptionCard from "../../../../shared/components/PrescriptionCard/PrescriptionCard";
import PatientPrescriptionInfo from "./PatientPrescriptionInfo";
import { useUser } from "../../../../shared/context/useUser";
import { useQuery } from "react-query";
import { getPatientPrescriptionQuery } from "../../../../shared/api/getPatientPrescription";
import { userDataQuery } from "@api";

const History = () => {
  const [prescriptionId, setPrescriptionId] = useState<string | null>(null);

  const { id } = useUser();
  console.log(id);

  const { isLoading, data } = useQuery(
    "prescriptions",
    () => getPatientPrescriptionQuery({ id }),
    {
      enabled: !!id,
    }
  );

  return (
    <div className="flex flex-col h-full">
      <CabinetHeaderLayout>Prescriptions</CabinetHeaderLayout>
      <Body
        setPrescriptionId={setPrescriptionId}
        isLoading={isLoading}
        data={data}
      />
      <PatientPrescriptionInfo
        prescriptionId={prescriptionId}
        setPrescriptionId={setPrescriptionId}
      />
    </div>
  );
};

const Body = ({
  setPrescriptionId,
  isLoading,
  data,
}: {
  setPrescriptionId: (id: string) => void;
  isLoading: boolean;
  data: any;
}) => {
  return (
    <div className="flex flex-col bg-blue h-full px-4 py-6 space-y-4 overflow-y-auto">
      {isLoading ? (
        <div className="flex text-white items-center justify-center h-full">
          <IconLoader className="w-12 h-12" />
        </div>
      ) : (
        data?.map((prescription: any) => (
          <Item
            prescription={prescription}
            setPrescriptionId={setPrescriptionId}
            key={prescription._id}
          />
        ))
      )}
    </div>
  );
};

const Item = ({
  prescription,
  setPrescriptionId,
}: {
  prescription: any;
  setPrescriptionId: any;
}) => {
  const { data, isLoading } = useQuery(
    `patient-${prescription.doctorId}-${prescription._id}`,
    () => userDataQuery({ userId: prescription.doctorId }),
    { enabled: !!prescription.doctorId }
  );

  return (
    <button onClick={() => setPrescriptionId(prescription._id)}>
      <PrescriptionCard
        key={prescription._id}
        id={prescription._id}
        name={data?.name ?? ""}
        date={new Date(prescription.createdAt).toLocaleDateString("en-EN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
    </button>
  );
};

export default History;
