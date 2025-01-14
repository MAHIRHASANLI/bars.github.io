"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.css";
import Link from "next/link";
import mainImage1 from "@/images/main_section_img1.jpeg";
import mainImage2 from "@/images/main_section_img2.jpeg";

const SliderOwlComponent = ({ title = "", description = "", img = "" }) => {
  const obj1 = {
    title: "Bars İnşaat sizə ən yüksək keyfiyyətli məhsulları təqdim edir",
    description: "Bars İnşaat – Tikinti Materialları və Qaz Avadanlıqları",
    img: mainImage1.src,
  };
  const obj2 = {
    title: "Lorem Twoo",
    description:
      "Bars İnşaat sizə ən yüksək keyfiyyətli məhsulları təqdim edir",
    img: mainImage2.src,
  };
  const arr = [obj1, obj2];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="mySwiper"
    >
      {arr &&
        arr.map(({ title, description, img }, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.swiper}
              style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(${img})`,
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
