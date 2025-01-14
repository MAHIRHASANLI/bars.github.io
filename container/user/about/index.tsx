import MainGlobalSection from "@/components/user/main_global_section";
import PartnersSliderComponent from "@/components/user/partners_slider";
import AboutSection from "@/sections/user/about";
import React from "react";

type Props = {};

const AboutContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection title="Haqqımızda" description="Haqqımızda öyrənin" />
      <AboutSection />
      <PartnersSliderComponent />
    </React.Fragment>
  );
};

export default AboutContainer;
