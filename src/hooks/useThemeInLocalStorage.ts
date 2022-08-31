import { useEffect, useState } from "react";

/**
 * \# 로컬 스토리지로 테마 상태 관리
 * @returns \{ `isDarkMode`: 다크 모드 여부, `toggleTheme`: 테마 전환 함수 }
 */
export const useThemeInLocalStorage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //> 수화 불일치 문제 예방 (typeof window === "undefined" 사용 시 문제 발생)
  useEffect(() => {
    setIsDarkMode(localStorage.getItem("isDarkMode") === "true" ? true : false);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      localStorage.setItem("isDarkMode", `${!prevState}`);
      return !prevState;
    });
  };

  return { isDarkMode, toggleTheme };
};
