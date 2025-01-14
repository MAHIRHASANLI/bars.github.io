import MainGlobalSection from "@/components/user/main_global_section";
import GasEquipmentSection from "@/sections/user/products/qaz_avadanliqlari";

import React from "react";

type Props = {};

const GasEquipmentContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection
        title="Qaz Avadanlıqları"
        description="Məhsullarımızla tanış olun"
      />
      <GasEquipmentSection />
    </React.Fragment>
  );
};

export default GasEquipmentContainer;
