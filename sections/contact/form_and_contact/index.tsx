import React from "react";
import styles from "./index.module.css";
import ContactForm from "@/components/contact/form";
import ContactInformasia from "@/components/contact/contact_info";
type Props = {};

const FormSection = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles["form-grid"]}>
        <div className={styles["form-wrapper"]}>
          <div className={styles.content}>
            <h2>Sualiniz var?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
              alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
              esse natus!
            </p>
          </div>
          <ContactForm />
        </div>
        <div className={styles["contact-info"]}>
          <ContactInformasia />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
