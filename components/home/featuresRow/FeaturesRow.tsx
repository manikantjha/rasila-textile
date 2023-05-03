import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstFeatures } from "@/data/data";
import FeatureCard from "./FeatureCard";

export default function FeaturesRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstFeatures.map((item, index) => (
          <FeatureCard key={index} objFeature={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
