export const isIos = () => {
  if (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform)
  ) {
    return true;
  }
  return navigator.userAgent.includes("Mac") && "ontouchend" in document;
};
