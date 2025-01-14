import GasEquipmentContainer from "@/container/user/procucts/qaz_avadanliqlari";
import DefaultLayout from "@/layouts/default_layout";
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
