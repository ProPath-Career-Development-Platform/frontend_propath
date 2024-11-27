import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function SimpleMap({longitude , latitude}) {
  console.log("Longitude type:", typeof longitude, "Value:", longitude);
  console.log("Latitude type:", typeof latitude, "Value:", latitude);  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A simple marker with a popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
