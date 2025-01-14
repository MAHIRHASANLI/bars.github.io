import PartnesrContainer from "@/container/user/partners";
import DefaultLayout from "@/layouts/default_layout";
import React from "react";

type Props = {};

const PartnersPage = (props: Props) => {
  return (
    <DefaultLayout>
      <PartnesrContainer />
    </DefaultLayout>
  );
};

export default PartnersPage;
