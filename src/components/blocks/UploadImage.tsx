import styled from "styled-components";

import { FlexBox } from "../atoms/BasicStyles";
import { DefaultImage, SrcImage, ISrcImageProps } from "../atoms/Images";
import { InputFile } from "../atoms/Inputs";
import { IInputFileProps } from "../atoms/Inputs.d";

//# 업로드 이미지 Props 타입
type TUploadImageProps = IInputFileProps & ISrcImageProps;

//# 업로드 이미지 스타일
const FitFlexBox = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.md};
  flex-direction: column;
  width: fit-content;
`;

/**
 * \# 업로드 이미지 (이미지 및 대체 이미지 + 업로드 및 취소 버튼)
 * @param src `string` 이미지 소스 주소
 * @param id `string` label과 input의 아이디
 * @param accept `string` 파일 종류 (e.g. image/\*, audio/\*)
 * @param onChange `(ev: ChangeEvent<HTMLInputElement>) => void` 파일 변경 시 이벤트
 * @param onClick `() => void` 휴지통 클릭 시 이벤트
 */
export function UploadImage(props: TUploadImageProps) {
  return (
    <FitFlexBox>
      <FlexBox>
        {props.src ? <SrcImage src={props.src} /> : <DefaultImage />}
      </FlexBox>
      <InputFile
        id={props.id}
        accept={props.accept}
        onChange={props.onChange}
        onClick={props.onClick}
      />
    </FitFlexBox>
  );
}
