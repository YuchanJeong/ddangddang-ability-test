import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { InnerBox } from "../common/atoms/BasicStyles";
import { AccentBtn } from "../common/atoms/Btns";
import { FlexBoxFooter, OuterBox } from "./Footer.style";

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
              <FaGithub />
            </Link>
          </AccentBtn>
        </FlexBoxFooter>
      </InnerBox>
    </OuterBox>
  );
}
