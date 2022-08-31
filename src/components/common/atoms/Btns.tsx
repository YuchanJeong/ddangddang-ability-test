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
