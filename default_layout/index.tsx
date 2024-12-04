import Header from "@/container/header";
import React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import Footer from "@/sections/footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container"> {children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
