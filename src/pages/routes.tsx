import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import {
  DoctorCabinetLayout,
  PatientCabinetLayout,
  ProtectedPwaLayout,
} from "@layouts";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";
import {
  PatientHome,
  PatientProfilePage,
  PatientQrCode,
  PatientHistory,
} from "./patient";
import { DoctorHistory, DoctorProfile, PageDoctorScanQr } from "./doctor";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedPwaLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "doctor",
        element: <DoctorCabinetLayout />,
        children: [
          {
            path: "scan-qr",
            element: <PageDoctorScanQr />,
          },
          {
            path: "profile",
            element: <DoctorProfile />,
          },
          {
            path: "history",
            element: <DoctorHistory />,
          },
          {
            path: "/doctor",
            element: <Navigate to="history" />,
          },
        ],
      },
      {
        path: "patient",
        element: <PatientCabinetLayout />,
        children: [
          {
            path: "profile",
            element: <PatientProfilePage />,
          },
          {
            path: "home",
            element: <PatientHome />,
          },
          {
            path: "qr-code",
            element: <PatientQrCode />,
          },
          {
            path: "history",
            element: <PatientHistory />,
          },
          {
            path: "/patient",
            element: <Navigate to="home" />,
          },
        ],
      },
      {
        path: "/",
        element: <Navigate to="sign-in" />,
      },
    ],
  },
];

const Routes = () => useRoutes(routes);

export default Routes;
