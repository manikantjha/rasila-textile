import React, { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  className?: string;
}

export default function Card(props: ICard) {
  return (
    <div
      className={`rounded-lg bg-white border p-6 overflow-hidden ${
        props.className ? props.className : ""
      }`}
    >
      <>{props.children}</>
    </div>
  );
}
