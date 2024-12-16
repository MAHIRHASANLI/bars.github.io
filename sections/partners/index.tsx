"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "@/images/partner1.jpg";
import img2 from "@/images/partner2.jpg";
import img3 from "@/images/partner3.jpg";
import img4 from "@/images/partner4.png";
import img5 from "@/images/partner5.jpg";
import img6 from "@/images/partner6.jpg";
import img7 from "@/images/partner7.jpg";
import img8 from "@/images/partner8.jpg";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";

import styles from "./index.module.css";
import Link from "next/link";
export const arrayImg = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
];
const Partners = () => {
  return (
    <section className={styles.section}>
      <div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {arrayImg &&
            arrayImg.map((img, i) => (
              <SwiperSlide key={i}>
                <Link href="">
                  <div className={styles.slider}>
                    <Image
                      src={img}
                      alt="bars"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>Terefdasin Adi</h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
