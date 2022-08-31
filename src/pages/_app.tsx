import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Footer } from "../components/Footer.tsx/Footer";
import { Header } from "../components/header/Header";
import { useThemeInLocalStorage } from "../hooks/useThemeInLocalStorage";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggleTheme } = useThemeInLocalStorage();

  return (
    <>
      <Head>
        <title>땡땡능력시험</title>
      </Head>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
