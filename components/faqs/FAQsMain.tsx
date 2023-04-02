import { lstFAQs } from "@/data/data";
import { useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import Accordion from "../common/accordion/Accordion";
import CarouselRow from "../home/CarouselRow";

export default function FAQsMain() {
  const [expanded, setExpanded] = useState(0);
  return (
    <>
      <ContainerWrapper>
        <Title title="FAQs" />
        {lstFAQs.map((item, index) => (
          <Accordion
            key={item.id}
            objAccordion={item}
            index={index}
            listLength={lstFAQs.length}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </ContainerWrapper>
      <CarouselRow />
    </>
  );
}
