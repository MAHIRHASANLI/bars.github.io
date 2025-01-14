import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import img1 from "@/images/prepocitavace1.png";
import img2 from "@/images/main_section_img1.jpeg";
import img3 from "@/images/WhatsApp Image 2024-11-25 at 8.46.43 AM.jpeg";
import img4 from "@/images/WhatsApp Image 2024-11-25 at 8.46.44 AM (1).jpeg";
import img5 from "@/images/WhatsApp Image 2024-11-25 at 8.46.44 AM (3).jpeg";
import img6 from "@/images/10.png";
import "swiper/css";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";

const BannerSlider = () => {
  const array = [img1, img2, img3, img4, img5, img6];
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
