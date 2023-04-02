/* eslint-disable @next/next/no-img-element */
interface IProduct {
  objProduct:
    | {
        id: number;
        title: string;
        imgSrc: string;
        objProductDetails: {
          minimumOrderQty: {
            title: string;
            value: string;
          };
          brand: {
            title: string;
            value: string;
          };
          countryOfOrigin: {
            title: string;
            value: string;
          };
          packagingType: {
            title: string;
            value: string;
          };
          surfaceTreatment: {
            title: string;
            value: string;
          };
          material: {
            title: string;
            value: string;
          };
          usageApplication?: undefined;
        };
        arrOtherDetails: string[];
        priceRange: string;
      }
    | any;
}

export default function ProductCard(props: IProduct) {
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
        <div className="p-4 grid grid-rows-[auto_auto_auto] gap-4">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.objProduct?.title}
            </h5>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {props.objProduct?.priceRange}
            </span>
            <button className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get Latest Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
