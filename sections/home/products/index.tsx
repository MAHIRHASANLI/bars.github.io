import React from "react";
import styles from "./index.module.css";

import img1 from "@/images/productsimg1.jpeg";
import img2 from "@/images/productsimg2.jpeg";
import img3 from "@/images/productsimg3.jpeg";
import TitleSection from "@/components/section_title";
import ProductItem from "@/components/home/product_item";
type Props = {};

const ProductSection: React.FC = (props: Props) => {
  const arrr = [img1, img2, img3];
  return (
    <div className={styles["products-section"]}>
      <TitleSection
        firtTitle="Bizim"
        lastTitle="Məhsullar"
        description="Müştərilərimiz üçün keyfiyyətli və etibarlı məhsullar seçmişik, uzunmüddətli istifadə və yüksək performans təmin edir."
      />
      <div className={styles.products}>
        {arrr &&
          arrr.map((item, index) => <ProductItem img={item.src} key={index} />)}
      </div>
    </div>
  );
};

export default ProductSection;
