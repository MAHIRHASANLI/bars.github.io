import React from "react";
import styles from "./index.module.css";
type Props = {
  firtTitle: any;
  description: string;
  lastTitle: string;
};

const TitleSection: React.FC<Props> = ({
  firtTitle = "",
  lastTitle = "",
  description = "",
}) => {
  return (
    <div className={styles["section-title"]}>
      <div className={styles.title}>
        <h2>
          <span style={{ color: "#006738" }}>{firtTitle}</span> {lastTitle}
        </h2>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TitleSection;
