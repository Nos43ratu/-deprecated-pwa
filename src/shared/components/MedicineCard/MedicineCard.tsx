import React, { FC } from "react";
import { IconPillBig } from "@icons";

interface MedicineCardProps {
  type?: "white" | "gray";
  color: string;
  medicineName: string;
  dosage: number;
  dosageType: string;
  medicineType: string;
  notes: string;
}

const MedicineCard: FC<MedicineCardProps> = ({
  type = "gray",
  color,
  medicineName,
  dosage,
  dosageType,
  medicineType,
  notes,
}) => {
  return (
    <div className="flex px-4 py-3 rounded-[10px] bg-blue-white">
      <div className="text-blue bg-white rounded-lg p-2.5 mr-4">
        <IconPillBig width="w-7 h-7" />
      </div>
      <div className="flex flex-col">
        <span className="text-text text-lg tracking-[0.38px] w">
          {medicineName}
        </span>
        <span className="text-blue-gray text-sm font-medium">{`${dosage} ${dosageType} ${medicineType}, ${notes}`}</span>
      </div>
    </div>
  );
};

export default MedicineCard;
