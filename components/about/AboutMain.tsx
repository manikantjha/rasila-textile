import {
  objAboutPageHero,
  objInfrastructureRow,
  objQualityRow,
} from "@/data/data";
import Hero from "../common/Hero";
import Row from "../common/row/Row";
import CarouselRow from "../home/carouselRow/CarouselRow";
import FounderRow from "./founderRow/FounderRow";

export default function AboutMain() {
  return (
    <>
      <Hero {...objAboutPageHero} />
      <FounderRow />
      <Row {...objInfrastructureRow} />
      <Row {...objQualityRow} />
      <CarouselRow />
    </>
  );
}
