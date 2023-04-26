import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import TabItem from "./TabItem";
import ContainerWrapper from "../ContainerWrapper";

interface ITabs {
  lstTabs: string[];
  renderActiveTab: () => ReactNode;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export default function Tabs(props: ITabs) {
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 sticky top-[60px] lg:top-[72px] bg-white shadow-md">
        <div className="container mx-auto !px-0">
          <ul className="flex flex-nowrap flex-shrink-0 w-full overflow-x-scroll lg:overflow-x-hidden">
            {props.lstTabs.map((item, index) => (
              <TabItem
                key={index}
                title={item}
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
      <ContainerWrapper innerWrapperClassName="!py-2">
        <>{props.renderActiveTab()}</>
      </ContainerWrapper>
    </>
  );
}
