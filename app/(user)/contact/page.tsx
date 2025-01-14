import ContactContainer from "@/container/user/contact";
import DefaultLayout from "@/layouts/default_layout";
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
