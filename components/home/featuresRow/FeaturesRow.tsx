import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import FeatureCard from "./FeatureCard";

export default function FeaturesRow() {
  return (
    <ContainerWrapper>
      <Title title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((item, index) => (
          <FeatureCard key={index} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
