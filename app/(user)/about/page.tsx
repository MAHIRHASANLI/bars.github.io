import AboutContainer from "@/container/user/about";
import DefaultLayout from "@/layouts/default_layout";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <DefaultLayout>
      <AboutContainer />
    </DefaultLayout>
  );
};

export default AboutPage;
