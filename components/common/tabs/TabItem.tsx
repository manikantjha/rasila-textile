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
      className="mr-0 cursor-pointer flex-shrink-0 w-fit"
      onClick={() => props.setActiveTab(props.index)}
    >
      <span
        className={`inline-block p-3 lg:p-4 border-b-2 w-full ${
          props.index === props.activeTab
            ? "bg-accent text-gray-700 border-accent lg:hover:border-primary"
            : "border-transparent"
        } lg:hover:border-primary`}
      >
        {props.title}
      </span>
    </li>
  );
}
