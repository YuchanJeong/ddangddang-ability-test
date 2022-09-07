import { FaTrashAlt, FaUpload } from "react-icons/fa";
import styled from "styled-components";

import { FlexBox } from "./BasicStyles";
import { IInputFileProps, IInputProps } from "./Inputs.type";

//# 문자 입력창 스타일
const InputStyle = styled.input<{ width: string }>`
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
  cursor: text;
`;

/**
 * \# 문자 입력창
 * @param width `string` input 넓이
 * @param select `{ attribute, value, setValue }` useInput의 반환값
 */
export function Input(props: IInputProps) {
  return <InputStyle width={props.width} {...props.input.attribute} />;
}

//# 파일 입력창 스타일
const FitFlexBox = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.lg};
  width: fit-content;
`;

const Label = styled.label`
  margin-top: ${({ theme }) => theme.size.sm};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  cursor: pointer;
`;

const DisabledInput = styled.input`
  display: none;
`;

const FaTrashAltStyle = styled(FaTrashAlt)`
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  cursor: pointer;
`;

/**
 * \# 파일 입력창
 * @param id `string` label과 input의 아이디
 * @param accept `string` 파일 종류 (e.g. image/\*, audio/\*)
 * @param onChange `(ev: ChangeEvent<HTMLInputElement>) => void` 파일 변경 시 이벤트
 * @param onClick `() => void` 휴지통 클릭 시 이벤트
 */
export function InputFile(props: IInputFileProps) {
  return (
    <FitFlexBox>
      <Label htmlFor={props.id}>
        <FaUpload />
      </Label>
      <FaTrashAltStyle onClick={props.onClick} />
      <DisabledInput
        type="file"
        accept={props.accept}
        onChange={props.onChange}
        id={props.id}
      />
    </FitFlexBox>
  );
}
