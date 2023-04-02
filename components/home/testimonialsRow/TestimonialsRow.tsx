import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import TestimonialCard from "./TestimonialCard";
import { lstTestimonials } from "@/data/data";

export default function TestimonialRow() {
  return (
    <ContainerWrapper>
      <Title title="What our clients have to say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstTestimonials.slice(0, 4).map((item, index) => (
          <TestimonialCard key={index} objTestimonial={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
