import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const NavLinkDesktop: React.FC = () => {
  const [style, setStyle] = useState({ color: "#fff" });

  useEffect(() => {
    window.addEventListener("scroll", chanceStyleElement);
  }, []);
  function chanceStyleElement() {
    if (window.scrollY > 100) setStyle({ color: "#006738" });
    else setStyle({ color: "#fff" });
  }
  return (
    <ul className={styles["nav-links"]}>
      <Link href="/" prefetch={true} scroll={false} style={style}>
        Ana Səhifə
      </Link>
      <Link href="/about" prefetch={true} scroll={false} style={style}>
        Haqqımızda
      </Link>
      <Link href="/partners" prefetch={true} scroll={false} style={style}>
        Tərəfdaşlar
      </Link>

      <li className={styles["dropdown-wrapper"]}>
        <Link href="/" prefetch={true} scroll={false} style={style}>
          Məhsullar
        </Link>

        <ul className={styles.dropdown}>
          <Link href="/products/qaz_avadanliqlari">Qaz avadanliqlari</Link>

          <Link href="/products/tikinti_materiallari">
            Tikinti materiallari
          </Link>
        </ul>
      </li>

      <Link href="/contact" prefetch={true} scroll={false} style={style}>
        Əlaqə
      </Link>
    </ul>
  );
};

export default NavLinkDesktop;
