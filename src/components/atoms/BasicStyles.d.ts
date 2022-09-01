//# Flex-box 정렬 타입
type TFlexArrangement =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

/** \# Flex-box 타입 */
export interface IFlexBox {
  justifyContent?: TFlexArrangement;
  alignItems?: TFlexArrangement;
  isFlexColumn?: boolean;
  isFlexWrap?: boolean;
  gap?: string;
}
