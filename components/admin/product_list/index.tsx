"use client";
import TitleSection from "@/components/user/section_title";
import React from "react";
import styles from "./index.module.css";

import ProductComponent from "../product";
import FormComponent from "../form";
import { ProductType } from "@/types";
import { getAllProduct } from "@/api/product_request";
import { FaManatSign } from "react-icons/fa6";

const ProductsListComponent = () => {
  //! SELECTED DATA
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("tikinti");
  const handleSelectOption = (event: any) => {
    setSelectedCategory(event.target.value.trim());
  };
  //! PRODUCTLAR
  const [products, setProducts] = React.useState<ProductType[]>([]);

  const [filteredProducts, setFilteredProducts] = React.useState<ProductType[]>(
    []
  );

  React.useEffect(() => {
    // function getData() {
    if (selectedCategory)
      getAllProduct(selectedCategory).then(({ products }) => {
        setProducts(products);
        setFilteredProducts(products);
      });
    // }
    // getData();
  }, [selectedCategory]);

  //! FORM GOSTERMEK VE GIZLEMEK
  const [product, setProduct] = React.useState<any>(null);
  const [isOpenForm, setIsOpenForm] = React.useState<boolean>(false);
  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.textContent === "Məhsul əlavə et") {
      setProduct(null);
    }
    setIsOpenForm((prev) => !prev);
  };

  //! SEARCH PRODUCT
  const handleSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toLowerCase();
    if (value == "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().trim().includes(value)
      );
      setFilteredProducts(filtered);
    }
  };

  //! FORMU GIZLEMEK
  const closeForm = () => {
    setIsOpenForm(false);
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
            <div className={styles["select-btn"]}>
              <select className={styles.select} onChange={handleSelectOption}>
                <option value="tikinti">Tikinti Materialları</option>
                <option value="gaz">Qaz avadanlıqları</option>
              </select>

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
                <th>
                  Qiymət <FaManatSign />
                </th>
                <th>Əməliyyatlar</th>
              </tr>
            </thead>
            {/*!! PRODUCTLAR */}
            <ProductComponent
              filteredProducts={filteredProducts}
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
