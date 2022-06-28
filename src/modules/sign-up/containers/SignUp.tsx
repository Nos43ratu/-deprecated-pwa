import React from "react";
import Role from "./Role";
import Info from "./Info";
import Data from "./Data";
import Verify from "./Verify";
import { SignUpContextProvider } from "../context/useSignUp";

const SignUp = () => {
  return (
    <SignUpContextProvider>
      <div className="flex flex-col w-full h-full">
        <Role />
        <Info />
        <Data />
        <Verify />
      </div>
    </SignUpContextProvider>
  );
};

export default SignUp;
