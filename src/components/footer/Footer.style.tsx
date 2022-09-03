import styled from "styled-components";

import { FlexBox } from "../atoms/BasicStyles";
import { AccentBtn } from "../atoms/Btns";

/** \# 높이 10rem의 색상 반전 공간 */
export const OuterBox = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  height: 10rem;
`;

/** \# Flex-box / 양끝 정렬 */
export const FlexBoxFooter = styled(FlexBox)`
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.size.lg};
`;

/** \# hover 시 기본 글자 색상이 되는 버튼 */
export const AccentBtnReverse = styled(AccentBtn)`
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
