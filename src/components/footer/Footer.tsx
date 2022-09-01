import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { InnerBox } from "../atoms/BasicStyles";
import { AccentBtn } from "../atoms/Btns";
import { FlexBoxFooter, OuterBox } from "./Footer.style";

/** \# 푸터 */
export function Footer() {
  return (
    <OuterBox>
      <InnerBox>
        <FlexBoxFooter>
          <div>© 2022 Yuchan Jeong</div>
          <AccentBtn>
            <Link
              href={"https://github.com/YuchanJeong/ddangddang-avility-test"}
            >
              <>
                <FaGithub />
              </>
            </Link>
          </AccentBtn>
        </FlexBoxFooter>
      </InnerBox>
    </OuterBox>
  );
}
