import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

/** \# useSelect 반환값 타입 */
export interface IUseSelectResult {
  attribute: {
    value: string;
    onChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
  };
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

/**
 * \# select 요소 값 관리
 *
 * e.g.
 *
 * const exampleSelect = useSelect(EXAMPLES[0])
 *
 * \<select {...exampleSelect.attribute}>
 *
 * {EXAMPLES.map((ex) => (<option key={ex}>{ex}</option>))}
 *
 * </ select>
 * @param initialValue 초깃값
 * @returns \{ `attribute`: select 요소의 속성, `value`: 선택된 값, `setValue`: 값 직접 변경 시 사용 }
 */
export const useSelect = (initialValue: string): IUseSelectResult => {
  const [value, setValue] = useState(initialValue);

  const onChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    if (ev.target.value !== value) setValue(ev.target.value);
  };

  return {
    attribute: { value, onChange },
    value,
    setValue,
  };
};
