import React, { FC } from "react";
import IconTablet from "../../icons/IconTablet";

interface PrescriptionPropsType {
  id: number;
  name: string;
  date: string;
}

const PrescriptionCard: FC<PrescriptionPropsType> = ({ name, date, id }) => (
  <div className="flex flex-col bg-white p-4 rounded-lg">
    <div className="flex">
      <div className="flex items-center justify-center w-[33px] h-[33px] bg-blue-bg rounded-full">
        <IconTablet className="text-blue w-[17px] h-[17px]" />
      </div>
      <span className="ml-2.5 text-text text-lg font-semibold">{name}</span>
    </div>
    <div className="mt-4 flex justify-between text-sm font-medium text-blue-gray">
      <span>№{id}</span>
      <span>{date}</span>
    </div>
  </div>
);

export default PrescriptionCard;
