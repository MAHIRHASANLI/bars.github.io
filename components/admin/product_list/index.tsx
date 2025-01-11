"use client";
import TitleSection from "@/components/section_title";
import React from "react";
import styles from "./index.module.css";

import ProductComponent from "../product";
import FormComponent from "../form";
import { ProductType } from "@/types";

const ProductsListComponent = () => {
  //! PRODUCTLAR
  const [products, setProducts] = React.useState<ProductType[]>([]);

  //! FORM GOSTERMEK VE GIZLEMEK
  const [product, setProduct] = React.useState<any>(null);
  const [isOpenForm, setIsOpenForm] = React.useState<boolean>(false);
  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.textContent === "Məhsul əlavə et") {
      setProduct(null);
    }
    setIsOpenForm((prev) => !prev);
  };

  //! FORMU GIZLEMEK
  const closeForm = () => {
    setIsOpenForm(false);
  };

  //! SEARCH PRODUCT
  const handleSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    products.forEach((product: ProductType) => {
      if (
        product.name
          .toLowerCase()
          .trim()
          .includes(event.target.value.toLowerCase().trim())
      ) {
        setProducts(
          products.filter((product) =>
            product.name
              .toLowerCase()
              .trim()
              .includes(event.target.value.toLowerCase().trim())
          )
        );
      }
    });
  };
  return (
    <section>
      {isOpenForm && <FormComponent product={product} closeForm={closeForm} />}
      <div>
        <div>
          <TitleSection firtTitle="Məhsullar" lastTitle="" description="" />
        </div>

        <div className={styles["table-wrapper"]}>
          <div className={styles["search-add"]}>
            <div className={styles["serch-input"]}>
              <input
                type="text"
                placeholder="Məhsulu axtarın"
                onChange={handleSearchProduct}
              />
            </div>
            <div>
              <button className={styles["btn-add"]} onClick={toggleForm}>
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
              products={products}
              setProducts={setProducts}
              setProduct={setProduct}
              toggleForm={toggleForm}
            />
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductsListComponent;
