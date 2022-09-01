import styled from "styled-components";

import { IFlexBox } from "./BasicStyles.d";

/** \# 최대 넓이 1200px, 최소 넓이 320px인 가로 가운데 정렬된 공간 */
export const InnerBox = styled.div`
  width: 1200px; //> 최대 넓이
  max-width: 100%; //> 1200px 이하일 때
  margin: 0 auto; //> 가로 가운데 정렬
  position: relative;
  min-width: 320px;
`;

/** \# 최대 넓이 1200px, 최소 넓이 320px인 가로 가운데 정렬된 공간 / 헤더 및 푸터에 따라 높이 조정 */
export const PageInnerBox = styled(InnerBox)`
  padding: ${({ theme }) => theme.size.lg};
  min-height: calc(100vh - 17rem);
`;

/**
 * \# Flex-box
 * @param justifyContent ? `"center"(def) | "flex-start" | "flex-end" | "space-between" | "space-around";`
 * @param alignItems ? `〃`
 * @param isFlexColumn ? `false(def) | true`
 * @param isFlexWrap ? `false(def) | true;`
 * @param gap ? `"0"(def) | "px" | "rem" | "%"`
 */
export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-direction: ${({ isFlexColumn }) => (isFlexColumn ? "column" : "row")};
  flex-wrap: ${({ isFlexWrap }) => (isFlexWrap ? "wrap" : "nowrap")};
  gap: ${({ gap }) => gap || "0"};
`;

/** \# Bold, 포인터, 스크롤 방지 (기본 버튼 속성) */
export const Btn = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
