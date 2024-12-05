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
      <Link href="/" style={style}>
        Ana Səhifə
      </Link>
      <Link href="/about" style={style}>
        Haqqımızda
      </Link>
      <Link href="/partners" style={style}>
        Tərəfdaşlar
      </Link>
      <Link href="/products" style={style}>
        Məhsullar
      </Link>
      <Link href="/contact" style={style}>
        Əlaqə
      </Link>
    </div>
  );
};

export default NavLinkDesktop;
