// "use client";
import React from "react";
// import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.332083103432!2d49.876502099999996!3d40.42364500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403089fa6317031b%3A0xdbb85db8f5a55ec8!2zQmFycyDEsG7Fn2FhdCBNTUM!5e0!3m2!1saz!2saz!4v1735894422229!5m2!1saz!2saz"
      loading="lazy"
      width="100%"
      height="100%"
    ></iframe>
  );
  // <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};

export default MapComponent;
