import React, { FC } from "react";
import { SlideFromRightLayout } from "../../../../shared/layouts/SlideFromRightLayout";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { HeaderLayout } from "@layouts";
import { Input, Select } from "@ui-kit";
import { useSchedule } from "../context/useSchedule";
import { useUser } from "../../../../shared/context/useUser";

const AddSchedule = ({
  addScheduleOpen,
  setAddScheduleOpen,
  setAddMedicineOpen,
  setOpen,
}: {
  addScheduleOpen: boolean;
  setAddScheduleOpen: (d: boolean) => void;
  setAddMedicineOpen: (d: boolean) => void;
  setOpen: (d: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const { id } = useUser();

  const { receptId, refetch } = useSchedule();

  const onSubmit = async (data: any) => {
    await fetch("https://api.isaaa.site/med/calendar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        receptId,
        userId: id,
        days: [data.days],
        times: data.times.map((e: number) => new Date(0, 0, 0, e, 0)),
      }),
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
      .then(() => {
        refetch();
        setOpen(false);
        setAddScheduleOpen(false);
        setAddMedicineOpen(false);
      });
  };

  return (
    <SlideFromRightLayout
      isOpen={addScheduleOpen}
      wrapperId={"addScheduleOpen"}
    >
      <form
        className="w-full h-full flex flex-col bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Header isValid={isValid} />
        <Body register={register} errors={errors} />
      </form>
    </SlideFromRightLayout>
  );
};

interface BodyProps {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

const Body: FC<BodyProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <Select
        label="Frequency"
        placeholder="Every Day"
        {...register("frequency", {
          required: true,
        })}
      >
        <option value="Every Day">Every Day</option>
        <option value="Specific Days">Specific Days</option>
        <option value="As Needed">As Needed</option>
        <option value="Days Interval">Days Interval</option>
      </Select>
      <Select
        label="How many times a day?"
        placeholder="Once Day"
        {...register("days", {
          required: true,
        })}
      >
        <option value="Once Day">Once Day</option>
        <option value="2 times a Day">2 times a Day</option>
        <option value="3 times a Day">3 times a Day</option>
        <option value="4 times a Day">4 times a Day</option>
        <option value="5 times a Day">5 times a Day</option>
        <option value="6 times a Day">6 times a Day</option>
      </Select>
      <Select
        label="Set time"
        placeholder="08:00"
        multiple
        {...register("times", {
          required: true,
        })}
      >
        {new Array(25).fill("").map((_, i) => (
          <option key={i} value={i}>{`${i > 9 ? i : `0${i}`}:00`}</option>
        ))}
      </Select>
      <div className="flex w-full mt-4 items-end space-x-[14px]">
        <div className="flex-1">
          <Input
            wrapperClassName="w-full"
            label="Start date"
            aria-invalid={!!errors.birthDate}
            error={!!errors.birthDate}
            placeholder="dd.mm.yyyy"
            type="date"
            {...register("startDate", {
              required: true,
            })}
          />
        </div>
        <div className="flex-1">
          <Input
            wrapperClassName="w-full"
            label="End date"
            aria-invalid={!!errors.birthDate}
            error={!!errors.birthDate}
            placeholder="dd.mm.yyyy"
            type="date"
            {...register("endDate", {
              required: true,
            })}
          />
        </div>
      </div>
    </div>
  );
};

const Header = ({ isValid }: { isValid: boolean }) => {
  const nextButton = (
    <button
      className="text-blue flex items-start text-lg justify-end w-[55px] disabled:text-blue-gray"
      disabled={!isValid}
      type="submit"
    >
      Done
    </button>
  );
  return <HeaderLayout rightNode={nextButton}>Add medicine</HeaderLayout>;
};

export default AddSchedule;
