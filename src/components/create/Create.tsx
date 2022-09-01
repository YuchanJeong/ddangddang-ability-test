import { useSelect } from "../../hooks/useSelect";
import { PageInnerBox } from "../common/atoms/BasicStyles";
import { Select } from "../common/atoms/Select";

export function Create() {
  const EXAMPLES = ["1번 목록입니다.", "2번 목록입니다.", "3번 목록입니다."]; //!
  const select = useSelect(EXAMPLES[0]);

  return (
    <PageInnerBox>
      <Select width="14rem" list={EXAMPLES} select={select} />
    </PageInnerBox>
  );
}
