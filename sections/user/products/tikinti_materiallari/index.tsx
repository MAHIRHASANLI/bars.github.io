"use client";
import { getAllProduct } from "@/api/product_request";
import ProductsComponent from "@/components/user/products";
import ProductLayoutComponent from "@/layouts/product_layout";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";

// React Server Component
const BuildingMaterialsSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  //! MEHSULUN SERVERDEN GETIRILMESI
  useEffect(() => {
    getAllProduct("tikinti").then((data) => {
      setProducts(data.products);
      setFilteredProducts(data.products);
    });
  }, []);
  //! MEHSULUN AXTARIS FUNKSIYASI
  function handleSearchProducts(event: any) {
    const value = event.target.value.toLowerCase().trim();
    if (value == "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((data) =>
        data.name.toLowerCase().trim().includes(value)
      );
      setFilteredProducts(filtered);
    }
  }

  //! MEHSULUN FILTERLEME FUNKSIYASI
  function handleSorteredProducts(event: any) {
    const copyProducts = [...products];
    if (Number(event.target.value.trim())) {
      setFilteredProducts(copyProducts.sort((x, y) => y.price - x.price));
    } else {
      setFilteredProducts(copyProducts.sort((x, y) => x.price - y.price));
    }
  }
  return (
    <ProductLayoutComponent
      countProducts={filteredProducts.length}
      handleSorteredProducts={handleSorteredProducts}
      handleSearchProducts={handleSearchProducts}
    >
      {filteredProducts &&
        filteredProducts.map((product: ProductType) => (
          <ProductsComponent key={product._id} product={product} />
        ))}
    </ProductLayoutComponent>
  );
};

export default BuildingMaterialsSection;
