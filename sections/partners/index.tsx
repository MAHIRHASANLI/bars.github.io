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
import TitleSection from "@/components/section_title";
export const partners = [
  { image: img1.src, name: "" },
  { image: img2.src, name: "" },
  { image: img3.src, name: "" },
  { image: img4.src, name: "" },
  { image: img5.src, name: "" },
  { image: img6.src, name: "" },
  { image: img7.src, name: "" },
  { image: img8.src, name: "" },
];
const Partners = () => {
  return (
    <section className={styles.section}>
      <TitleSection
        firtTitle="Bizim"
        lastTitle="Tərəfdaşlarımız"
        description="Bizim Tərəfdaşlarımız Birlikdə güvənə əsaslanan əməkdaşlıq qurduğumuz etibarlı tərəfdaşlarımızla xidmət keyfiyyətini daim yüksəldirik."
      />
      <div className={styles.partners}>
        {partners &&
          partners.map((partner: { image: any; name: string }, i: number) => (
            <div className={styles["image-wrapper"]} key={i}>
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Partners;
