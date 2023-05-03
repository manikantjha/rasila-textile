import { lstProductTabs, objProducts } from "@/data/data";
import { useState } from "react";
import Modal from "../common/Modal";
import Title from "../common/Title";
import TabContentContainer from "../common/tabs/TabContentContainer";
import Tabs from "../common/tabs/Tabs";
import ProductCard, { IProduct } from "../home/productsRow/ProductCard";
import ProductDetailCard from "./ProductDetailCard";

export default function ProductsMain() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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
              <ProductCard
                key={index}
                objProduct={item}
                setIsOpen={setIsOpen}
                setSelectedProduct={setSelectedProduct}
              />
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
              <ProductCard
                key={index}
                objProduct={item}
                setIsOpen={setIsOpen}
                setSelectedProduct={setSelectedProduct}
              />
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
              <ProductCard
                key={index}
                objProduct={item}
                setIsOpen={setIsOpen}
                setSelectedProduct={setSelectedProduct}
              />
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
            <ProductCard
              key={index}
              objProduct={item}
              setIsOpen={setIsOpen}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      </TabContentContainer>
    );
  }

  return (
    <>
      <Tabs
        lstTabs={lstProductTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderActiveTab={renderActiveTab}
      />

      {isOpen && selectedProduct && (
        <Modal
          title="Product Details"
          handleClose={() => setIsOpen(false)}
          renderContent={() => (
            <ProductDetailCard
              objProduct={selectedProduct}
              setIsOpen={setIsOpen}
            />
          )}
        />
      )}
    </>
  );
}
