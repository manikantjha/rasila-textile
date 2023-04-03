import ContainerWrapper from "@/components/common/ContainerWrapper";
import ProductCard from "./ProductCard";
import { objProducts } from "@/data/data";

export default function ProductsRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {objProducts.electricalContactBars.map((item, index) => (
          <ProductCard key={index} objProduct={item} />
        ))}
      </div> */}
    </ContainerWrapper>
  );
}
