import React from "react";
import styles from "./index.module.css";
type Props = {
  title: string;
  description: string;
};

const MainGlobalSection: React.FC<Props> = ({
  title = "",
  description = "",
}) => {
  return (
    <section className={`${styles.section} fluid`}>
      <div className="container">
        <div className={styles.content}>
          <p>{description}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default MainGlobalSection;
