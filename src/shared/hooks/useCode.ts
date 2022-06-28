import { ChangeEvent, useState } from "react";

const goNext = (id: string) => {
  const nextSibling = document.querySelector(
    `input[name=code_${parseInt(id, 10) + 1}]`
  );

  if (nextSibling !== null) {
    //@ts-ignore
    nextSibling.focus();
  }
};

const goPrev = (id: string) => {
  const prevSibling = document.querySelector(
    `input[name=code_${parseInt(id, 10) - 1}]`
  );

  if (prevSibling !== null) {
    //@ts-ignore
    prevSibling.focus();
  }
};

export const useCode = <T>(
  initialState: T,
  onChange?: () => void
): [T, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [code, setCode] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, id } = e.target;
    if (onChange) {
      onChange();
    }

    if (Number(value) > 9) {
      goNext(id);
      return setCode((prev) => ({
        ...prev,
        [name]: value[1],
      }));
    }

    if (value.length > 0) {
      goNext(id);
      setCode((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      goPrev(id);
      setCode((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return [code, handleChange];
};
