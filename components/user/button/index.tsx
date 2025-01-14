import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
type Props = {
  children: string;
  href: string;
};

const Button: React.FC<Props> = ({ children, href = "" }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
