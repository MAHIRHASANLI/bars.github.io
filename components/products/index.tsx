import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { ProductType } from "@/types";
import { FaManatSign } from "react-icons/fa6";

type Props = { product: ProductType };

const ProductsComponent: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-img"]}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.product}>{product.brand}</h3>
        </div>
        <div>
          <p className={styles.text}>{product.name}</p>
        </div>
        <div>
          <h5 className={styles.price}>
            Qiymət:{" "}
            <span>
              {" "}
              {product.price} <FaManatSign />
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
