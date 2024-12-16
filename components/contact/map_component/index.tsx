// "use client";
import React from "react";
// import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps?q=40.400973,49.909825&hl=az&z=15&output=embed"
      width="100%"
      height="100%"
    ></iframe>
  );
  // <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};

export default MapComponent;
