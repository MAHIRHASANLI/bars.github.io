import React from "react";
import styles from "./index.module.css";
import ListComponent from "@/components/home/list_section";

const ListSection: React.FC = () => {
  return (
    <div className={`${styles["list-container"]} fluid`}>
      <div className="container">
        <div className={styles["list-wrapper"]}>
          <ListComponent />
        </div>
      </div>
    </div>
  );
};

export default ListSection;
