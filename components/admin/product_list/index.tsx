"use client";
import TitleSection from "@/components/section_title";
import React from "react";
import styles from "./index.module.css";

import ProductComponent from "../product";
import FormComponent from "../form";
import { ProductType } from "@/types";

const ProductsListComponent = () => {
  const [product, setProduct] = React.useState<any>(null);

  //! FORM AKTIV ETMEK
  const [isOpenForm, setIsOpenForm] = React.useState<boolean>(false);
  const handleOpenForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.textContent === "Məhsul əlavə et") {
      setProduct(null);
    }
    setIsOpenForm((prev) => !prev);
  };

  return (
    <section>
      {isOpenForm && (
        <FormComponent product={product} handleOpenForm={handleOpenForm} />
      )}
      <div>
        <div>
          <TitleSection firtTitle="Məhsullar" lastTitle="" description="" />
        </div>

        <div className={styles["table-wrapper"]}>
          <div className={styles["search-add"]}>
            <div className={styles["serch-input"]}>
              <input type="text" placeholder="Məhsulu axtarın" />
            </div>
            <div>
              <button className={styles["btn-add"]} onClick={handleOpenForm}>
                Məhsul əlavə et
              </button>
            </div>
          </div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Şəkil</th>
                <th>Ad</th>
                <th>Kateqoriya</th>
                <th>Qiymət</th>
                <th>Əməliyyatlar</th>
              </tr>
            </thead>
            {/*!! PRODUCTLAR */}
            <ProductComponent
              setProduct={setProduct}
              handleOpenForm={handleOpenForm}
            />
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductsListComponent;
