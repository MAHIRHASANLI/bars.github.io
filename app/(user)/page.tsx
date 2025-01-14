import HomeContainer from "@/container/user/home";
import DefaultLayout from "@/layouts/default_layout";
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
