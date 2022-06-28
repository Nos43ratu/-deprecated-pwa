export const parseString = (string: string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return string;
  }
};
