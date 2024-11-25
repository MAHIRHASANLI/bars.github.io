import ListSection from "@/sections/home/list";
import MainSection from "@/sections/home/main";
import ProductSection from "@/sections/home/products";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <>
      <MainSection />
      <ListSection />
      <ProductSection />
    </>
  );
};

export default HomeContainer;
