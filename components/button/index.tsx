import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <Link href="" className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
