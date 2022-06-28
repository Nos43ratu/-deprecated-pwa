import React, { FC, SVGAttributes } from "react";
import clsx from "clsx";

interface IconPropsType {
  className?: string;
  width?: string;
  height?: string;
}

const IconTube: FC<SVGAttributes<IconPropsType>> = ({
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
    <g clipPath="url(#clip0_352_5751)">
      <mask id="path-1-inside-1_352_5751" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.80554 19.7755C3.53834 19.9753 3.16722 19.9588 2.91883 19.736L0.929796 17.9517C0.681414 17.7289 0.624833 17.3617 0.794609 17.0745L1.81831 15.3424C1.45536 14.8342 1.44 14.1383 1.81254 13.6084L11.0188 0.51437C11.2601 0.171303 11.7467 0.115875 12.0589 0.395916L19.1677 6.77298C19.4795 7.05272 19.4775 7.54189 19.1633 7.81901L7.16252 18.4045C6.6688 18.84 5.96063 18.8959 5.41189 18.5739L3.80554 19.7755ZM5.56863 17.4111C5.57391 17.4159 5.5791 17.4207 5.58421 17.4255L5.83639 17.6517C6.02517 17.8211 6.31083 17.8223 6.50102 17.6545L16.7386 8.62428L10.4841 3.01355L2.63058 14.1836C2.48489 14.3908 2.51717 14.6742 2.70572 14.8433L2.93831 15.052C2.94369 15.0565 2.94902 15.0612 2.95431 15.0659L5.56863 17.4111ZM11.0633 2.18974L17.4937 7.95825L18.2489 7.29215L11.6426 1.36586L11.0633 2.18974ZM1.78063 17.3715L2.55879 16.0549L4.62821 17.9113L3.40352 18.8274L1.78063 17.3715Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.80554 19.7755C3.53834 19.9753 3.16722 19.9588 2.91883 19.736L0.929796 17.9517C0.681414 17.7289 0.624833 17.3617 0.794609 17.0745L1.81831 15.3424C1.45536 14.8342 1.44 14.1383 1.81254 13.6084L11.0188 0.51437C11.2601 0.171303 11.7467 0.115875 12.0589 0.395916L19.1677 6.77298C19.4795 7.05272 19.4775 7.54189 19.1633 7.81901L7.16252 18.4045C6.6688 18.84 5.96063 18.8959 5.41189 18.5739L3.80554 19.7755ZM5.56863 17.4111C5.57391 17.4159 5.5791 17.4207 5.58421 17.4255L5.83639 17.6517C6.02517 17.8211 6.31083 17.8223 6.50102 17.6545L16.7386 8.62428L10.4841 3.01355L2.63058 14.1836C2.48489 14.3908 2.51717 14.6742 2.70572 14.8433L2.93831 15.052C2.94369 15.0565 2.94902 15.0612 2.95431 15.0659L5.56863 17.4111ZM11.0633 2.18974L17.4937 7.95825L18.2489 7.29215L11.6426 1.36586L11.0633 2.18974ZM1.78063 17.3715L2.55879 16.0549L4.62821 17.9113L3.40352 18.8274L1.78063 17.3715Z"
      />
      <path
        d="M3.80554 19.7755L3.20658 18.9747L3.20657 18.9747L3.80554 19.7755ZM0.794609 17.0745L-0.066272 16.5657L-0.0662727 16.5657L0.794609 17.0745ZM1.81831 15.3424L2.67919 15.8512L3.01037 15.2909L2.63207 14.7612L1.81831 15.3424ZM1.81254 13.6084L0.994497 13.0332L0.994497 13.0332L1.81254 13.6084ZM11.0188 0.51437L10.2008 -0.0607885L11.0188 0.51437ZM19.1633 7.81901L18.5018 7.06906L19.1633 7.81901ZM7.16252 18.4045L7.82402 19.1544L7.16252 18.4045ZM5.41189 18.5739L5.91796 17.7115L5.34494 17.3752L4.81292 17.7732L5.41189 18.5739ZM5.58421 17.4255L4.89484 18.1499L4.9055 18.1601L4.91645 18.1699L5.58421 17.4255ZM6.50102 17.6545L7.16252 18.4045L6.50102 17.6545ZM16.7386 8.62428L17.4001 9.37423L18.2432 8.63058L17.4064 7.8799L16.7386 8.62428ZM10.4841 3.01355L11.1519 2.26917L10.3137 1.51728L9.66608 2.43839L10.4841 3.01355ZM2.63058 14.1836L3.44862 14.7587L3.44862 14.7587L2.63058 14.1836ZM2.93831 15.052L2.27055 15.7963L2.2815 15.8062L2.29274 15.8157L2.93831 15.052ZM11.0633 2.18974L10.2453 1.61458L9.7345 2.34108L10.3956 2.93412L11.0633 2.18974ZM17.4937 7.95825L16.826 8.70262L17.4881 9.29662L18.1552 8.70819L17.4937 7.95825ZM18.2489 7.29215L18.9104 8.0421L19.7535 7.29846L18.9166 6.54778L18.2489 7.29215ZM11.6426 1.36586L12.3104 0.621486L11.4722 -0.13041L10.8246 0.790706L11.6426 1.36586ZM2.55879 16.0549L3.22655 15.3105L2.31855 14.496L1.69791 15.5461L2.55879 16.0549ZM1.78063 17.3715L0.919745 16.8627L0.502624 17.5685L1.11287 18.1159L1.78063 17.3715ZM4.62821 17.9113L5.22718 18.7121L6.20397 17.9815L5.29597 17.167L4.62821 17.9113ZM3.40352 18.8274L2.73576 19.5718L3.34601 20.1192L4.00248 19.6282L3.40352 18.8274ZM2.25108 20.4804C2.85429 21.0215 3.75559 21.0616 4.40451 20.5762L3.20657 18.9747C3.32109 18.889 3.48014 18.8961 3.58659 18.9916L2.25108 20.4804ZM0.262038 18.6961L2.25108 20.4804L3.58659 18.9916L1.59755 17.2073L0.262038 18.6961ZM-0.0662727 16.5657C-0.478587 17.2633 -0.341176 18.1549 0.262038 18.6961L1.59755 17.2073C1.704 17.3028 1.72825 17.4602 1.65549 17.5833L-0.0662727 16.5657ZM0.957427 14.8336L-0.066272 16.5657L1.65549 17.5833L2.67919 15.8512L0.957427 14.8336ZM0.994497 13.0332C0.373112 13.917 0.39962 15.0766 1.00455 15.9236L2.63207 14.7612C2.5111 14.5918 2.50689 14.3595 2.63058 14.1836L0.994497 13.0332ZM10.2008 -0.0607885L0.994497 13.0332L2.63058 14.1836L11.8369 1.08953L10.2008 -0.0607885ZM12.7267 -0.348462C11.9685 -1.02856 10.7866 -0.893952 10.2008 -0.0607885L11.8369 1.08953C11.7335 1.23656 11.5249 1.26031 11.3911 1.1403L12.7267 -0.348462ZM19.8354 6.0286L12.7267 -0.348462L11.3911 1.1403L18.4999 7.51736L19.8354 6.0286ZM19.8248 8.56895C20.5878 7.89594 20.5928 6.70797 19.8354 6.0286L18.4999 7.51736C18.3663 7.39747 18.3672 7.18783 18.5018 7.06906L19.8248 8.56895ZM7.82402 19.1544L19.8248 8.56895L18.5018 7.06906L6.50102 17.6545L7.82402 19.1544ZM4.90581 19.4364C5.82056 19.9732 7.00055 19.8808 7.82402 19.1544L6.50102 17.6545C6.33705 17.7992 6.1007 17.8187 5.91796 17.7115L4.90581 19.4364ZM4.40451 20.5762L6.01085 19.3747L4.81292 17.7732L3.20658 18.9747L4.40451 20.5762ZM6.27357 16.7011C6.26136 16.6895 6.24897 16.678 6.23638 16.6667L4.90087 18.1555C4.89885 18.1537 4.89684 18.1518 4.89484 18.1499L6.27357 16.7011ZM6.50415 16.9074L6.25196 16.6811L4.91645 18.1699L5.16863 18.3961L6.50415 16.9074ZM5.83952 16.9046C6.02971 16.7368 6.31537 16.738 6.50415 16.9074L5.16863 18.3961C5.73496 18.9042 6.59195 18.9077 7.16252 18.4045L5.83952 16.9046ZM16.0771 7.87434L5.83952 16.9046L7.16252 18.4045L17.4001 9.37423L16.0771 7.87434ZM17.4064 7.8799L11.1519 2.26917L9.81636 3.75793L16.0709 9.36866L17.4064 7.8799ZM3.44862 14.7587L11.3022 3.58871L9.66608 2.43839L1.81254 13.6084L3.44862 14.7587ZM3.37348 14.0989C3.56203 14.2681 3.59431 14.5515 3.44862 14.7587L1.81254 13.6084C1.37548 14.23 1.47232 15.0803 2.03796 15.5877L3.37348 14.0989ZM3.60607 14.3076L3.37348 14.0989L2.03796 15.5877L2.27055 15.7963L3.60607 14.3076ZM3.62207 14.3215C3.60948 14.3102 3.59675 14.2992 3.58389 14.2883L2.29274 15.8157C2.29063 15.8139 2.28857 15.8121 2.28655 15.8103L3.62207 14.3215ZM6.23638 16.6667L3.62207 14.3215L2.28655 15.8103L4.90087 18.1555L6.23638 16.6667ZM10.3956 2.93412L16.826 8.70262L18.1615 7.21387L11.7311 1.44536L10.3956 2.93412ZM17.5874 6.54221L16.8322 7.2083L18.1552 8.70819L18.9104 8.0421L17.5874 6.54221ZM10.9748 2.11024L17.5811 8.03653L18.9166 6.54778L12.3104 0.621486L10.9748 2.11024ZM11.8814 2.7649L12.4606 1.94102L10.8246 0.790706L10.2453 1.61458L11.8814 2.7649ZM1.69791 15.5461L0.919745 16.8627L2.64151 17.8803L3.41967 16.5637L1.69791 15.5461ZM5.29597 17.167L3.22655 15.3105L1.89103 16.7993L3.96046 18.6557L5.29597 17.167ZM4.00248 19.6282L5.22718 18.7121L4.02925 17.1106L2.80455 18.0266L4.00248 19.6282ZM1.11287 18.1159L2.73576 19.5718L4.07128 18.083L2.44838 16.6272L1.11287 18.1159Z"
        mask="url(#path-1-inside-1_352_5751)"
      />
    </g>
    <defs>
      <clipPath id="clip0_352_5751">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconTube;