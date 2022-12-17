// need to include default mapbox css
import "mapbox-gl/dist/mapbox-gl.css";
// global styles
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
