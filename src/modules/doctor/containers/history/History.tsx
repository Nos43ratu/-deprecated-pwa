import { CabinetHeaderLayout } from "@layouts";
import React, { useState } from "react";
import PrescriptionCard from "../../../../shared/components/PrescriptionCard/PrescriptionCard";
import PrescriptionInfo from "./PrescriptionInfo";
import { IconLoader } from "@icons";
import { useQuery } from "react-query";
import { getDoctorPrescriptionQuery } from "../../../../shared/api/getDoctorPrescription";
import { useUser } from "../../../../shared/context/useUser";
import { userDataQuery } from "@api";

const History = () => {
  const [prescriptionId, setPrescriptionId] = useState<string | null>(null);

  const { id } = useUser();

  const { isLoading, data } = useQuery(
    "prescriptions",
    () => getDoctorPrescriptionQuery({ id }),
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
      <PrescriptionInfo
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
  const { data, isLoading } = useQuery(`patient-${prescription.userId}`, () =>
    userDataQuery({ userId: prescription.userId })
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
