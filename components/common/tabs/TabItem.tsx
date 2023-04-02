import { Dispatch, SetStateAction } from "react";

interface ITabItem {
  title: string;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  index: number;
}

export default function TabItem(props: ITabItem) {
  return (
    <li
      className="mr-2 cursor-pointer"
      onClick={() => props.setActiveTab(props.index)}
    >
      <span
        className={`inline-block p-4 border-b-2 ${
          props.index === props.activeTab
            ? "border-blue-500"
            : "border-transparent"
        } rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
      >
        {props.title}
      </span>
    </li>
  );
}
