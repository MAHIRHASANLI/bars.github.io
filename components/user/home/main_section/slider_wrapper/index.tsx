"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.css";
import Link from "next/link";
import mainImage1 from "@/images/main1.jpg";
import mainImage2 from "@/images/main2.webp";
import mainImage3 from "@/images/main3.webp";
import mainImage4 from "@/images/main5.jpg";

const SliderOwlComponent = ({ title = "", description = "", img = "" }) => {
  const mainSlides = [
    {
      title: "Bars İnşaat – Etibarlı Tikinti Materialları",
      description:
        "Keyfiyyətli və dözümlü tikinti materialları ilə layihələrinizi gerçəkləşdirin.",
      img: mainImage1.src,
    },
    {
      title: "Qaz Avadanlıqları – Təhlükəsiz və Sərfəli Həllər",
      description:
        "Bars İnşaat sizə təhlükəsiz və sertifikatlı qaz avadanlıqları təklif edir.",
      img: mainImage2.src,
    },
    {
      title: "Sərfəli Qiymət, Yüksək Keyfiyyət",
      description:
        "Tikinti materialları və qaz avadanlıqlarında ən sərfəli qiymətləri təklif edirik.",
      img: mainImage3.src,
    },
    {
      title: "Bars İnşaat – Peşəkar Məsləhət və Dəstək",
      description:
        "Məhsul seçimində sizə peşəkar dəstək göstəririk, ehtiyaclarınıza uyğun ən yaxşı variantları təklif edirik.",
      img: mainImage4.src,
    },
    // {
    //   title: "Geniş Məhsul Çeşidi",
    //   description:
    //     "Tikinti və qaz avadanlıqları sahəsində geniş məhsul çeşidimiz ilə xidmətinizdəyik.",
    //   img: mainImage5.src,
    // },
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="mySwiper"
    >
      {mainSlides &&
        mainSlides.map(({ title, description, img }, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.swiper}
              style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${img})`,
                textAlign: index % 2 ? "left" : "right",
              }}
            >
              <div className={styles["main-content"]}>
                {/* <div>
                  <p className={styles.title}> {title}</p>
                </div> */}
                <div>
                  <h1 className={styles.description}>{description}</h1>
                </div>
                <div className={styles["main-btns"]}>
                  <Link
                    href="/products/tikinti_materiallari"
                    className={styles["boxed-btn"]}
                  >
                    Daha çox
                  </Link>
                  <Link href="/contact" className={styles["bordered-btn"]}>
                    Bizimlə əlaqə saxlayın
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderOwlComponent;
