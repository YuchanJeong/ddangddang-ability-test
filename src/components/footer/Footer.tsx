import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { InnerBox } from "../atoms/BasicStyles";
import { AccentBtnReverse, FlexBoxFooter, OuterBox } from "./Footer.style";

/** \# 푸터 */
export function Footer() {
  return (
    <OuterBox>
      <InnerBox>
        <FlexBoxFooter>
          <div>© 2022 Yuchan Jeong</div>
          <AccentBtnReverse>
            <Link
              href={"https://github.com/YuchanJeong/ddangddang-avility-test"}
            >
              <>
                <FaGithub />
              </>
            </Link>
          </AccentBtnReverse>
        </FlexBoxFooter>
      </InnerBox>
    </OuterBox>
  );
}
