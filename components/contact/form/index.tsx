import React from "react";
import styles from "./index.module.css";
import Button from "@/components/button";

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form>
        <div className={styles.inputs}>
          <input type="text" placeholder="Ad, Soy ad" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Nömrə" />
          <input type="text" placeholder="Mövzu" />
        </div>
        <div className={styles.inputs}>
          {" "}
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Mesaj"
          ></textarea>
        </div>
        <Button>Göndər</Button>
      </form>
    </div>
  );
};

export default ContactForm;
