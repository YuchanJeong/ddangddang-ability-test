import Image from "next/image";
import styled from "styled-components";

import { FlexBox } from "./BasicStyles";

/** \# 이미지 Props 타입 */
export interface ISrcImageProps {
  src: string;
}

/**
 * \# 250rem x 250rem 이미지
 * @param src 이미지 소스 주소
 */
export function SrcImage(props: ISrcImageProps) {
  return (
    <Image
      width={"250"}
      height={"250"}
      src={props.src}
      alt={"image"}
      objectFit="cover"
      objectPosition="center"
      unoptimized={true}
      priority={true}
    ></Image>
  );
}

//# 기본 이미지 스타일
const ColorFlexBox = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 25rem;
  height: 25rem;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.serif};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  text-decoration: underline ${({ theme }) => theme.colors.accent};
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

/** \# 250rem x 250rem 기본 이미지 */
export function DefaultImage() {
  return (
    <ColorFlexBox>
      <Title>땡땡능력시험</Title>
    </ColorFlexBox>
  );
}
