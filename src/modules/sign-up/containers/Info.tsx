import React from "react";
import { SignUpStep, useSignUp } from "../context/useSignUp";
import { SlideFromRightLayout } from "@layouts";
import { IconChevronRight } from "@icons";
import { useForm } from "react-hook-form";
import { Button, Input, Logo, Select } from "@ui-kit";

const Info = () => {
  const { step } = useSignUp();

  return (
    <SlideFromRightLayout
      isOpen={
        step === SignUpStep.INFO ||
        step === SignUpStep.DATA ||
        step === SignUpStep.VERIFY
      }
      wrapperId="info-popup"
    >
      <div className="flex flex-col h-full bg-white">
        <Header />
        <Form />
      </div>
    </SlideFromRightLayout>
  );
};

const Header = () => {
  const { setStep, setRole } = useSignUp();

  const handleGoBack = () => {
    setRole(null);
    setStep(SignUpStep.ROLE);
  };

  return (
    <div className="w-full flex px-2 py-2.5">
      <button
        className="text-blue flex items-center text-lg justify-center"
        onClick={handleGoBack}
      >
        <IconChevronRight className="rotate-180 w-6 h-6" />
        <span className="ml-[5px]">Back</span>
      </button>
    </div>
  );
};

const Form = () => {
  const { setStep, setInfo, role } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    setInfo(data);
    setStep(SignUpStep.DATA);
  };

  const isDoctor = role === "doctor";

  return (
    <div className="flex flex-col px-4 justify-between h-full">
      <form
        className="flex-1 flex w-full flex-col items-center pt-[100px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Logo className="mb-10" />
        <Input
          wrapperClassName="w-full"
          label="Name"
          aria-invalid={!!errors.firstName}
          error={!!errors.firstName}
          placeholder="Name"
          {...register("firstName", {
            required: true,
          })}
        />
        <Input
          wrapperClassName="mt-4 w-full"
          label="Surname"
          aria-invalid={!!errors.lastName}
          error={!!errors.lastName}
          placeholder="Surname"
          {...register("lastName", {
            required: true,
          })}
        />
        {isDoctor && (
          <Input
            wrapperClassName="w-full"
            label="IIN"
            aria-invalid={!!errors.iin}
            error={!!errors.iin}
            placeholder="Individual identification number"
            {...register("iin", {
              required: true,
            })}
          />
        )}
        <div className="flex w-full mt-4">
          <Input
            wrapperClassName="w-full"
            label="Birth date"
            aria-invalid={!!errors.birthDate}
            error={!!errors.birthDate}
            placeholder="dd.mm.yyyy"
            type="date"
            {...register("birthDate", {
              required: true,
            })}
          />
          <Select
            label="Gender"
            wrapperClassName="w-full ml-4"
            {...register("gender", {
              required: true,
            })}
          >
            <option value="false">Male</option>
            <option value="true">Female</option>
          </Select>
        </div>
        <Button
          className="mt-auto mb-6 flex items-center justify-center"
          disabled={!isValid}
          type="submit"
        >
          Continue
          <IconChevronRight className="ml-3" />
        </Button>
      </form>
      <p className="font-medium text-sm mb-12 text-center">
        Already have an account?&nbsp;
        <Button href="/sign-in">Login</Button>
      </p>
    </div>
  );
};

export default Info;
