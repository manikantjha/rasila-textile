import React from "react";
import FounderCard from "./FounderCard";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";

export default function FounderRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="Meet Our Founder" />
      <div className="grid grid-cols-1 lg:grid-cols-1 mx-auto gap-4 max-w-4xl place-items-center">
        <FounderCard />
        {/* <FounderCard /> */}
      </div>
    </ContainerWrapper>
  );
}
