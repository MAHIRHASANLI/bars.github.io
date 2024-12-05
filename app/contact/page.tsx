import ContactContainer from "@/container/contact";
import DefaultLayout from "@/default_layout";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <DefaultLayout>
      <ContactContainer />
    </DefaultLayout>
  );
};

export default ContactPage;
