import HomeContainer from "@/container/home";
import DefaultLayout from "@/default_layout";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <DefaultLayout>
      <HomeContainer />
    </DefaultLayout>
  );
};

export default HomePage;
