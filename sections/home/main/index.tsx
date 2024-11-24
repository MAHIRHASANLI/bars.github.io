import React from "react";
import styles from "./index.module.css";
import SliderOwlComponent from "@/components/header/home/main_section/slider_wrapper";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <div className={`${styles["main-section"]} fluid`}>
      <SliderOwlComponent />
    </div>
  );
};

export default MainSection;
