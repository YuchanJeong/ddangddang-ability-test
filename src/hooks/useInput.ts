import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

/** \# useInput 반환값 타입 */
export interface IUseInputResult {
  attribute: {
    value: string;
    placeholder: string;
    onChange: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

/**
 * \# input 요소 값 관리
 *
 * e.g.
 *
 * const exampleSelect = useSelect("초깃값", "표시자")
 *
 * \<input {...exampleInput.attribute} />
 * @param initialValue 초깃값
 * @param placeholder 표시자
 * @returns \{ `attribute`: input 요소의 속성, `value`: 선택된 값, `setValue`: 값 직접 변경 시 사용 }
 */
export const useInput = (
  initialValue: string,
  placeholder: string,
): IUseInputResult => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(ev.target.value);
  };

  return {
    attribute: { value, placeholder, onChange },
    value,
    setValue,
  };
};
