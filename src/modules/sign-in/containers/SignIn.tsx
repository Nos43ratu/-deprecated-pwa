import React from "react";
import { Button, Logo, Text } from "@ui-kit";
import SignInForm from "./SignInForm";

export const SignIn = () => {
  return (
    <div className="flex flex-col items-center pt-[180px] px-4 h-full overflow-hidden relative">
      <Logo className="mb-10" />
      <SignInForm />
      <Text className="mt-auto mb-12">
        Don’t have an account yet?&nbsp;
        <Button href="/sign-up">Sign up.</Button>
      </Text>
    </div>
  );
};

export default SignIn;
