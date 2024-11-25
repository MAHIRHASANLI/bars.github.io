import React from "react";
import styles from "./index.module.css";
import { FaShoppingCart, FaPhoneVolume, FaUndo } from "react-icons/fa";
type Props = {};

const ListComponent = (props: Props) => {
  const obj1 = {
    title: "Xüsusi xidmət",
    description: "Rahat alış-veriş!",
    icon: <FaShoppingCart />,
  };
  const obj2 = {
    title: "24/7 Dəstək",
    description: "Bütün gün dəstək alın.",
    icon: <FaPhoneVolume />,
  };
  const obj3 = {
    title: "Geri qaytarma",
    description: "3 gün ərzində geri qaytarın!",
    icon: <FaUndo />,
  };
  const arr = [obj1, obj2, obj3];
  return (
    arr &&
    arr.map(({ title, description, icon }, index) => (
      <div className={styles.list} key={index}>
        <div className={styles["list-icon"]}>{icon}</div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    ))
  );
};

export default ListComponent;
