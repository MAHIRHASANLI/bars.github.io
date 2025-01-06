import ProductsComponent from "@/components/products";
import ProductLayoutComponent from "@/product_layout";
import React from "react";

type Props = {};

const GasEquipmentSection = (props: Props) => {
  return (
    <ProductLayoutComponent>
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <ProductsComponent key={i} />
        ))}
    </ProductLayoutComponent>
  );
};

export default GasEquipmentSection;
