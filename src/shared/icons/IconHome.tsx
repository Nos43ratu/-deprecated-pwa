import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
}

const IconHome: FC<SVGAttributes<IconPropsType>> = ({ className }) => (
  <svg
    className={clsx(className, "w-[25px] h-[25px]")}
    viewBox="0 0 25 25"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.2381 8.19802L14.7658 2.52401C14.1725 1.99334 13.4044 1.69995 12.6084 1.69995C11.8124 1.69995 11.0443 1.99334 10.451 2.52401L3.97871 8.19802C3.63608 8.50446 3.36266 8.88037 3.17666 9.30073C2.99066 9.72109 2.89635 10.1762 2.9 10.6359V20.0638C2.9 20.9221 3.24095 21.7452 3.84784 22.3521C4.45474 22.959 5.27786 23.3 6.13613 23.3H19.0806C19.9389 23.3 20.762 22.959 21.3689 22.3521C21.9758 21.7452 22.3168 20.9221 22.3168 20.0638V10.6251C22.3189 10.1673 22.2238 9.71419 22.0379 9.2958C21.8519 8.87742 21.5793 8.50325 21.2381 8.19802ZM14.7658 21.1425H10.451V15.749C10.451 15.4629 10.5646 15.1885 10.7669 14.9862C10.9692 14.7839 11.2436 14.6703 11.5297 14.6703H13.6871C13.9732 14.6703 14.2476 14.7839 14.4499 14.9862C14.6522 15.1885 14.7658 15.4629 14.7658 15.749V21.1425ZM20.1594 20.0638C20.1594 20.3499 20.0457 20.6243 19.8434 20.8266C19.6411 21.0289 19.3667 21.1425 19.0806 21.1425H16.9232V15.749C16.9232 14.8907 16.5823 14.0676 15.9754 13.4607C15.3685 12.8538 14.5454 12.5129 13.6871 12.5129H11.5297C10.6714 12.5129 9.84828 12.8538 9.24139 13.4607C8.6345 14.0676 8.29355 14.8907 8.29355 15.749V21.1425H6.13613C5.85004 21.1425 5.57567 21.0289 5.37337 20.8266C5.17107 20.6243 5.05742 20.3499 5.05742 20.0638V10.6251C5.05762 10.472 5.09042 10.3206 5.15366 10.1811C5.2169 10.0416 5.30912 9.91717 5.42418 9.81609L11.8964 4.15286C12.0933 3.97992 12.3464 3.88455 12.6084 3.88455C12.8704 3.88455 13.1235 3.97992 13.3203 4.15286L19.7926 9.81609C19.9077 9.91717 19.9999 10.0416 20.0631 10.1811C20.1264 10.3206 20.1592 10.472 20.1594 10.6251V20.0638Z" />
  </svg>
);

export default IconHome;
