export type ApplicationType = "twa" | "standalone" | "browser";

declare global {
  interface Navigator {
    standalone: any;
  }
}

export const getApplicationMode = (): ApplicationType => {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return "twa";
  } else if (navigator.standalone || isStandalone) {
    return "standalone";
  }
  return "browser";
};
