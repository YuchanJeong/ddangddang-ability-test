import styled from "styled-components";

import { FlexBox, Btn } from "../common/atoms/BasicStyles";
import { UnderlineBtn } from "../common/atoms/Btns";

/** \# Flex-box / 양끝 정렬 */
export const FlexBoxHeader = styled(FlexBox)`
  justify-content: space-between;
  padding: ${({ theme }) => theme.size.lg};
  height: 7rem;
`;

/** \# Flex-box / 반응형(모바일 제외) */
export const FlexBoxMenus = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.lg};

  ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

/** \# Flex-box / 세로 배치 / 반응형(모바일) */
export const FlexBoxMenusMobile = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.size.xl};
  text-align: right;
  display: none;
  & > * {
    margin: ${({ theme }) => theme.size.lg};
    &:first-child {
      margin-top: 0;
    }
  }

  ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;

/** \# hover 시 밑줄이 쳐지는 버튼 / 세리프 */
export const UnderlineBtnTitle = styled(UnderlineBtn)`
  font-family: ${({ theme }) => theme.fonts.family.serif};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
`;

/** \# hover 시 밑줄이 쳐지는 버튼 */
export const UnderlineBtnMenu = styled(UnderlineBtn)`
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;

/** \# isMobileMenuOn 시 색상이 강조되는 버튼 / 반응형(모바일) */
export const BtnMenuMobile = styled(Btn)<{ isMobileMenuOn: boolean }>`
  color: ${({ theme, isMobileMenuOn }) =>
    isMobileMenuOn ? theme.colors.accent : theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.size.xl};
  display: none;

  ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
