import ContactForm from "../contact/contactRow/ContactForm";
import { IProduct } from "../home/productsRow/ProductCard";

interface IProductDetail {
  objProduct: IProduct;
}

export default function ProductDetailCard(props: IProductDetail) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
      <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-rows-[1fr_auto_auto]">
          <div className="h-56 overflow-hidden w-full border-b">
            <img
              className="p-0 rounded-t-lg object-cover h-full w-full"
              src={props.objProduct?.imgSrc}
              alt="product image"
            />
          </div>
          <div className="p-4 grid grid-rows-[auto_auto] gap-4">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {props.objProduct?.title}
              </h5>
            </a>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {props.objProduct?.priceRange}
            </span>
          </div>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {props.objProduct.arrProductDetails.map((item, index) => (
                  <tr
                    key={index}
                    className={`bg-white ${
                      props.objProduct.arrProductDetails.length - 1 > index
                        ? "border-b"
                        : "border-none"
                    } ${
                      index === 0 && "border-t"
                    } dark:bg-gray-800 dark:border-gray-700`}
                  >
                    <td className="px-6 py-2 font-bold">{item.FIELD1}</td>
                    <td className="px-6 py-2">{item.FIELD2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
