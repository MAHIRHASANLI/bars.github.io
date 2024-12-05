import AboutContainer from "@/container/about";
import DefaultLayout from "@/default_layout";
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
