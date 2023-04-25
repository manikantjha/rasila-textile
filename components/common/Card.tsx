import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  className?: string;
}

export default function Card(props: ICard) {
  return (
    <div
      className={`bg-white border p-4 md:p-6 overflow-hidden ${
        props.className ? props.className : ""
      }`}
    >
      <>{props.children}</>
    </div>
  );
}
