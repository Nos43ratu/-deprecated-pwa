import React, { FC, useEffect, useMemo, useState } from "react";
import { HeaderLayout, SlideFromRightLayout } from "@layouts";
import IconChevronLeft from "../../../../shared/icons/IconChevronLeft";
import { Input, Textarea } from "@ui-kit";
import { useQuery } from "react-query";
import { getPrescriptionQuery, userDataQuery } from "@api";
import { IconLoader } from "@icons";
import { MedicineCard } from "../../../../shared/components/MedicineCard";
import { MedicineType } from "../../../../types";

interface PrescriptionInfoProps {
  prescriptionId: string | null;
  setPrescriptionId: (prescriptionId: string | null) => void;
}
const getMedicinces = async (medicines: string[]) => {
  const _m: any = [];

  await Promise.all(
    medicines.map((medicine: string) => {
      return fetch(`https://api.isaaa.site/med/recept/${medicine}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((r) => _m.push(r));
    })
  );
  return _m;
};

const PrescriptionInfo: FC<PrescriptionInfoProps> = ({
  prescriptionId,
  setPrescriptionId,
}) => {
  const [medicines, setMedicines] = useState<MedicineType[]>([]);
  const handleGoBack = () => setPrescriptionId(null);

  const { isLoading: prescriptionLoading, data } = useQuery(
    "prescription",
    () => getPrescriptionQuery({ id: prescriptionId ?? "" }),
    {
      enabled: !!prescriptionId,
    }
  );

  const { data: patientData, isLoading: patientLoading } = useQuery(
    `patient-${data?.userId}`,
    () => userDataQuery({ userId: data?.userId ?? "" }),
    { enabled: !!data?.userId }
  );

  const backButton = (
    <button
      className="text-blue flex items-center text-lg justify-start"
      onClick={handleGoBack}
    >
      <IconChevronLeft />
      <span className="ml-[5px]">Back</span>
    </button>
  );

  useEffect(() => {
    if (data?.recepts) {
      getMedicinces(data?.recepts).then((r) => setMedicines(r));
    }
  }, [data]);

  return (
    <SlideFromRightLayout isOpen={!!prescriptionId}>
      <div className="z-30 relative bg-white flex flex-col w-full h-full">
        <HeaderLayout leftNode={backButton}>Prescriptions</HeaderLayout>
        {prescriptionLoading && patientLoading ? (
          <div className="flex text-white items-center justify-center h-full">
            <IconLoader className="w-12 h-12" />
          </div>
        ) : (
          <div className="flex flex-col p-4 space-y-4">
            {data && data?.recepts.length > 0 ? (
              <>
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
                  value={data?.diagnosis}
                  disabled
                />
                {medicines.length > 0 &&
                  medicines?.map((item: MedicineType) => (
                    <MedicineCard
                      key={item._id}
                      color={item.color}
                      medicineName={item.medicineName}
                      dosage={item.dosage}
                      dosageType={item.dosageType}
                      medicineType={item.medicineType}
                      notes={item.notes}
                    />
                  ))}
              </>
            ) : (
              <span className="text-center text-blue">
                No prescription data
              </span>
            )}
          </div>
        )}
      </div>
    </SlideFromRightLayout>
  );
};

export default PrescriptionInfo;
