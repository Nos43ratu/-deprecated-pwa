import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { ApplicationType, getApplicationMode, isIos } from "@utils";
import { IconDownload, IconEasyMedLogo } from "@icons";
import clsx from "clsx";

const isProd = process.env.NODE_ENV !== "development";

export const ProtectedPwaLayout = () => {
  const [applicationMode, setApplicationMode] =
    useState<ApplicationType>("browser");
  const [isIosAgent, setIsIosAgent] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  const deferredPromptRef = useRef<any>(null);

  useEffect(() => {
    setApplicationMode(getApplicationMode());
    setIsIosAgent(isIos());
  }, []);

  useEffect(() => {
    const beforeInstallHandler = (e: Event) => {
      e.preventDefault();
      deferredPromptRef.current = e;
    };

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("appinstalled", () => {
      setShowIosGuide(false);
    });
  }, []);

  const handleInstall = () => {
    if (isIosAgent) {
      return setShowIosGuide(true);
    }
    deferredPromptRef.current.prompt();
    deferredPromptRef.current.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        setShowIosGuide(false);
      }
    });
  };

  return (
    <div className="h-full overflow-hidden relative">
      <Outlet />
      {isProd && applicationMode === "browser" && (
        <div className="absolute w-full h-full bg-blue z-10 top-0 left-0">
          <div className="text-white w-full h-full flex flex-col items-center justify-center text-lg font-medium px-4 text-center">
            <IconEasyMedLogo />
            <h1>Welcome to easymed</h1>
            <p>easymed is pwa app you have to install it to able to use it</p>
            <button
              className="bg-white text-blue rounded-lg w-full mt-10 text-lg py-3"
              onClick={handleInstall}
            >
              Install
            </button>
          </div>
          <div
            className={clsx(
              "absolute px-4 pb-8 bottom-0 transition-transform",
              {
                "translate-y-0": showIosGuide,
              },
              { "translate-y-full": !showIosGuide }
            )}
          >
            <div className="bg-blue-white flex flex-col rounded-xl">
              <div className="flex px-5 py-3 items-center border-b-2">
                <div className="flex items-center justify-center bg-white shadow-2xl p-3 rounded-lg">
                  <IconDownload />
                </div>
                <span className="ml-4 font-medium text-lg">
                  Install easymed
                </span>
              </div>
              <div className="flex flex-col px-5 py-2 font-medium">
                <p>
                  Install the app on your device to easily access it anytime. No
                  app store. No download. No hassle.
                </p>
                <span>
                  1. Tab on <code>share</code>
                </span>
                <span>
                  2. Select <code>Add to Home Screen</code>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtectedPwaLayout;
