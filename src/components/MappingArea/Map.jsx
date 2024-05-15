import { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";

function MapComponent() {
  const [showBoundary, setShowBoundary] = useState(true);

  const toggleBoundary = () => {
    setShowBoundary(!showBoundary);
  };

  return (
    <div className="p-10">
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
        {showBoundary && <GeoJSON data={batasWilayah} />}
      </MapContainer>
      <div className="mt-4">
        <input
          type="checkbox"
          id="showBoundary"
          name="showBoundary"
          checked={showBoundary}
          onChange={toggleBoundary}
          className="mr-2"
        />
        <label htmlFor="showBoundary">Tampilkan Batas Wilayah</label>
      </div>
    </div>
  );
}

export default MapComponent;
