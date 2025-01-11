import { getAllProduct } from "@/api/product_request";
import ProductsComponent from "@/components/products";
import ProductLayoutComponent from "@/product_layout";
import { ProductType } from "@/types";
import React from "react";

const BuildingMaterialsSection = async () => {
  const { products } = await getAllProduct("tikinti");
  return (
    <ProductLayoutComponent>
      {products &&
        products.map((product: ProductType) => (
          <ProductsComponent key={product._id} product={product} />
        ))}
    </ProductLayoutComponent>
  );
};

export default BuildingMaterialsSection;
