import React from "react";
import styles from "./index.module.css";
import { MdLocationOn } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
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
        <p>Mobil: +994 50 746 0000</p>
        <p>Email: barsinshaatferdi@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactInformasia;
