import MainGlobalSection from "@/components/main_global_section";
import AboutSection from "@/sections/about_us/about";
import Partners from "@/sections/home/partners";
import React from "react";

type Props = {};

const AboutContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection title="Haqqımızda" description="Haqqımızda öyrənin" />
      <AboutSection />
      <Partners />
    </React.Fragment>
  );
};

export default AboutContainer;
