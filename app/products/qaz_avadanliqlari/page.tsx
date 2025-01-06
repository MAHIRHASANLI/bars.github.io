import GasEquipmentContainer from "@/container/procucts/qaz_avadanliqlari";
import DefaultLayout from "@/default_layout";
import React from "react";

type Props = {};

const GasEquipmentPage = (props: Props) => {
  return (
    <DefaultLayout>
      <GasEquipmentContainer />
    </DefaultLayout>
  );
};

export default GasEquipmentPage;
