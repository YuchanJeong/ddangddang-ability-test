import styled from "styled-components";

import { FlexBox } from "../common/atoms/BasicStyles";

/** \# 높이 10rem의 색상 반전 공간 */
export const OuterBox = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.primary};
  height: 10rem;
`;

/** \# Flex-box / 양끝 정렬 */
export const FlexBoxFooter = styled(FlexBox)`
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.size.lg};
`;
