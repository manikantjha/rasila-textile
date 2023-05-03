/* eslint-disable @next/next/no-img-element */
import { objHomePageHero } from "@/data/data";
import Hero from "../common/Hero";
import ContactRow from "../contact/contactRow/ContactRow";
import CarouselRow from "./carouselRow/CarouselRow";
import FeaturesRow from "./featuresRow/FeaturesRow";
import FiguresRow from "./figuresRow/FiguresRow";
import TestimonialRow from "./testimonialsRow/TestimonialsRow";

export default function HomeMain() {
  return (
    <>
      <Hero {...objHomePageHero} />
      <CarouselRow />
      <FeaturesRow />
      <FiguresRow />
      <TestimonialRow />
      <ContactRow />
    </>
  );
}
