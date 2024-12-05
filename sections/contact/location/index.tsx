import React from "react";
import styles from "./index.module.css";
import TitleSection from "@/components/section_title";
import { FaLocationDot } from "react-icons/fa6";
import MapComponent from "@/components/contact/map_component";

const Location = () => {
  return (
    <section className={`${styles.section} fluid`}>
      <div className={styles["find-location"]}>
        <TitleSection
          firtTitle={<FaLocationDot />}
          lastTitle="Məkanımızı Tapın"
          description=""
        />
      </div>

      <div className={styles.map}>
        <MapComponent />
      </div>
    </section>
  );
};

export default Location;
