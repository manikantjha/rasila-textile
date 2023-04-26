import { ReactNode } from "react";

export interface IContainerWrapper {
  children: ReactNode;
  containerWrapperClassName?: string;
  innerWrapperClassName?: string;
}

export default function ContainerWrapper(props: IContainerWrapper) {
  return (
    <div className={`${props.containerWrapperClassName}`}>
      <div
        className={`container mx-auto py-14 px-4 md:py-16 md:px-0 ${props.innerWrapperClassName}`}
      >
        {props.children}
      </div>
    </div>
  );
}
