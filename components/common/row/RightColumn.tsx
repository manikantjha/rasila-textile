import { ReactNode } from "react";

export interface IRightColumn {
  renderRightColumn?: () => ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
  rightColumnContainerClassName?: string;
}

export default function RightColumn(props: IRightColumn) {
  if (props.renderRightColumn) {
    return <>{props.renderRightColumn()}</>;
  }
  return (
    <div
      className={`grid grid-rows-[auto_1fr] h-auto ${
        props.rightColumnContainerClassName
          ? props.rightColumnContainerClassName
          : ""
      }`}
    >
      <h3 className="text-4xl mb-4">{props.title}</h3>
      <p className="text-gray-500">{props.description}</p>
    </div>
  );
}
