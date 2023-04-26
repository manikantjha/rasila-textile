import { useRouter } from "next/router";
import Hero from "../common/Hero";
import ContactRow from "../contact/contactRow/ContactRow";
import CarouselRow from "./CarouselRow";
import FeaturesRow from "./featuresRow/FeaturesRow";
import FiguresRow from "./figuresRow/FiguresRow";
import TestimonialRow from "./testimonialsRow/TestimonialsRow";

export default function HomeMain() {
  const router = useRouter();
  return (
    <>
      <Hero
        imgSrc="https://images.unsplash.com/photo-1526290766257-c015850e4629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        hasContent={true}
        title="SARDARJI"
        imgAlt=""
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ab ducimus ullam laudantium suscipit voluptates."
        onClick={() => router.push("/contact")}
        btnText="Contact Us"
      />
      <CarouselRow />
      <FeaturesRow />
      <FiguresRow />
      <TestimonialRow />
      <ContactRow />
    </>
  );
}
