"use client";
import React from "react";
import styles from "./index.module.css";
import { ProductType } from "@/types";
import { FormikHelpers, useFormik } from "formik";
import validationSchema from "./validation";
import {
  postCloudinaryImg,
  postProduct,
  putProduct,
} from "@/api/product_request";
import SweetAlert from "@/utils/sweet_Alert";

interface FormComponentProps {
  closeForm: () => void;
  product: ProductType | any;
}

const FormComponent: React.FC<FormComponentProps> = ({
  closeForm,
  product,
}) => {
  const formik = useFormik<ProductType>({
    initialValues: {
      name: product ? product.name : "",
      brand: product ? product.brand : "",
      price: product ? product.price : "",
      image: product ? product.image : "",
      category: product ? product.category : "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions: FormikHelpers<ProductType>) => {
      //! FORMU GIZLEMEK
      closeForm();
      //! POST SORGUSU
      const image_IN_ClOUD = await postCloudinaryImg(values.image);
      if (product === null) {
        try {
          const response = await postProduct({
            ...values,
            image: image_IN_ClOUD,
          });
          //TODO MESAJS GOSTERILMESI
          SweetAlert("success", "Məhsul əlavə edildi");
          //TODO FORM TEMIZLENMESI
          actions.resetForm();
          //?
          console.log(response);
        } catch (error) {
          //TODO MESAJS GOSTERILMESI
          SweetAlert("success", "Məhsul əlavə edilmədi");
          //TODO FORM TEMIZLENMESI
          actions.resetForm();
          //?
          console.error(error);
        }
      }
      //! UPDATE SORGUSU
      else if (product !== null) {
        try {
          const response = await putProduct(
            {
              ...values,
              image: image_IN_ClOUD,
            },
            product._id
          );
          //TODO MESAJS GOSTERILMESI
          SweetAlert("success", "Məhsul yeniləndi");
          //?
          console.log(response);
        } catch (error) {
          SweetAlert("success", "Məhsul yenilənmədi");
          //?
          console.error(error);
        }
      }
    },
  });

  return (
    <div className={styles["form-wrapper"]}>
      <button className={styles.close} onClick={closeForm}>
        X
      </button>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles["select-file"]}>
          <div className={styles["select"]}>
            <select
              onChange={formik.handleChange}
              value={formik.values.category}
              name="category"
            >
              <option value="">Kateqoriya seçin</option>
              <option value="gaz">Qaz avadanlığı</option>
              <option value="tikinti">Tikinti materialları</option>
            </select>
            <span>{formik.errors.category}</span>
          </div>
          <div className={styles["input-file"]}>
            <input
              type="file"
              name="image"
              onChange={(event: any) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
            <span>{formik.errors.image}</span>
          </div>
        </div>
        <div className={styles["input-group"]}>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            placeholder="Məhsulun adı"
          />
          <span>{formik.errors.name}</span>
        </div>
        <div className={styles["input-group"]}>
          <input
            onChange={formik.handleChange}
            value={formik.values.brand}
            name="brand"
            placeholder="Marka"
          />
          <span>{formik.errors.brand}</span>
        </div>
        <div className={styles["input-group"]}>
          <input
            onChange={formik.handleChange}
            value={formik.values.price}
            name="price"
            placeholder="Qiymət"
            inputMode="numeric"
          />
          <span>{formik.errors.price}</span>
        </div>
        <button type="submit" className={styles["btn-submit"]}>
          Əlavə et
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
