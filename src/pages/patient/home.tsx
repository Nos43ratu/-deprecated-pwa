import { getAllDaysInMonth } from "@utils";
import clsx from "clsx";
import React, { FC, useMemo } from "react";
import IconPillBig from "../../shared/icons/IconPillBig";
import Schedule from "../../modules/patient/containers/Schedule/Schedule";

export const PatientHome = () => <Schedule />;

const Header = () => {
  const dates = useMemo(
    () =>
      getAllDaysInMonth(2022, 4).map((d) => ({
        date: d.getDate(),
        day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(d),
      })),
    []
  );

  return (
    <div className="flex flex-col px-4 py-3 bg-white">
      <h1 className="text-blue text-lg font-semibold">Medications schedule</h1>
      <div className="pt-[28px] flex overflow-scroll">
        {dates.map((item) => (
          <DateItem
            key={item.date}
            date={item.date}
            active={true}
            day={item.day.toLocaleUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

interface DatePropsType {
  date: number;
  active: boolean;
  day: string;
}

const DateItem: FC<DatePropsType> = ({ date, active = false, day }) => (
  <div
    className={clsx(
      "flex flex-col mr-3 last:mr-0 rounded-lg h-[54px] w-[38px] flex-shrink-0 items-center justify-center",
      { "bg-blue text-white": active },
      { "bg-blue-white text-blue-gray": !active }
    )}
  >
    <span className="text-sm">{date}</span>
    <span className="text-xs mt-[6px]">{day}</span>
  </div>
);

const Body = () => {
  const mockData = [
    {
      time: "08:00",
      medicinces: [
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
      ],
    },
    {
      time: "22:00",
      medicinces: [
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
      ],
    },
    {
      time: "22:00",
      medicinces: [
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
      ],
    },
    {
      time: "22:00",
      medicinces: [
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
        {
          name: "Paracetamol",
          dose: "1 tablet",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col px-4 py-6 overflow-y-auto pb-[80px]">
      {mockData.map((block) => (
        <MedicineBlock time={block.time} medicinces={block.medicinces} />
      ))}
    </div>
  );
};

interface MedicineBlockProps {
  time: string;
  medicinces: Array<{
    name: string;
    dose: string;
  }>;
}

const MedicineBlock: FC<MedicineBlockProps> = ({ time, medicinces }) => {
  return (
    <div className="flex flex-col w-full mt-6 first:mt-0">
      <span className="text-lg font-semibold text-white mb-1">{time}</span>
      <div className="flex flex-col w-full">
        {medicinces.map((medicine) => (
          <MedicineItem name={medicine.name} dose={medicine.dose} />
        ))}
      </div>
    </div>
  );
};

interface MedicineItemProps {
  name: string;
  dose: string;
}

const MedicineItem: FC<MedicineItemProps> = ({ name, dose }) => {
  return (
    <div className="flex bg-white px-4 py-3 first:rounded-t-[10px] last:rounded-b-[10px]">
      <div className="flex p-2.5 rounded-lg bg-blue-white text-blue">
        <IconPillBig />
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-lg text-text">{name}</span>
        <span className="text-sm mt-1 text-blue-gray">{dose}</span>
      </div>
    </div>
  );
};

export default PatientHome;
