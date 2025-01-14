"use client";
import React from "react";
import styles from "./index.module.css";

const ProductLayoutComponent = ({
  children,
  handleSearchProducts,
  handleSorteredProducts,
  countProducts,
}: Readonly<{
  children: React.ReactNode;
  handleSearchProducts: any;
  handleSorteredProducts: any;
  countProducts: number;
}>) => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles["grid-layout"]}>
          <div className={styles["grid-filters"]}>
            <div className={styles.text}>
              <h3>Filter edin:</h3>
            </div>
            <div>
              <select
                name=""
                id=""
                className={styles["select-options"]}
                onChange={handleSorteredProducts}
              >
                <option value="">Ən sonuna görə çeşidləyin</option>
                <option value="0">
                  Qiymətə görə çeşidləyin: aşağıdan yuxarıya
                </option>
                <option value="1">
                  Qiymətə görə çeşidləyin: yüksəkdən aşağıya
                </option>
              </select>
            </div>
          </div>
          <div className={styles["grid-product"]}>
            <div>
              <div className={styles.text}>
                <h3>Axtarış edin:</h3>
              </div>
              <div className={styles["search-input"]}>
                <input
                  type="text"
                  placeholder="Məhsul axtarın"
                  onChange={handleSearchProducts}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["products-list"]}>
          <div className={styles.text}>
            <h3>{countProducts} nəticə göstərilir</h3>
          </div>
          <div className={styles.products}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayoutComponent;
