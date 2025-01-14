import MainGlobalSection from "@/components/user/main_global_section";
import BuildingMaterialsSection from "@/sections/user/products/tikinti_materiallari";
import React from "react";

type Props = {};

const BuildingMaterialsContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection
        title="Tikinti Materialları"
        description="Məhsullarımızla tanış olun"
      />
      <BuildingMaterialsSection />
    </React.Fragment>
  );
};

export default BuildingMaterialsContainer;
