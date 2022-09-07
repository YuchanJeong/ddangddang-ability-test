import { ChangeEvent } from "react";

import { IUseInputResult } from "../../../hooks/useInput";

/** 문자 입력창 Props 타입 */
export interface IInputProps {
  width: string;
  input: IUseInputResult;
}

/** 파일 입력창 Props 타입 */
export interface IInputFileProps {
  id: string;
  accept: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
