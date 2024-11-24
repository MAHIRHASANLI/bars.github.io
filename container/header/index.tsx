"use client";
import NavLinkDesktop from "@/components/header/nav_link_desktop";
// import NavLinkMobile from "@/components/header/nav_linnk_mobile";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import barsLogo from "@/images/barsLogo.png";
type Props = {};

const Header = (props: Props) => {
  const [stil, setStil] = useState({
    height: "140px",
    with: "100%",
    background: "transparent",
    // backdropFilter: "blur(0px)",
    // WebkitBackdropFilter: "blur(0px)",
  });

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setStil({
        height: "85px",
        with: "100%",
        background: "#051922",
        // backdropFilter: "blur(10px)",
        // WebkitBackdropFilter: "blur(10px)",
      });
    } else {
      setStil({
        height: "100px",
        with: "100%",
        background: "transparent",
        // backdropFilter: "blur(0px)",
        // WebkitBackdropFilter: "blur(0px)",
      });
    }
  };

  // useEffect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} fluid`} style={stil}>
      <div className={`${styles["top-header-area"]} container`}>
        <div className={styles["header-item"]}>
          <div className={styles.logo}>
            {" "}
            <Image src={barsLogo} alt="bars" fill />
          </div>

          <div>
            <NavLinkDesktop />
          </div>
        </div>

        {/* <div>
          <NavLinkMobile/>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
