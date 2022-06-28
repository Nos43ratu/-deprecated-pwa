import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { Button, Heading } from "@ui-kit";
import { Step, useScanner } from "../../context/useScanner";
import clsx from "clsx";
import { parseString } from "@utils";

const Scanner = () => {
  const { step, setStep, setPatientId } = useScanner();
  const [invalidQr, setInvalidQr] = useState(false);
  const videoContainerRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);

  useEffect(() => {
    if (videoContainerRef.current) {
      scannerRef.current = new QrScanner(
        videoContainerRef.current,
        (result) => {
          const data = parseString(result.data);

          if (data?.patientId) {
            setPatientId(data.patientId);
            setStep(Step.ADD_PRESCRIPTION);
          } else {
            setInvalidQr(true);
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 1,
        }
      );

      return () => {
        if (scannerRef.current) {
          scannerRef.current.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (step === Step.SCAN_QR) {
      scannerRef.current?.start();
    } else {
      scannerRef.current?.stop();
    }
  }, [step]);

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center justify-center pt-12 pb-2 bg-blue text-white">
        <Heading>Scan QR</Heading>
        <button
          onClick={() => {
            setPatientId("62aee33c2c34bf0034e7e791");
            setStep(Step.ADD_PRESCRIPTION);
          }}
        >
          asd
        </button>
      </div>
      <div className="flex-1">
        <video className="h-full w-full object-fill" ref={videoContainerRef} />
      </div>
      <div
        className={clsx(
          "absolute top-1/2 w-full px-5 transform -translate-y-1/2 transition-opacity duration-300",
          { "z-10 opacity-100": invalidQr },
          { "z-[-1] opacity-0": !invalidQr }
        )}
      >
        <div className="flex flex-col bg-white rounded-2xl p-4 items-center">
          <span className="text-lg text-text font-semibold">
            QR code not recognized
          </span>
          <Button className="mt-5 " onClick={() => setInvalidQr(false)}>
            Scan again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
