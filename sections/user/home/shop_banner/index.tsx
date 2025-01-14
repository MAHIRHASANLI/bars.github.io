"use client";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/user/button";
import BannerSlider from "@/components/user/home/banner_sider";

const ShopBanner = () => {
  return (
    <section className={`${styles.section} fluid`}>
      <div className="container">
        <div className={styles["banner-grid"]}>
          <div className={styles.content}>
            <h3>
              Yeni Endirim Başladı! <br />
              Böyük <span>Endirimlər...</span>
            </h3>
            <div className={styles.button}>
              <Button href="/products/qaz_avadanliqlari">Daha ətraflı</Button>
            </div>
          </div>

          <div className={styles.slider}>
            <BannerSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
