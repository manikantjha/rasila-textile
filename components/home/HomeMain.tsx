import ContactRow from "../contact/contactRow/ContactRow";
import CarouselRow from "./CarouselRow";
import FeaturesRow from "./featuresRow/FeaturesRow";
import FiguresRow from "./figuresRow/FiguresRow";
import TestimonialRow from "./testimonialsRow/TestimonialsRow";

export default function HomeMain() {
  return (
    <>
      <CarouselRow />
      <FeaturesRow />
      <FiguresRow />
      <TestimonialRow />
      {/* <ProductsRow /> */}
      <ContactRow />
    </>
  );
}
