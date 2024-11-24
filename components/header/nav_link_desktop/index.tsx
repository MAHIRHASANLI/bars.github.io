import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

type Props = {};

const NavLinkDesktop = (props: Props) => {
  return (
    <div className={styles["mob-links"]}>
      <Link href="">Ana Səhifə</Link>
      <Link href="">Haqqımızda</Link>
      <Link href="">Tərəfdaşlar</Link>
      <Link href="">Məhsullar</Link>
      <Link href="">Əlaqə</Link>
    </div>
  );
};

export default NavLinkDesktop;
