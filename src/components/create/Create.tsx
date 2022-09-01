import { useState } from "react";

import { BorderDiv, FlexBox, PageInnerBox } from "../atoms/BasicStyles";
import { TapBtn } from "../atoms/Btns";

/** \# 시험 생성 페이지 */
export function Create() {
  //# 탭 전환
  const [isTestInfoActive, setIsTestInfoActive] = useState<boolean>(true);
  const toggleActive = () => {
    setIsTestInfoActive((prevState) => !prevState);
  };

  return (
    <PageInnerBox>
      <FlexBox justifyContent="flex-start">
        <TapBtn
          onClick={toggleActive}
          width="10rem"
          isActive={isTestInfoActive}
        >
          1. 시험 정보
        </TapBtn>
        <TapBtn
          onClick={toggleActive}
          width="10rem"
          isActive={!isTestInfoActive}
        >
          2. 문제
        </TapBtn>
      </FlexBox>
      <BorderDiv>{isTestInfoActive ? "시험 정보" : "문제"}</BorderDiv>
    </PageInnerBox>
  );
}
