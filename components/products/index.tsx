import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import img from "@/images/main_section_img1.jpeg";
type Props = {};

const ProductsComponent = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-img"]}>
        <Image src={img} alt="ss" fill />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.product}>ZMBCARSTA</h3>
        </div>
        <div>
          <p className={styles.text}>
            Karvan sayğac qutusu yığılması – Aşağıdan Giriş-Çıxış
          </p>
        </div>
        <div>
          <h5 className={styles.price}>Qiymət: 30M</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
