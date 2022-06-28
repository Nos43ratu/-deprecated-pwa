import React, { useEffect, useRef, useState } from "react";
import { SignUpStep, useSignUp } from "../context/useSignUp";
import { SlideFromRightLayout } from "@layouts";
import { Alert, Button, Logo } from "@ui-kit";
import { useNavigate } from "react-router-dom";
import { useCode } from "../../../shared/hooks";
import { verifyCodeMutation } from "@api";
import { useMutation } from "react-query";
import clsx from "clsx";

const Verify = () => {
  const { step } = useSignUp();

  return (
    <SlideFromRightLayout
      isOpen={step === SignUpStep.VERIFY}
      wrapperId="info-popup"
    >
      <div className="flex flex-col h-full bg-white">
        <Form />
      </div>
    </SlideFromRightLayout>
  );
};

const initalState = {
  code_1: "",
  code_2: "",
  code_3: "",
  code_4: "",
};

const Form = () => {
  const { data, role } = useSignUp();
  const [error, setError] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<number>(1233);
  const navigate = useNavigate();
  const onlyOnce = useRef(true);
  const [code, handleChange] = useCode<typeof initalState>(initalState, () => {
    setError(false);
  });

  const verify = useMutation("verify", verifyCodeMutation, {
    onSuccess: (data) => {
      setVerifyCode(data.message);
    },
  });

  useEffect(() => {
    if (onlyOnce.current) {
      onlyOnce.current = false;
      verify.mutate({
        contactNumber: data?.contactNumber ?? "0",
      });
    }
  }, []);

  const onVerify = () => {
    const _code = Object.values(code).join("");
    if (String(_code) === String(verifyCode)) {
      return navigate(`/${role}`);
    }
    setError(true);
  };

  return (
    <div className="flex flex-col px-4 justify-between h-full">
      <form className="flex-1 flex w-full flex-col items-center pt-[100px]">
        <Logo className="mb-10" />
        <span className="text-sm font-medium">
          We have sent a message to{" "}
          <span className="text-blue">{data?.contactNumber}</span>. Please,
          enter the code to activate your account.
        </span>
        <div className="flex mt-6 justify-between w-full">
          <input
            id="1"
            name="code_1"
            type="number"
            placeholder="-"
            className="rounded-[10px] bg-blue-white w-[56px] h-[56px] text-sm text-blue-gray pl-6 pt-2.5 border-none outline-none"
            onChange={handleChange}
            value={code.code_1}
          />
          <input
            id="2"
            name="code_2"
            type="number"
            placeholder="-"
            className="rounded-[10px] bg-blue-white w-[56px] h-[56px] text-sm text-blue-gray pl-6 pt-2.5 border-none outline-none"
            onChange={handleChange}
            value={code.code_2}
          />
          <input
            id="3"
            name="code_3"
            type="number"
            placeholder="-"
            className="rounded-[10px] bg-blue-white w-[56px] h-[56px] text-sm text-blue-gray pl-6 pt-2.5 border-none outline-none"
            onChange={handleChange}
            value={code.code_3}
          />
          <input
            id="4"
            name="code_4"
            type="number"
            placeholder="-"
            className="rounded-[10px] bg-blue-white w-[56px] h-[56px] text-sm text-blue-gray pl-6 pt-2.5 border-none outline-none"
            onChange={handleChange}
            value={code.code_4}
          />
        </div>
        <Button
          className="mt-6"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onVerify();
          }}
        >
          Verify
        </Button>
        <span className="mt-2 text-sm font-medium">
          Don’t have an account yet?&nbsp;
          <Button href="/sign-up">Sign up.</Button>
        </span>
      </form>
      <p className="font-medium text-sm mb-12 text-center">
        Already have an account?&nbsp;
        <Button href="/sign-in">Login</Button>
      </p>
      <Alert
        className={clsx(
          "absolute left-5 right-5 transition-all duration-150",
          { "bottom-[-100%]": !error },
          { "bottom-20": error }
        )}
      >
        Invalid code.
      </Alert>
    </div>
  );
};

export default Verify;
