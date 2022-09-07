import styled from "styled-components";

import { Btn } from "./BasicStyles";

/** \# hover 시 밑줄이 쳐지는 버튼 */
export const UnderlineBtn = styled(Btn)`
  &:hover {
    text-decoration: underline ${({ theme }) => theme.colors.accent};
  }
`;

/** \# hover 시 색상이 강조되는 버튼 */
export const AccentBtn = styled(Btn)`
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

//# 테두리 있는 버튼 기본 스타일
const BorderBtn = styled(Btn)<{ width: string }>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.size.sm};
  border-radius: ${({ theme }) => theme.size.br};
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
  &:active {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: inset 0 0 60px 0 ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * \# 확인 버튼 (강조 색상)
 * @param width `string` 버튼 넓이
 */
export const ConfirmBtn = styled(BorderBtn)`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
`;

/**
 * \# 취소 버튼 (강조 테두리)
 * @param width `string` 버튼 넓이
 */
export const CancelBtn = styled(BorderBtn)`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
`;

/**
 * \# 탭 버튼
 * @param width 버튼 넓이
 * @param isActive 탭 활성화 여부
 */
export const TapBtn = styled(Btn)<{ width: string; isActive: boolean }>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.size.sm};
  padding-top: ${({ theme }) => theme.size.md};
  border-radius: ${({ theme }) => theme.size.br} ${({ theme }) => theme.size.br}
    0 0;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : "transparent"};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.accent};
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
