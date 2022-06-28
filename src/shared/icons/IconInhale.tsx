import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconInhale: FC<SVGAttributes<IconPropsType>> = ({
  className,
  width = "w-5",
  height = "h-5",
}) => (
  <svg
    className={clsx(className, width, height)}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.743 2.03616C13.4866 1.9336 13.1956 2.05831 13.0931 2.3147L12.5081 3.77698L16.664 4.75484L17.067 3.94899C17.1978 3.68735 17.077 3.36978 16.8054 3.26114L13.743 2.03616ZM17.658 5.00297L17.9614 4.3962C18.3538 3.61129 17.9916 2.65858 17.1768 2.33267L14.1144 1.10768C13.3452 0.800014 12.4722 1.17414 12.1646 1.94331L11.536 3.51484L11.7387 3.59594L10.9608 3.41289C10.233 3.24164 9.49018 3.63251 9.21919 4.32934L6.28214 11.8818C6.2074 12.0739 6.02235 12.2005 5.81614 12.2005H2.5002C1.67178 12.2005 1.0002 12.8721 1.0002 13.7005V17.7005C1.0002 18.529 1.67178 19.2005 2.5002 19.2005H12.3375C12.94 19.2005 13.4841 18.8399 13.7189 18.285L18.4989 6.98694C18.8337 6.19544 18.4353 5.30136 17.658 5.00297ZM10.1512 4.69179C10.2415 4.45951 10.4891 4.32922 10.7317 4.38631L17.2319 5.91577C17.5335 5.98672 17.6986 6.312 17.5779 6.5973L12.798 17.8954C12.7197 18.0803 12.5383 18.2005 12.3375 18.2005H5.00021V13.2005H5.81614C6.43476 13.2005 6.98993 12.8208 7.21414 12.2442L10.1512 4.69179ZM2.5002 18.2005H4.00021V13.2005H2.5002C2.22406 13.2005 2.0002 13.4244 2.0002 13.7005V17.7005C2.0002 17.9767 2.22406 18.2005 2.5002 18.2005Z"
    />
  </svg>
);

export default IconInhale;
