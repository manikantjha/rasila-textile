import { lstFAQs } from "@/data/data";
import ContainerWrapper from "../common/ContainerWrapper";
import Accordion from "../common/accordion/Accordion";
import { useState } from "react";
import Title from "../common/Title";

export default function FAQsMain() {
  const [expanded, setExpanded] = useState(0);
  return (
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
  );
}
