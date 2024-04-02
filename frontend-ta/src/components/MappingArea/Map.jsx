import React from "react";
import { MapContainer, TileLayer, Popup, Marker, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";

function MapComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <MapContainer
        center={[-6.905977, 107.613144]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.905977, 107.613144]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {batasWilayah && <GeoJSON data={batasWilayah} />}
      </MapContainer>
    </div>
  );
}

export default MapComponent;