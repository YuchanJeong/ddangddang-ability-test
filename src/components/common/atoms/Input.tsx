import styled from "styled-components";

import { IUseInputResult } from "../../../hooks/useInput";

//# Input 타입
interface IInputProps {
  width: string;
  input: IUseInputResult;
}

//# Input 스타일
const InputStyle = styled.input<Pick<IInputProps, "width">>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.size.sm};
  border: 1px solid ${({ theme }) => theme.colors.text};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
  border-radius: ${({ theme }) => theme.size.br};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

/**
 * \# Input
 * @param width `string` input 넓이
 * @param select `{ attribute, value, setValue }` useInput의 반환값
 */
export function Input(props: IInputProps) {
  return <InputStyle width={props.width} {...props.input.attribute} />;
}
