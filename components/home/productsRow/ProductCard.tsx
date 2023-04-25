import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
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
    <Card className="w-full bg-white border border-gray-200 !p-0">
      <div className="grid grid-rows-[1fr_auto]">
        <div className="h-56 overflow-hidden w-full border-b">
          <img
            className="p-0 object-cover h-full w-full"
            src={props.objProduct?.imgSrc}
            alt="product image"
          />
        </div>
        <div className="p-4 grid grid-rows-[auto_auto_auto] gap-1 text-center">
          <p className="text-xl font-bold text-gray-700 line-clamp-1">
            {props.objProduct?.title}
          </p>
          <p className="text-lg font-semibold text-primary">
            {props.objProduct?.priceRange}
          </p>
          <Button
            onClick={() => {
              props.setIsOpen(true);
              props.setSelectedProduct(props.objProduct);
            }}
            className="mt-4"
          >
            Get Latest Price
          </Button>
        </div>
      </div>
    </Card>
  );
}
