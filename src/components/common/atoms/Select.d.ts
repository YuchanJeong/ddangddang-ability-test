import { IUseSelectResult } from "../../../hooks/useSelect.d";

/** \# Select 타입 */
export interface ISelect {
  width: string;
  list: string[];
  select: IUseSelectResult;
}
