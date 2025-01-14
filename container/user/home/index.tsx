import PartnersSliderComponent from "@/components/user/partners_slider";
import ListSection from "@/sections/user/home/list";
import MainSection from "@/sections/user/home/main";
import ProductSection from "@/sections/user/home/products";
import ShopBanner from "@/sections/user/home/shop_banner";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainSection />
      <ListSection />
      <ProductSection />
      <ShopBanner />
      <PartnersSliderComponent />
    </React.Fragment>
  );
};

export default HomeContainer;
