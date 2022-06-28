import React from "react";
import { SignUpStep, useSignUp } from "../context/useSignUp";
import { SlideFromRightLayout } from "@layouts";
import { IconChevronRight } from "@icons";
import { useForm } from "react-hook-form";
import { Alert, Button, Input, Logo } from "@ui-kit";
import WithHidePassword from "../../../shared/components/WithHidePassword/WithHidePassword";
import clsx from "clsx";
import { useMutation } from "react-query";
import { registerMutation } from "@api";
import { AxiosError } from "axios";
import jwt_decode from "jwt-decode";

const Data = () => {
  const { step } = useSignUp();

  return (
    <SlideFromRightLayout
      isOpen={step === SignUpStep.DATA || step === SignUpStep.VERIFY}
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
  const { setStep } = useSignUp();

  const handleGoBack = () => {
    setStep(SignUpStep.INFO);
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
  const { info, role, setStep, setData } = useSignUp();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const registerUser = useMutation("register", registerMutation, {
    onSuccess: (data) => {
      if (data._id) {
        const userData = { role: "doctor", id: data._id };
        window.localStorage.setItem("userData", JSON.stringify(userData));
      }
      setStep(SignUpStep.VERIFY);
    },
    onError: (error: AxiosError) => {
      const code = (error?.response?.data as { code: number }).code;

      if (code === 11000) {
        setError("contactNumber", {
          message: "User with this contact number already exists",
        });
      }
    },
  });

  const onSubmit = async (data: any) => {
    await registerUser.mutate({
      ...data,
      name: info?.firstName,
      surname: info?.lastName,
      birthDate: info?.birthDate,
      gender: info?.gender,
      iin: info?.iin,
      role,
    });
    setData(data);
  };

  return (
    <div className="flex flex-col px-4 justify-between h-full">
      <form
        className="flex-1 flex w-full flex-col items-center pt-[100px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Logo className="mb-10" />
        <Input
          wrapperClassName="w-full"
          label="Contact number"
          aria-invalid={!!errors.contactNumber}
          error={!!errors.contactNumber}
          placeholder="Contact number"
          {...register("contactNumber", {
            required: true,
          })}
        />
        <Input
          wrapperClassName="w-full mt-4"
          label="Email address"
          aria-invalid={!!errors.email}
          error={!!errors.email}
          placeholder="What’s your email address?"
          {...register("email", {
            required: true,
          })}
        />
        <WithHidePassword className="w-full">
          {(type) => (
            <Input
              wrapperClassName="mt-4 w-full"
              label="Password"
              aria-invalid={!!errors.password}
              error={!!errors.password}
              placeholder="Password"
              type={type}
              {...register("password", {
                required: true,
                minLength: 2,
              })}
            />
          )}
        </WithHidePassword>
        <Button
          className="mt-auto mb-6 flex items-center justify-center"
          disabled={!isValid}
          type="submit"
        >
          Continue
          <IconChevronRight className="ml-3" />
        </Button>
        <Alert
          className={clsx(
            "absolute left-5 right-5 transition-all duration-150",
            { "bottom-[-100%]": !errors?.contactNumber?.message },
            { "bottom-40": errors?.contactNumber?.message }
          )}
        >
          {errors?.contactNumber?.message}
        </Alert>
      </form>
      <p className="font-medium text-sm mb-12 text-center">
        Already have an account?&nbsp;
        <Button href="/sign-in">Login</Button>
      </p>
    </div>
  );
};

export default Data;
