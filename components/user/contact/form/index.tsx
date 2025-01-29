"use client";
import React from "react";
import styles from "./index.module.css";
import { FormikHelpers, useFormik } from "formik";
import validationContactForm from "./validation";
import { MessageTypes } from "@/types";
import SweetAlert from "@/utils/sweet_Alert";
import { postMessage } from "@/api_requests/message_request";

const ContactForm = () => {
  const formik = useFormik<MessageTypes>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
    validationSchema: validationContactForm,
    onSubmit: async (
      values: MessageTypes,
      actions: FormikHelpers<MessageTypes>
    ) => {
      try {
        const response = await postMessage(values);
        console.log(response);
        SweetAlert("success", "Mesajınız göndərildi");
        actions.resetForm();
      } catch (error) {
        console.log("Mesaj göndərilmıdi: ", error);
        SweetAlert("error", "Mesajınız göndərilmədi");
      }
    },
  });
  return (
    <div className={styles.form}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Ad, Soy ad"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <span>{formik.errors.fullName}</span>
          </div>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span>{formik.errors.email}</span>
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              placeholder="Nömrə"
              type="number"
              inputMode="numeric"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <span>{formik.errors.phone}</span>
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Mövzu"
              name="topic"
              onChange={formik.handleChange}
              value={formik.values.topic}
            />
            <span>{formik.errors.topic}</span>
          </div>
        </div>
        <div className={styles.textarea}>
          <textarea
            cols={30}
            rows={10}
            placeholder="Mesaj"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
          <span>{formik.errors.message}</span>
        </div>
        <button type="submit" className={styles.button}>
          Göndər
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
