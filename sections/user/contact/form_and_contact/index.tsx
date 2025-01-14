import React from "react";
import styles from "./index.module.css";
import ContactForm from "@/components/user/contact/form";
import ContactInformasia from "@/components/user/contact/contact_info";
type Props = {};

const FormSection = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles["form-grid"]}>
        <div className={styles["form-wrapper"]}>
          <div className={styles.content}>
            <h2>Sualiniz var?</h2>
            <p>
              Sualınız var? Hər hansı sualınız varsa, bizə müraciət edin.
              Komandamız sizə kömək etmək üçün buradadır.
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
