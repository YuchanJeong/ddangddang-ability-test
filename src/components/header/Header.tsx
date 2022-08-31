import { useRouter } from "next/router";
import { useState } from "react";
import { FaSun, FaMoon, FaHamburger } from "react-icons/fa";

import { InnerBox } from "../common/atoms/BasicStyles";
import { AccentBtn } from "../common/atoms/Btns";
import {
  BtnMenuMobile,
  FlexBoxHeader,
  FlexBoxMenus,
  FlexBoxMenusMobile,
  UnderlineBtnMenu,
  UnderlineBtnTitle,
} from "./Header.style";

interface IHeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

/**
 * \# 헤더
 * @param isDarkMode `boolean;` 다크 모드 여부
 * @param toggleTheme `() => void;` 테마 변경 함수
 */
export function Header(props: IHeaderProps) {
  //# 테마 전환
  const [isMobileMenuOn, setIsMobileMenuOn] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMobileMenuOn((prevState) => !prevState);
  };

  //# 라우팅
  const router = useRouter();
  const goToMain = () => {
    router.push("/");
  };

  const goToTag = () => {
    router.push("/tag");
  };

  const goToCreate = () => {
    router.push("/create");
  };

  //# 메뉴 모음
  const Menus = () => (
    <>
      <UnderlineBtnMenu onClick={goToTag}>태그</UnderlineBtnMenu>
      <UnderlineBtnMenu onClick={goToCreate}>시험 만들기</UnderlineBtnMenu>
      <AccentBtn onClick={props.toggleTheme}>
        {props.isDarkMode ? <FaSun /> : <FaMoon />}
      </AccentBtn>
    </>
  );

  return (
    <InnerBox>
      <FlexBoxHeader>
        <UnderlineBtnTitle onClick={goToMain}>땡땡능력시험</UnderlineBtnTitle>
        <FlexBoxMenus>
          <Menus />
        </FlexBoxMenus>
        <BtnMenuMobile isMobileMenuOn={isMobileMenuOn} onClick={toggleMenu}>
          <FaHamburger />
        </BtnMenuMobile>
      </FlexBoxHeader>
      {isMobileMenuOn ? (
        <FlexBoxMenusMobile>
          <Menus />
        </FlexBoxMenusMobile>
      ) : null}
    </InnerBox>
  );
}
