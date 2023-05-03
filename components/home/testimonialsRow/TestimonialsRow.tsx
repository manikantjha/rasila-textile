import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstTestimonials } from "@/data/data";
import TestimonialCard from "./TestimonialCard";
import SeeAllLinkBtn from "@/components/common/SeeAllLinkBtn";

export default function TestimonialRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="What our clients have to say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstTestimonials.slice(0, 4).map((item, index) => (
          <TestimonialCard key={index} objTestimonial={item} />
        ))}
      </div>
      <div className="my-6">
        <SeeAllLinkBtn href="/testimonials" btnText="See All Reviews" />
      </div>
    </ContainerWrapper>
  );
}
