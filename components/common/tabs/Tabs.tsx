import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import TabItem from "./TabItem";
import ContainerWrapper from "../ContainerWrapper";
import { lstProductTabs } from "@/data/data";

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
          <ul className="flex-nowrap flex-shrink-0 w-full overflow-x-auto lg:overflow-x-hidden hidden lg:flex">
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

          <div className="block lg:hidden p-4">
            <label
              htmlFor="products"
              className="block text-lg font-medium text-gray-900 mb-2"
            >
              Select a Product Category
            </label>
            <select
              id="products"
              className="block bg-accent text-gray-900 max-w-full w-full py-2.5"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                props.setActiveTab(parseInt(e.target.value));
              }}
            >
              {/* <option selected className="w-full">
              Choose A Product Category
            </option> */}
              <option value={0} className="w-full">
                {lstProductTabs[0]}
              </option>
              <option value={1} className="w-full">
                {lstProductTabs[1]}
              </option>
              <option value={2} className="w-full">
                {lstProductTabs[2]}
              </option>
              <option value={3} className="w-full">
                {lstProductTabs[3]}
              </option>
            </select>
          </div>
        </div>
      </div>
      <ContainerWrapper innerWrapperClassName="!pt-2">
        <>{props.renderActiveTab()}</>
      </ContainerWrapper>
    </>
  );
}
