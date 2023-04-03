import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/raleway/700.css";
import "@fontsource/raleway/500.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    brand: {
      darkBlue: "#2E5B6F",
      900: "#1a202c",
    },
  },

  styles: {
    global: {
      body: {
        bg: "white",
      },
      h1: {
        fontSize: "6rem",
        fontWeight: "700",
      },
    },
  },
  config: {},
  useCustomProperties: true,
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
