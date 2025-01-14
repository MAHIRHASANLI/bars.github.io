import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

const ErrorComponent = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{text}</h2>
        <p>Sorğulanan resurs tapılmadı</p>
      </div>
      <div className={styles.link}>
        <Link href="/">Əsas səhifəyə qayıt</Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
