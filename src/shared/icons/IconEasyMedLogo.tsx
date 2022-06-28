import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
}

const IconEasyMedLogo: FC<SVGAttributes<IconPropsType>> = ({ className }) => (
  <svg
    className={clsx(className)}
    width="120"
    height="119"
    viewBox="0 0 120 119"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_144_3532)">
      <path
        d="M20 29C20 20.1634 27.1634 13 36 13H84C92.8366 13 100 20.1634 100 29V77C100 85.8366 92.8366 93 84 93H36C27.1634 93 20 85.8366 20 77V29Z"
        fill="white"
      />
      <path
        d="M62.9561 46.1142C66.4074 51.0431 68.2371 56.3193 68.4722 60.8133C68.7087 65.3339 67.3422 68.8037 64.7476 70.6205C62.1531 72.4372 58.4251 72.5345 54.258 70.7662C50.1154 69.0082 45.7832 65.4843 42.332 60.5554C38.8807 55.6265 37.051 50.3502 36.8159 45.8562C36.5794 41.3356 37.9459 37.8658 40.5404 36.049C43.135 34.2323 46.863 34.135 51.0301 35.9033C55.1726 37.6613 59.5049 41.1853 62.9561 46.1142Z"
        stroke="#2E75FF"
        strokeOpacity="0.4"
        strokeWidth="3.2"
      />
      <path
        d="M77.6679 60.5553C74.2166 65.4842 69.8844 69.0081 65.7418 70.7661C61.5748 72.5344 57.8468 72.4371 55.2522 70.6204C52.6576 68.8036 51.2912 65.3338 51.5277 60.8132C51.7628 56.3192 53.5925 51.043 57.0437 46.1141C60.495 41.1852 64.8272 37.6612 68.9698 35.9033C73.1369 34.1349 76.8648 34.2322 79.4594 36.0489C82.054 37.8657 83.4204 41.3355 83.184 45.8561C82.9489 50.3501 81.1191 55.6264 77.6679 60.5553Z"
        stroke="#2E75FF"
        strokeWidth="3.2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_144_3532"
        x="0.799999"
        y="0.199999"
        width="118.4"
        height="118.4"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6.4" />
        <feGaussianBlur stdDeviation="9.6" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_144_3532"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_144_3532"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default IconEasyMedLogo;
