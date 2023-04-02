import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </>
  );
}
