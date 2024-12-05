import ListSection from "@/sections/home/list";
import MainSection from "@/sections/home/main";
import ProductSection from "@/sections/home/products";
import ShopBanner from "@/sections/home/shop_banner";
import Partners from "@/sections/home/partners";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainSection />
      <ListSection />
      <ProductSection />
      <ShopBanner />
      <Partners />
    </React.Fragment>
  );
};

export default HomeContainer;
