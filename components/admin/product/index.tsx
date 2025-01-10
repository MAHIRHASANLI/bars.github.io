"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { deleteProduct, getAllProduct } from "@/api/product_request";

import { ProductType } from "@/types";
interface ProductComponentProps {
  handleOpenForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setProduct: any;
}

const ProductComponent: React.FC<ProductComponentProps> = ({
  handleOpenForm,
  setProduct,
}) => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  useEffect(() => {
    getAllProduct("gaz").then(({ products }) => setProducts(products));
  }, []);

  //! MƏHSULU SİLMƏK
  const handleRemoveProduct = async (id: string | undefined) => {
    if (confirm("Əminsiniz?")) {
      try {
        const response = await deleteProduct(id || "");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
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
                alt=""
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
                  handleOpenForm(event);
                }}
              >
                Düzəliş et
              </button>
              <button
                className={styles["btn-remove"]}
                onClick={() => handleRemoveProduct(product._id)}
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
