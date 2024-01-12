import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  console.log("_app 파일입니다.")
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
