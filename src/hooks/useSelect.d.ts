import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseSelectResult {
  attribute: {
    value: string;
    onChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
  };
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
