"use client";
import React from "react";
import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

type Props = {};

const MapComponent: React.FC = (props: Props) => {
  // useEffect(() => {
  //   const map = L.map("map").setView([40.7128, -74.006], 12);

  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map);

  //   L.marker([40.7128, -74.006])
  //     .addTo(map)
  //     .bindPopup("New York City")
  //     .openPopup();
  // }, []);
  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};

export default MapComponent;
