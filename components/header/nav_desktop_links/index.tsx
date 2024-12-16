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
    <div className={styles["nav-links"]}>
      <Link href="/" prefetch={true} scroll={false} style={style}>
        Ana Səhifə
      </Link>
      <Link href="/about" prefetch={true} scroll={false} style={style}>
        Haqqımızda
      </Link>
      <Link href="/partners" prefetch={true} scroll={false} style={style}>
        Tərəfdaşlar
      </Link>
      <Link href="/products" prefetch={true} scroll={false} style={style}>
        Məhsullar
      </Link>
      <Link href="/contact" prefetch={true} scroll={false} style={style}>
        Əlaqə
      </Link>
    </div>
  );
};

export default NavLinkDesktop;
