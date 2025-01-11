"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { deleteProduct, getAllProduct } from "@/api/product_request";

import { ProductType } from "@/types";
import SweetAlert from "@/utils/sweet_Alert";
interface ProductComponentProps {
  toggleForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setProduct: any;
  products: ProductType[];
  setProducts: any;
}

const ProductComponent: React.FC<ProductComponentProps> = ({
  toggleForm,
  setProduct,
  products,
  setProducts,
}) => {
  React.useEffect(() => {
    getAllProduct("gaz").then(({ products }) => setProducts(products));
  }, []);

  //! MƏHSULU SİLMƏK
  const handleRemoveProduct = async (event: any, id: string | undefined) => {
    if (id) {
      if (confirm("Əminsiniz?")) {
        try {
          const response = await deleteProduct(id || "");
          console.log(response);
          SweetAlert("success", "Məhsul silindi");
          event.target.parentElement.parentElement.remove();
        } catch (error) {
          console.error(error);
          SweetAlert("success", "Məhsul silindi");
        }
      }
    } else {
      SweetAlert("error", "Məhsul Tapılmadı");
    }
  };
  return (
    <tbody className={styles.tbody}>
      {products &&
        products.map((product: ProductType, i: number) => (
          <tr className={styles.product} key={i}>
            <th className={styles["product-img"]}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </th>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td style={{ textAlign: "center" }}>
              <button
                className={styles["btn-put"]}
                onClick={(event) => {
                  setProduct(product);
                  toggleForm(event);
                }}
              >
                Düzəliş et
              </button>
              <button
                className={styles["btn-remove"]}
                onClick={(event) => handleRemoveProduct(event, product._id)}
              >
                Sil
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default ProductComponent;
