import React from "react";
import styles from "./index.module.css";
import Button from "@/components/header/button";
import Image from "next/image";
import img1 from "@/images/WhatsApp Image 2024-11-25 at 8.46.44 AM (3).jpeg";

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
              <Button>Daha ətraflı</Button>
            </div>
          </div>

          <div className={styles.images}>
            <div className={styles.image}>
              <Image src={img1} alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
