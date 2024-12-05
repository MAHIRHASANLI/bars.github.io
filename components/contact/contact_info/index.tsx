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
        <p>34/8, East Hukupara </p>
        <p>Gifirtok, Sadan.</p>
        <p>Country Name</p>
      </div>
      <div className={styles.info}>
        <h4>
          <TbClockHour3 />
          Mağaza Saatları
        </h4>
        <p>MON - FRIDAY: 8 to 9 PM</p>
        <p>SAT - SUN: 10 to 8 PM</p>
      </div>
      <div className={styles.info}>
        <h4>
          <FaPhone />
          Əlaqə
        </h4>
        <p>Phone: +00 111 222 3333</p>
        <p>Email: support@fruitkha.com</p>
      </div>
    </div>
  );
};

export default ContactInformasia;
