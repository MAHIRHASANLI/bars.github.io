import React from "react";
import styles from "./index.module.css";

const ProductLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  //   const [minValue, setMinValue] = useState(0); // Başlanğıc qiymət
  //   const [maxValue, setMaxValue] = useState(100); // Son qiymət

  // Başlanğıc qiyməti tənzimləmək üçün funksiya
  //   const handleMinChange = (e: any) => {
  //     const value = Math.min(Number(e.target.value), maxValue - 1); // minValue maxValue-dan kiçik olmalıdır
  //     setMinValue(value);
  //   };

  //   // Son qiyməti tənzimləmək üçün funksiya
  //   const handleMaxChange = (e: any) => {
  //     const value = Math.max(Number(e.target.value), minValue + 1); // maxValue minValue-dan böyük olmalıdır
  //     setMaxValue(value);
  //   };
  return (
    <section className={styles.section}>
      <div className={styles["grid-layout"]}>
        <div className={styles["grid-filters"]}>
          <div className={styles.text}>
            <h3>Bütün 6 nəticə göstərilir</h3>
          </div>
          <div className={styles.text}>
            <h3>Filter edin:</h3>
          </div>
          <div>
            <select name="" id="" className={styles["select-options"]}>
              <option value="">Ən sonuna görə çeşidləyin</option>
              <option value="">
                Qiymətə görə çeşidləyin: aşağıdan yuxarıya
              </option>
              <option value="">
                Qiymətə görə çeşidləyin: yüksəkdən aşağıya
              </option>
            </select>
          </div>
          <div className={styles.range}>
            <label htmlFor="">Qiymət: 3manat - 30manat</label>
            <br />
            <input
              type="range"
              min="20"
              max="100"
              //   value={minValue}
              //   onChange={handleMinChange}
            />
          </div>
        </div>
        <div className={styles["grid-product"]}>
          <div>
            <div className={styles["search-input"]}>
              <input type="text" placeholder="Məhsul axtarın" />
            </div>
          </div>
          <div className={styles.products}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayoutComponent;
