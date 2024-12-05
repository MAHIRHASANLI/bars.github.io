import MainGlobalSection from "@/components/main_global_section";
import Partners from "@/sections/home/partners";
import React from "react";

type Props = {};

const AboutContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection title="Haqqımızda" description="Lorem İpsum" />
      <Partners />
    </React.Fragment>
  );
};

export default AboutContainer;
