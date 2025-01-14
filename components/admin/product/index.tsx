"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { deleteProduct, getAllProduct } from "@/api/product_request";

import { ProductType } from "@/types";
import SweetAlert from "@/utils/sweet_Alert";
import { FaManatSign } from "react-icons/fa6";
interface ProductComponentProps {
  toggleForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setProduct: any;
  filteredProducts: ProductType[];
}

const ProductComponent: React.FC<ProductComponentProps> = ({
  toggleForm,
  setProduct,
  filteredProducts,
}) => {
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
      {filteredProducts &&
        filteredProducts.map((product: ProductType, i: number) => (
          <tr className={styles.product} key={i}>
            <th>
              <div className={styles["product-img"]}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </th>
            <td style={{ maxWidth: "250px" }}>{product.name}</td>
            <td>{product.brand}</td>
            <td>
              {product.price} <FaManatSign />
            </td>
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
