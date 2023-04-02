import ContainerWrapper from "@/components/common/ContainerWrapper";
import ProductCard from "./ProductCard";

export default function ProductsRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
