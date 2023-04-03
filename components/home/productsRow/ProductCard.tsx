import { Dispatch, ReactNode, SetStateAction } from "react";

/* eslint-disable @next/next/no-img-element */

export interface IProduct {
  id: number;
  title: string;
  imgSrc: string;
  arrProductDetails: {
    FIELD1: string;
    FIELD2: string;
  }[];
  arrOtherDetails: string[];
  priceRange: ReactNode | string;
}

interface IProductCard {
  objProduct: IProduct;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProduct: Dispatch<SetStateAction<IProduct | null>>;
}

export default function ProductCard(props: IProductCard) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg">
      <div className="grid grid-rows-[1fr_auto]">
        <div className="h-56 overflow-hidden w-full border-b">
          <img
            className="p-0 rounded-t-lg object-cover h-full w-full"
            src={props.objProduct?.imgSrc}
            alt="product image"
          />
        </div>
        <div className="p-4 grid grid-rows-[auto_auto_auto] gap-1">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.objProduct?.title}
            </h5>
          </a>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {props.objProduct?.priceRange}
          </span>

          <button
            onClick={() => {
              props.setIsOpen(true);
              props.setSelectedProduct(props.objProduct);
            }}
            className="text-white h-fit mt-5 bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-500"
          >
            Get Latest Price
          </button>
        </div>
      </div>
    </div>
  );
}
