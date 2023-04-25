import React, { ReactNode } from "react";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: ReactNode;
}

export default function Button(props: IButton) {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center justify-center h-fit w-full px-3 py-1.5 text-md font-medium text-gray-900 bg-accent hover:bg-accentDark text-cente ${
        props.className ? props.className : ""
      }`}
    >
      {props.children} {props.icon && <span>{props.icon}</span>}
    </button>
  );
}
