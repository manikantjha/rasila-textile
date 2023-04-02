import { ReactNode } from "react";

interface ITabContentContainer {
  children: ReactNode;
  className?: string;
}

export default function TabContentContainer(props: ITabContentContainer) {
  return <div className={`my-8 ${props.className}`}>{props.children}</div>;
}
