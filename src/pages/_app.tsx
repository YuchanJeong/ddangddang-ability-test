import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>땡땡능력시험</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
