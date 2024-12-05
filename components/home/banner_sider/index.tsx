import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import img1 from "@/images/WhatsApp Image 2024-11-25 at 8.46.44 AM (3).jpeg";

import "swiper/css";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="mySwiper"
    >
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <SwiperSlide key={i}>
            <div className={styles.image}>
              <Image
                src={img1.src}
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
