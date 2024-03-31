import React from "react";
import { MapContainer, TileLayer, Popup, Marker, GeoJSON } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import batasWilayah from "./data/batas-administrasi.json"

function App() {
  return (
    <>
      <MapContainer center={[	-6.905977, 107.613144]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.905977, 107.613144]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON data={batasWilayah}/>
      </MapContainer>
    </>
  );
}

export default App;
