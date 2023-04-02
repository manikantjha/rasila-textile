import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import TestimonialCard from "../home/testimonialsRow/TestimonialCard";

export default function TestimonialsMain() {
  return (
    <ContainerWrapper>
      <Title title="What Our Clients Have to Say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
