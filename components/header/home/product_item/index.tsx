import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/header/button";
type Props = {
  img: string;
};

const ProductItem: React.FC<Props> = ({ img }) => {
  return (
    <div className={styles.product}>
      <div className={styles["product-img"]}>
        <Image src={img} alt="" fill />
      </div>
      <div className={styles.content}>
        <h3>Strawberry</h3>
        <span>Smart tipli qaz sayğacı</span>
        <div>
          <Button>Daha ətraflı</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
