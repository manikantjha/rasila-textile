/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

export interface ILeftCoumn {
  renderLeftColumn?: () => ReactNode;
  imgSrc?: string;
  imgAlt?: string;
}

export default function LeftColumn(props: ILeftCoumn) {
  if (props.renderLeftColumn) {
    return <>{props.renderLeftColumn()} </>;
  }
  return (
    <div className="w-full h-[200px] lg:h-[400px] rounded-xl overflow-hidden">
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
