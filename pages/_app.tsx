import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
// @ts-ignore
import AlertTemplate from "react-alert-template-basic";

const options = {
  // You can also just use 'bottom center'.
  position: positions.BOTTOM_CENTER,
  timeout: 7000,
  offset: "30px",
  // You can also just use 'scale'.
  transition: transitions.SCALE,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Component {...pageProps} />
    </AlertProvider>
  );
}
