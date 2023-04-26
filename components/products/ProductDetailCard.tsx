import Card from "../common/Card";
import ContactForm from "../contact/contactRow/ContactForm";
import { IProduct } from "../home/productsRow/ProductCard";

interface IProductDetail {
  objProduct: IProduct;
}

export default function ProductDetailCard(props: IProductDetail) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
      <Card className="w-full bg-white border border-gray-200 !p-0">
        <div className="grid grid-rows-[1fr_auto_auto]">
          <div className="h-56 overflow-hidden w-full border-b">
            <img
              className="p-0 object-cover h-full w-full"
              src={props.objProduct?.imgSrc}
              alt="product image"
            />
          </div>
          <div className="p-4 grid grid-rows-[auto_auto] gap-2">
            <a href="#">
              <h3 className="text-xl font-bold text-gray-900">
                {props.objProduct?.title}
              </h3>
            </a>
            <span className="text-xl font-semibold text-primary">
              {props.objProduct?.priceRange}
            </span>
          </div>
          <div>
            <table className="w-full text-sm text-left text-gray-500">
              <tbody>
                {props.objProduct.arrProductDetails.map((item, index) => (
                  <tr
                    key={index}
                    className={`bg-white ${
                      props.objProduct.arrProductDetails.length - 1 > index
                        ? "border-b"
                        : "border-none"
                    } ${index === 0 && "border-t"}`}
                  >
                    <td className="px-6 py-2 font-bold">{item.FIELD1}</td>
                    <td className="px-6 py-2 text-clip">{item.FIELD2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
