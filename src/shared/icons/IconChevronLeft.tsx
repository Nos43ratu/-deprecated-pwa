import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
}

const IconChevronLeft: FC<SVGAttributes<IconPropsType>> = ({ className }) => (
  <svg
    fill="currentColor"
    className={clsx(className, "w-[13px] h-[21px]")}
    viewBox="0 0 13 21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.778809 10.8916C0.778809 11.2847 0.924805 11.6216 1.23926 11.9136L9.97656 20.4712C10.2236 20.7183 10.5381 20.853 10.9087 20.853C11.6499 20.853 12.2451 20.269 12.2451 19.5166C12.2451 19.146 12.0879 18.8203 11.8408 18.562L3.96826 10.8916L11.8408 3.22119C12.0879 2.96289 12.2451 2.62598 12.2451 2.2666C12.2451 1.51416 11.6499 0.930176 10.9087 0.930176C10.5381 0.930176 10.2236 1.06494 9.97656 1.31201L1.23926 9.8584C0.924805 10.1616 0.778809 10.4985 0.778809 10.8916Z" />
  </svg>
);

export default IconChevronLeft;
