import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../common/components/UI/Layout";
import "@fontsource/roboto-slab";
import "@fontsource/roboto";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
