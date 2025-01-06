import BuildingMaterialsPageContainer from "@/container/procucts/tikinti_materiallari";
import DefaultLayout from "@/default_layout";
import React from "react";

type Props = {};

const BuildingMaterialsPage = (props: Props) => {
  return (
    <DefaultLayout>
      <BuildingMaterialsPageContainer />
    </DefaultLayout>
  );
};

export default BuildingMaterialsPage;
