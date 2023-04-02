import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import TabItem from "./TabItem";

interface ITabs {
  lstTabs: string[];
  renderActiveTab: () => ReactNode;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export default function Tabs(props: ITabs) {
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
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
      <div>
        <>{props.renderActiveTab()}</>
      </div>
    </>
  );
}
