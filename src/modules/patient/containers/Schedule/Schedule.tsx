import React, { FC, useEffect, useMemo, useState } from "react";
import { CabinetHeaderLayout } from "@layouts";
import { ScheduleContextProvider, useSchedule } from "../context/useSchedule";
import { IconLoader } from "@icons";
import AddMedicine from "./AddMedicine";
import AddSchedule from "./AddSchedule";
import IconPillBig from "../../../../shared/icons/IconPillBig";

const Schedule = () => {
  return (
    <div className="flex flex-col h-full">
      <ScheduleContextProvider>
        <MainHeader />
        <MainBody />
      </ScheduleContextProvider>
    </div>
  );
};

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const { activeDate, setActiveDate, dates } = useSchedule();

  const [addMedicineOpen, setAddMedicineOpen] = useState(false);
  const [addScheduleOpen, setAddScheduleOpen] = useState(false);

  return (
    <div className="flex flex-col relative bg-blue">
      <CabinetHeaderLayout>
        <div className="flex justify-between items-ceneter">
          <span>Medications schedule</span>
          <button onClick={() => setOpen(!open)}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.5V19.5"
                stroke="#2E75FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12.5H19"
                stroke="#2E75FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </CabinetHeaderLayout>
      <div className="flex items-center p-4 rounded-b-lg w-full overflow-y-auto bg-white">
        {dates.map((date) => (
          <button
            key={date.iso}
            onClick={() => setActiveDate(date)}
            className={`flex flex-col text-white rounded-lg py-1 px-[4px] items-center justify-center mr-3 last:mr-0 min-w-[38px]
            ${
              activeDate?.iso === date.iso
                ? "bg-blue text-white"
                : "bg-[#F7F7F7] text-[#96A6C2]"
            }`}
          >
            <span className="text-sm h-[20px] mb-[6px]">{date.date}</span>
            <span className="text-xs h-[20px]">{date.day}</span>
          </button>
        ))}
      </div>
      <div
        className={`absolute flex w-full flex-col items-start justify-center text-sm left-0 text-text w-full bg-[#F7F7F7] transform transition-all h-[88px] px-4 divide-y divide-[rgba(150, 166, 194, 0.2)] ${
          open ? "bottom-0" : "bottom-full"
        }`}
      >
        <button
          onClick={() => setAddMedicineOpen(true)}
          className="py-2.5 w-full text-left"
        >
          Schedule Med
        </button>
        <button className="py-2.5 w-full text-gray-400 text-left">
          Add Medicine
        </button>
      </div>
      <AddMedicine
        open={addMedicineOpen}
        setAddMedicineOpen={setAddMedicineOpen}
        setAddScheduleOpen={setAddScheduleOpen}
      />
      <AddSchedule
        addScheduleOpen={addScheduleOpen}
        setAddMedicineOpen={setAddMedicineOpen}
        setAddScheduleOpen={setAddScheduleOpen}
        setOpen={setOpen}
      />
    </div>
  );
};

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

const MainBody = () => {
  const { data, isLoading, activeDate } = useSchedule();
  const [meds, setMeds] = useState([]);

  const schedules = useMemo(() => {
    if (data) {
      return data?.map((e) => ({
        ...e,
        from: new Date(e.startDate).getDate(),
        to: new Date(e.endDate).getDate(),
        times: e.times.map((e) => new Date(e).getHours()),
      }));
    }
    return [];
  }, [data]);

  useEffect(() => {
    if (schedules) {
      const _arr = schedules.map((e) => e?.receptId);
      getMedicinces(_arr).then((r) => setMeds(r));
    }
  }, [schedules]);

  const medicines = useMemo(() => {
    if (meds.length > 0 && schedules.length > 0 && activeDate) {
      const arr = schedules
        .filter((e) => e.from <= activeDate.date && e.to >= activeDate.date)
        .map((e) => e.times)
        .flat()
        .filter(function (item, pos, self) {
          return self.indexOf(item) === pos;
        })
        .sort((a, b) => a - b);

      return arr.map((t) => {
        const schedule = schedules.filter((e) => e.times.includes(t));
        return {
          time: t,
          medicines: schedule.map((i) =>
            meds.find((e: any) => e._id === i.receptId)
          ),
        };
      });
    }
    return [];
  }, [meds, schedules, activeDate]);

  return (
    <div className="flex flex-col w-full h-full bg-blue pb-[140px]">
      {isLoading && meds ? (
        <div className="flex text-white items-center justify-center h-full">
          <IconLoader className="w-12 h-12" />
        </div>
      ) : (
        <div className="flex flex-col overflow-x-auto h-full px-4 pt-6">
          {medicines.length > 0 ? (
            medicines.map((e) => (
              <div
                key={e?.time}
                className="flex flex-col w-full mt-6 first:mt-0"
              >
                <span className="text-lg font-semibold text-white mb-1">
                  {`${e?.time > 9 ? e?.time : `0${e?.time}`}:00`}
                </span>
                <div className="flex flex-col w-full">
                  {e?.medicines.map((medicine: any) => (
                    <MedicineItem key={medicine?._id} medicine={medicine} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-lg flex text-white h-full w-full items-center justify-center">
              <span>No medications for today</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface MedicineItemProps {
  medicine: any;
}

const MedicineItem: FC<MedicineItemProps> = ({ medicine }) => {
  const [selected, setSelected] = useState(false);

  const colors: any = {
    white: "text-blue",
    yellow: "text-yellow-400",
    blue: "text-blue",
    green: "text-green-500",
    pink: "text-system-pink",
    indigo: "text-system-indigo",
  };

  useEffect(() => {
    const storage =
      window.localStorage.getItem(`medicine-${medicine?._id}`) ?? "";

    if (storage) {
      const data = JSON.parse(storage ?? "");
      if (data) {
        setSelected(true);
      }
    }
  }, []);

  const handleSelect = () => {
    setSelected(!selected);
    if (selected) {
      return window.localStorage.setItem(
        `medicine-${medicine?._id}`,
        JSON.stringify("")
      );
    }

    return window.localStorage.setItem(
      `medicine-${medicine?._id}`,
      JSON.stringify(medicine?._id)
    );
  };

  return (
    <div className="flex bg-white px-4 py-3 first:rounded-t-[10px] last:rounded-b-[10px] items-center">
      <div
        className={`flex p-2.5 rounded-lg bg-blue-white ${
          colors[medicine?.color]
        }`}
      >
        <IconPillBig />
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-lg text-text">{medicine?.medicineName}</span>
        <span className="text-sm mt-1 text-blue-gray">{`${medicine?.dosage} ${medicine?.medicineType}, ${medicine?.notes}`}</span>
      </div>
      <button
        onClick={handleSelect}
        className={`${
          selected ? "bg-blue" : "bg-white"
        } rounded-full border w-6 h-6 ml-auto border-blue flex items-center justify-center`}
      >
        {selected && (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.025 0.400049C10.725 0.100049 10.275 0.100049 9.975 0.400049L4.35 6.02505L2.025 3.70005C1.725 3.40005 1.275 3.40005 0.975 3.70005C0.675 4.00005 0.675 4.45005 0.975 4.75005L3.825 7.60005C3.975 7.75005 4.125 7.82505 4.35 7.82505C4.575 7.82505 4.725 7.75005 4.875 7.60005L11.025 1.45005C11.325 1.15005 11.325 0.700049 11.025 0.400049Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Schedule;
