import { Dispatch, ReactNode, SetStateAction } from "react";

interface IModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  renderContent?: () => ReactNode;
  renderActions?: () => ReactNode;
}

export default function Modal(props: IModal) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden overflow-y-auto h-full bg-[rgba(0,0,0,0.5)]"
      style={{ zIndex: 200000 }}
    >
      <div className="relative w-full h-full p-4 flex flex-col items-center justify-center">
        <div className="flex w-full max-w-4xl bg-primary items-start justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-white">{props.title}</h3>
          <button
            type="button"
            className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center rounded-full"
            onClick={() => props.setIsOpen(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="bg-white w-full max-w-4xl">
          <div className="p-4 max-h-[70vh] md:max-h-[600px] overflow-y-auto">
            {props.renderContent ? props.renderContent() : <></>}
          </div>

          {props.renderActions && (
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200">
              {props.renderActions()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
