import styled from "styled-components";

import { ISelect } from "./Select.d";

//# select 스타일
const SelectStyle = styled.select<Pick<ISelect, "width">>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.size.sm};
  padding-right: ${({ theme }) => theme.size.lg};
  border-radius: ${({ theme }) => theme.size.br};
  background-color: transparent; //> ArrowStyle 보임
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

//# select 화살표 스타일
const ArrowStyle = styled.span`
  position: absolute;
  transform: translate(-2rem, 0.6rem);
  z-index: -1; //> SelectStyle 클릭 가능
`;

/**
 * \# Select & Option
 * @param width `string` select 넓이
 * @param list `string[]` option 목록
 * @param select `{ attribute, value, setValue }` useSelect의 반환값
 */
export function Select(props: ISelect) {
  return (
    <div>
      <SelectStyle width={props.width} {...props.select.attribute}>
        {props.list.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </SelectStyle>
      <ArrowStyle>▼</ArrowStyle>
    </div>
  );
}
