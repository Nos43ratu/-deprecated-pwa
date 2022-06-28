import React from "react";
import { SignUpStep, useSignUp } from "../context/useSignUp";
import { Button, Heading } from "@ui-kit";
import { RoleType } from "@context";

const Role = () => {
  const { setStep, setRole } = useSignUp();

  const handleSelectRole = (role: RoleType) => {
    setRole(role);
    setStep(SignUpStep.INFO);
  };

  return (
    <div className="h-full flex flex-col items-center px-4">
      <div className="flex flex-col justify-center items-center flex-1 w-full">
        <Heading className="text-blue mb-6">Choose who you are</Heading>
        <div className="flex justify-between text-lg w-full">
          <button
            className="text-blue w-[165px] h-[165px] rounded-lg border-2 border-blue"
            onClick={() => handleSelectRole("doctor")}
          >
            I am a doctor
          </button>
          <button
            className="text-blue w-[165px] h-[165px] rounded-lg border-2 border-blue"
            onClick={() => handleSelectRole("patient")}
          >
            I am a patient
          </button>
        </div>
      </div>
      <p className="font-medium text-sm mb-12">
        Already have an account?&nbsp;
        <Button href="/sign-in">Login</Button>
      </p>
    </div>
  );
};

export default Role;
