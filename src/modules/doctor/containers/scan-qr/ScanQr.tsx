import React from "react";
import { ScannerContextProvider } from "../../context/useScanner";
import Scanner from "./Scanner";
import AddPrescription from "./AddPrescription";
import AddMedicine from "./AddMedicine";

const ScanQr = () => {
  return (
    <main className="h-full flex flex-col bg-blue overflow-x-hidden">
      <ScannerContextProvider>
        <Scanner />
        <AddPrescription />
        <AddMedicine />
      </ScannerContextProvider>
    </main>
  );
};

export default ScanQr;
