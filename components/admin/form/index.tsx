"use client";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/button";
import { ProductType } from "@/types";
import { FormikHelpers, useFormik } from "formik";
import validationSchema from "./validation";
import {
  postCloudinaryImg,
  postProduct,
  putProduct,
} from "@/api/product_request";
import { log } from "console";

interface FormComponentProps {
  handleOpenForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  product: ProductType | any;
}

const FormComponent: React.FC<FormComponentProps> = ({
  handleOpenForm,
  product,
}) => {
  const formik = useFormik<ProductType>({
    initialValues: {
      name: product ? product.name : "",
      brand: product ? product.brand : "",
      price: product ? product.price : 0,
      image: product ? product.image : "",
      category: product ? product.category : "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions: FormikHelpers<ProductType>) => {
      //! POST SORGUSU
      const image_IN_ClOUD = await postCloudinaryImg(values.image);
      if (product === null) {
        const response = await postProduct({
          ...values,
          image: image_IN_ClOUD,
        });

        //TODO FORM TEMIZLENMESI
        actions.resetForm();
        //?
        console.log(response);
      }
      //! UPDATE SORGUSU
      else if (product !== null) {
        const response = await putProduct(
          {
            ...values,
            image: image_IN_ClOUD,
          },
          product._id
        );

        //?
        console.log(response);
      }
    },
  });

  return (
    <div className={styles["form-wrapper"]}>
      <button
        className={styles.close}
        onClick={(event) => handleOpenForm(event)}
      >
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
