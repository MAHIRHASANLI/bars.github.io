import React from "react";
import styles from "./index.module.css";
import { MdLocationOn } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
const ContactInformasia = () => {
  return (
    <div className={styles["info-wrapper"]}>
      <div className={styles.info}>
        <h4>
          <MdLocationOn /> Mağaza ünvanı
        </h4>
        <p>EuroHome Dernegul</p>
        <p>12 Ələsgər Qayıbov, Bakı 1029</p>
        <p>Bakı, Azərbaycan</p>
      </div>
      <div className={styles.info}>
        <h4>
          <TbClockHour3 />
          Mağaza Saatları
        </h4>
        <p>Bazar ertəsi - Şənbə: 09:00–18:00</p>
        <p>Bazar: Bağlıdır</p>
      </div>
      <div className={styles.info}>
        <h4>
          <FaPhone />
          Əlaqə
        </h4>
        <p>
          Mobil: <Link href="tel:+994 99 795 10 50">+994 99 795 10 50</Link>
        </p>
        <p>
          Email: <Link href="mailto:info@bars.com.az">info@bars.com.az</Link>
        </p>
      </div>
    </div>
  );
};

export default ContactInformasia;
