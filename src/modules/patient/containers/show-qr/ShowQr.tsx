import React, { useEffect, useState } from "react";
import { Heading } from "@ui-kit";
import QRCode from "react-qr-code";

const ShowQr = () => {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const userData = window.localStorage.getItem("userData");
    const id = JSON.parse(userData!).id;

    setQrCode(JSON.stringify({ patientId: id }));
  }, []);

  return (
    <div className="flex flex-col items-center bg-blue w-full h-full px-10 text-white">
      <Heading className="mt-12">My QR code</Heading>
      <div className="mt-[110px] bg-white flex justify-center items-center w-full py-[110px] rounded-[10px]">
        <QRCode value={qrCode} size={200} />
      </div>
      <p className="text-sm font-medium tracking-wide mt-8">
        Let your doctor scan this QR code
      </p>
    </div>
  );
};

export default ShowQr;
