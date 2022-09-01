import { useSelect } from "../../hooks/useSelect";
import { PageInnerBox } from "../atoms/BasicStyles";
import { Select } from "../atoms/Select";

/** \# 시험 생성 페이지 */
export function Create() {
  const EXAMPLES = ["1번 목록입니다.", "2번 목록입니다.", "3번 목록입니다."]; //!
  const select = useSelect(EXAMPLES[0]);

  return (
    <PageInnerBox>
      <Select width="14rem" list={EXAMPLES} select={select} />
    </PageInnerBox>
  );
}
