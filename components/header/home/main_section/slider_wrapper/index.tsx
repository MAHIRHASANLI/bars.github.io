"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.css";
import Link from "next/link";
import mainImage from "@/images/main_section_img.jpeg";

const SliderOwlComponent = ({ title = "", description = "", img = "" }) => {
  const obj1 = {
    title: "Lorem Ipsum",
    description: "Qaz saygaci",
    img: mainImage.src,
  };
  const obj2 = {
    title: "Lorem Twoo",
    description: "Qaz saygaci 2",
    img: mainImage.src,
  };
  const obj3 = {
    title: "Lorem one",
    description: "Qaz saygaci 3",
    img: mainImage.src,
  };
  const arr = [obj1, obj2, obj3];
  // let images;

  // const style = {
  //   backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})`,
  // };
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      loop={true}
      className="mySwiper"
    >
      {arr &&
        arr.map(({ title, description, img }, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.swiper}
              style={{
                backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})`,
              }}
            >
              <div className={styles["main-content"]}>
                <div>
                  <p className={styles.description}>{description}</p>
                </div>
                <div>
                  <h1 className={styles.title}>{title}</h1>
                </div>
                <div className={styles["main-btns"]}>
                  <Link href="#" className={styles["boxed-btn"]}>
                    Daha çox
                  </Link>
                  <Link href="#" className={styles["bordered-btn"]}>
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
