import { lstTestimonials } from "@/data/data";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import TestimonialCard from "../home/testimonialsRow/TestimonialCard";
import CarouselRow from "../home/CarouselRow";

export default function TestimonialsMain() {
  return (
    <>
      <ContainerWrapper>
        <Title title="What Our Clients Have to Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lstTestimonials.map((item, index) => (
            <TestimonialCard key={index} objTestimonial={item} />
          ))}
        </div>
      </ContainerWrapper>
      <CarouselRow />
    </>
  );
}
