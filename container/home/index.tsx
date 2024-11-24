import MainSection from "@/sections/home/main";
import ProductSection from "@/sections/home/product";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <>
      <MainSection />
      <ProductSection />
    </>
  );
};

export default HomeContainer;
