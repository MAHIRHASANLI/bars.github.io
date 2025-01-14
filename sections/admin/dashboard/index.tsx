import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
type Props = {};

const DashboardSection = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.dashboard}>
        <div className={styles["links-wrapper"]}>
          <Link href="/message">Gələn Mesajlar</Link>
          <Link href="/product_management">Məhsul İdarəetməsi</Link>
          <Link href="/">Ana Səhifə</Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
