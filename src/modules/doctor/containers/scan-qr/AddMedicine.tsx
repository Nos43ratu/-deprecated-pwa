import React, { FC } from "react";
import { Step, useScanner } from "../../context/useScanner";
import SlideFromRightLayout from "../../../../shared/layouts/SlideFromRightLayout/SlideFromRightLayout";
import { Input, Select, Textarea } from "@ui-kit";
import { HeaderLayout } from "@layouts";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import CheckboxGroup from "../../../../shared/ui/CheckboxGroup/CheckboxGroup";
import CheckBoxWithIcon from "../../../../shared/ui/CheckBoxWithIcon/CheckBoxWithIcon";
import {
  IconInhale,
  IconInjection,
  IconPillBig,
  IconPills,
  IconTube,
} from "@icons";
import IconSyrup from "../../../../shared/icons/IconSyrup";
import { useMutation } from "react-query";
import { addReceptMutation } from "@api";

const AddMedicine = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const { step, setStep, patientId, prescriptionId, setMedicines } =
    useScanner();

  const addRecept = useMutation("addRecept", addReceptMutation, {
    onSuccess: async () => {
      setStep(Step.ADD_PRESCRIPTION);
    },
  });

  const onSubmit = async (data: any) => {
    const userData = window.localStorage.getItem("userData");
    const doctorId = JSON.parse(userData!).id;
    await addRecept.mutate({
      userId: patientId,
      doctorId,
      period_Of_date: "",
      isActive: true,
      prescription: prescriptionId,
      ...data,
    });
    setMedicines((prev: any) => [
      ...prev,
      {
        userId: patientId,
        doctorId,
        period_Of_date: "",
        isActive: true,
        prescription: prescriptionId,
        ...data,
      },
    ]);
  };

  const isOpen = step === Step.ADD_MEDICINE;

  return (
    <SlideFromRightLayout isOpen={isOpen}>
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
      <Input
        label="Medicine"
        aria-invalid={!!errors.medicineName}
        error={!!errors.medicineName}
        placeholder="Medicine name"
        {...register("medicineName", {
          required: true,
          minLength: 2,
        })}
      />
      <div className="flex w-full mt-4 items-end space-x-[14px]">
        <div className="flex-1">
          <Input
            wrapperClassName="w-full"
            label="Dosage"
            aria-invalid={!!errors.dosage}
            error={!!errors.dosage}
            placeholder="Strength"
            {...register("dosage", {
              required: true,
            })}
          />
        </div>
        <div className="flex-1">
          <Select
            placeholder="Units"
            {...register("dosageType", {
              required: true,
            })}
          >
            <option value="ml">ml</option>
            <option value="pills">pills</option>
          </Select>
        </div>
      </div>
      <CheckboxGroup
        label="Type"
        error={!!errors.medicineType}
        className="text-[#C4C4C4] p-4 justify-between"
      >
        <CheckBoxWithIcon
          defaultChecked
          className="peer-checked:text-blue"
          value="tablet"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconPillBig width="w-9" height="h-9" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:text-blue"
          value="pills"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconPills width="w-9" height="h-9" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:text-blue"
          value="syrup"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconSyrup width="w-9" height="h-9" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:text-blue"
          value="injection"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconInjection width="w-9" height="h-9" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:text-blue"
          value="tube"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconTube width="w-9" height="h-9" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:text-blue"
          value="inhale"
          {...register("medicineType", {
            required: true,
          })}
        >
          <IconInhale width="w-9" height="h-9" />
        </CheckBoxWithIcon>
      </CheckboxGroup>
      <CheckboxGroup
        label="Color"
        className="p-4 justify-between"
        error={!!errors.color}
      >
        <CheckBoxWithIcon
          defaultChecked
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="white"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-white" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="yellow"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-system-yellow" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="blue"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-blue" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="green"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-system-green" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="pink"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-system-pink" />
        </CheckBoxWithIcon>
        <CheckBoxWithIcon
          className="peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-blue rounded-full"
          value="indigo"
          {...register("color", {
            required: true,
          })}
        >
          <div className="w-9 h-9 rounded-full bg-system-indigo" />
        </CheckBoxWithIcon>
      </CheckboxGroup>
      <Textarea
        label="Notes"
        error={!!errors.notes}
        {...register("notes", {
          required: true,
        })}
      />
    </div>
  );
};

const Header = ({ isValid }: { isValid: boolean }) => {
  const { setStep } = useScanner();

  const handleGoBack = () => setStep(Step.ADD_PRESCRIPTION);

  const backButton = (
    <button
      className="text-blue flex items-center text-lg justify-start"
      onClick={handleGoBack}
      type="button"
    >
      Cancel
    </button>
  );

  const nextButton = (
    <button
      className="text-blue flex items-start text-lg justify-end w-[55px] disabled:text-blue-gray"
      disabled={!isValid}
      type="submit"
    >
      Next
    </button>
  );
  return (
    <HeaderLayout leftNode={backButton} rightNode={nextButton}>
      Add medicine
    </HeaderLayout>
  );
};

export default AddMedicine;
