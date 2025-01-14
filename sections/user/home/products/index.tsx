import React from "react";
import styles from "./index.module.css";

import TitleSection from "@/components/user/section_title";
import ProductItem from "@/components/user/home/product_item";

const ProductSection: React.FC = () => {
  return (
    <div className={styles["products-section"]}>
      <TitleSection
        firtTitle="Bizim"
        lastTitle="Məhsullar"
        description="Müştərilərimiz üçün keyfiyyətli və etibarlı məhsullar seçmişik, uzunmüddətli istifadə və yüksək performans təmin edir."
      />
      <div className={styles.products}>
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductSection;
