import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
// MIS COMPONENTES
import { darkTheme } from "../themes";
import "../styles/globals.css";
// INICIO
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
