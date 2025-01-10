import { ProductType } from "@/types";
import * as Yup from "yup";

const validationSchema: Yup.Schema<ProductType> = Yup.object().shape({
  name: Yup.string()
    .min(5, "Ad çox qısa!")
    .max(20, "Ad çox uzun!")
    .required("Ad tələb olunur"),

  brand: Yup.string()
    .min(3, "Marka çox qısa!")
    .max(20, "Marka çox uzun!")
    .required("Marka tələb olunur"),

  price: Yup.number()
    .min(1, "Qiymət çox kiçik!")
    .required("Qiymət tələb olunur"),

  category: Yup.string().required("Kateqoriya tələb olunur"),

  image: Yup.mixed().required("Şəkil tələb olunur"),
  // .test(
  //   "fileType",
  //   "Düzgün şəkil formatı seçilməyib",
  //   (value) =>
  //     !value ||
  //     (value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
  // ),
});

export default validationSchema;
