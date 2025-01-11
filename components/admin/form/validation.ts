import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Ad çox qısa!")
    .max(100, "Ad çox uzun!")
    .trim("Boşluq buraxmayın")
    .required("Ad tələb olunur"),

  brand: Yup.string()
    .min(3, "Marka çox qısa!")
    .max(20, "Marka çox uzun!")
    .trim("Boşluq buraxmayın")
    .required("Marka tələb olunur"),

  price: Yup.number()
    .min(1, "Qiymət çox kiçik!")
    .nullable()
    .typeError("Qiyməti rəqəm ilə daxil edin")
    .required("Qiymət tələb olunur"),

  category: Yup.string()
    .trim("Boşluq buraxmayın")
    .required("Kateqoriya tələb olunur"),

  image: Yup.mixed().required("Şəkil tələb olunur"),
});

export default validationSchema;
