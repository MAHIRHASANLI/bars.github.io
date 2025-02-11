import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import img1 from "@/images/product1 (1).jpeg";
import img2 from "@/images/product1 (2).jpeg";
import img6 from "@/images/product1 (3).jpeg";
import "swiper/css";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";

const BannerSlider = () => {
  const array = [img1, img2, img6];
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3500 }}
      loop={true}
      className="mySwiper"
    >
      {array.map((img, i) => (
        <SwiperSlide key={i}>
          <div className={styles.image}>
            <Image
              src={img.src}
              alt=""
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
