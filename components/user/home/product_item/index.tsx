import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/user/button";

import img1 from "@/images/9.png";
import img2 from "@/images/8.png";
import img3 from "@/images/7.png";

const ProductItem: React.FC = () => {
  const arrr = [{ image: img1 }, { image: img2 }, { image: img3 }];

  return (
    arrr &&
    arrr.map(({ image }, index) => (
      <div className={styles.product}>
        <div className={styles["product-img"]}>
          <Image
            src={image.src}
            alt="Nömrə bir"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          <h3>Nömrə Bir - Yapışdırıcı</h3>
          <span>Tikinti Materialları</span>
          <div>
            <Button href="/products/tikinti_materiallari">Daha ətraflı</Button>
          </div>
        </div>
      </div>
    ))
  );
};

export default ProductItem;
