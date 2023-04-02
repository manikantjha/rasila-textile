import { lstProductTabs, objProducts } from "@/data/data";
import ContainerWrapper from "../common/ContainerWrapper";
import Tabs from "../common/tabs/Tabs";
import { useState } from "react";
import Title from "../common/Title";
import TabContentContainer from "../common/tabs/TabContentContainer";
import ProductCard from "../home/productsRow/ProductCard";

export default function ProductsMain() {
  const [activeTab, setActiveTab] = useState(0);

  function renderActiveTab() {
    if (activeTab === 1) {
      return (
        <TabContentContainer>
          <Title
            title="Electro Mechanic Warp Stop Motion"
            className="!text-left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objProducts.electroMechanicWarpStopMotions.map((item, index) => (
              <ProductCard key={index} objProduct={item} />
            ))}
          </div>
        </TabContentContainer>
      );
    }
    if (activeTab === 2) {
      return (
        <TabContentContainer>
          <Title title="Serrated Bars" className="!text-left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objProducts.serratedBars.map((item, index) => (
              <ProductCard key={index} objProduct={item} />
            ))}
          </div>
        </TabContentContainer>
      );
    }
    if (activeTab === 3) {
      return (
        <TabContentContainer>
          <Title title="Drop Pin" className="!text-left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objProducts.dropPins.map((item, index) => (
              <ProductCard key={index} objProduct={item} />
            ))}
          </div>
        </TabContentContainer>
      );
    }

    return (
      <TabContentContainer>
        <Title title="Electrical Contact Bar" className="!text-left" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {objProducts.electricalContactBars.map((item, index) => (
            <ProductCard key={index} objProduct={item} />
          ))}
        </div>
      </TabContentContainer>
    );
  }

  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Tabs
        lstTabs={lstProductTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderActiveTab={renderActiveTab}
      />
    </ContainerWrapper>
  );
}
