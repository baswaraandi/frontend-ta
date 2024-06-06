import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";
import chroma from "chroma-js";

function KotaBandungMapComponent() {
  const [showBoundary, setShowBoundary] = useState(true);

  const toggleBoundary = () => {
    setShowBoundary(!showBoundary);
  };

  const uniqueKecamatanNames = [
    ...new Set(
      batasWilayah.features.map((feature) => feature.properties.nama_kecamatan)
    ),
  ];

  const colors = chroma
    .scale("Set3")
    .mode("lch")
    .colors(uniqueKecamatanNames.length);

  const kecamatanColorMap = uniqueKecamatanNames.reduce(
    (acc, kecamatan, index) => {
      acc[kecamatan] = colors[index];
      return acc;
    },
    {}
  );

  const getStyle = (feature) => {
    const kecamatan = feature.properties.nama_kecamatan;
    return {
      fillColor: kecamatanColorMap[kecamatan],
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature, layer) => {
    const kecamatanName = feature.properties.nama_kecamatan;
    const popupContent = `<b>Kecamatan:</b> ${kecamatanName}`;
    layer.bindPopup(popupContent);
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold text-blue-950 mb-6 border-b-4 border-blue-950 pb-2">
        Kota Bandung Map
      </h1>
      <MapContainer
        center={[-6.905977, 107.613144]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "700px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showBoundary && (
          <GeoJSON
            data={batasWilayah}
            style={getStyle}
            onEachFeature={onEachFeature}
          />
        )}
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
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-2xl font-semibold mb-2">Informasi Peta</h2>
        <p className="mb-2">
          Peta ini menampilkan wilayah administratif Kota Bandung. Setiap
          kecamatan diberi warna yang berbeda untuk memudahkan identifikasi.
        </p>
        <p className="mb-2">
          Anda dapat menggunakan kotak centang di atas untuk menampilkan atau
          menyembunyikan batas wilayah.
        </p>
        <p>Klik pada wilayah untuk melihat nama kecamatan.</p>
      </div>
    </div>
  );
}

export default KotaBandungMapComponent;
