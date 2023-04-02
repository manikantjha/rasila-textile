import { ReactNode } from "react";

export interface IContainerWrapper {
  children: ReactNode;
  containerWrapperClassName?: string;
}

export default function ContainerWrapper(props: IContainerWrapper) {
  return (
    <div className={`${props.containerWrapperClassName}`}>
      <div className="container mx-auto py-10 px-4 md:py-16 md:px-0">
        {props.children}
      </div>
    </div>
  );
}
