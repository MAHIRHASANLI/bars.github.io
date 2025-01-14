import * as Yup from "yup";
const validationContactForm = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Ad çox qısa")
    .max(50, "Ad çox uzun")
    .required("Ad tələb olunur"),
  email: Yup.string()
    .email("Düzgün email formatı daxil edin")
    .required("Mail tələb olunur"),
  phone: Yup.string()
    .min(5, "Nömrə çox qısa")
    .max(50, "Nömrə çox uzun")
    .nullable()
    .typeError("Nömrəni rəqəm ilə daxil edin")
    .required("Nömrə tələb olunur"),
  topic: Yup.string().min(1, "Mövzu çox qısa").max(50, "Mövzu çox uzun"),
  message: Yup.string()
    .min(3, "Mesajınız çox qısa")
    .max(200, "Mesajınız çox uzun")
    .required("Mesajınızı yazmağınız tələb olunur"),
});

export default validationContactForm;
