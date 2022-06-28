import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@api";
import { setToken } from "@utils";
import jwt_decode from "jwt-decode";
import { authorization_alerts } from "../../../shared/constants";
import { Alert, Button, Input } from "@ui-kit";
import { WithHidePassword } from "@components";
import clsx from "clsx";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const loginMutation = useLogin({
    onSuccess: (data) => {
      setToken({
        accessToken: data.access,
        refreshToken: data.refresh,
      });
      const userData = jwt_decode(data.access) as { role: string; id: string };
      console.log(userData);
      window.localStorage.setItem("userData", JSON.stringify(userData));
      navigate(`/${userData.role}`);
    },
    onError: (error) => {
      const data = error.response?.data as {
        type: string;
      };
      switch (data.type) {
        case "USER_NOT_FOUND":
          return setError("contactNumber", {
            message: authorization_alerts[data.type],
          });
        case "USER_INCORRECT_PASSWORD":
          return setError("password", {
            message: authorization_alerts[data.type],
          });
      }
    },
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Contact number"
        aria-invalid={!!errors.contactNumber}
        error={!!errors.contactNumber}
        placeholder="What’s your contact number?"
        {...register("contactNumber", {
          required: true,
          minLength: 2,
        })}
      />
      <WithHidePassword>
        {(type) => (
          <Input
            wrapperClassName="w-full mt-4"
            label="Password"
            type={type}
            aria-invalid={!!errors.password}
            error={!!errors.password}
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 2,
            })}
          />
        )}
      </WithHidePassword>
      {/*<Button className="mt-3 ml-auto" href="/doctor">*/}
      {/*  Forgot password?*/}
      {/*</Button>*/}
      {/*<Button className="mt-3 ml-auto" href="/patient">*/}
      {/*  Forgot password?*/}
      {/*</Button>*/}
      <Button
        className="mt-10"
        disabled={!isDirty || !isValid}
        type="submit"
        loading={loginMutation.isLoading}
      >
        Log in
      </Button>
      <Alert
        className={clsx(
          "absolute left-5 right-5 transition-all duration-150",
          { "bottom-[-100%]": !errors?.contactNumber?.message },
          { "bottom-20": errors?.contactNumber?.message }
        )}
      >
        {errors?.contactNumber?.message}
      </Alert>
      <Alert
        className={clsx(
          "absolute left-5 right-5 transition-all duration-150",
          { "bottom-[-100%]": !errors?.password?.message },
          { "bottom-20": errors?.password?.message }
        )}
      >
        {errors?.password?.message}
      </Alert>
    </form>
  );
};

export default SignInForm;
