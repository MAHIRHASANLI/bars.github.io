import MainGlobalSection from "@/components/user/main_global_section";
import Partners from "@/sections/user/partners";
import React from "react";

type Props = {};

const PartnesrContainer = (props: Props) => {
  return (
    <>
      <MainGlobalSection
        title="Tərəfdaşlarımız"
        description="Bizim Tərəfdaşlarımız"
      />
      <Partners />
    </>
  );
};

export default PartnesrContainer;
