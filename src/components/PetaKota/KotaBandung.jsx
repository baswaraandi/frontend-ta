import { useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function KotaBandungMapComponent() {
  const [showBoundary, setShowBoundary] = useState(true);
  const mapRef = useRef();

  const toggleBoundary = () => {
    setShowBoundary(!showBoundary);
  };

  const resetMap = () => {
    const map = mapRef.current;
    if (map) {
      map.flyTo([-6.905977, 107.613144], 12);
    }
  };

  const dataKendaraan = {
    Andir: 332,
    Antapani: 353,
    Arcamanik: 346,
    AstanaAnyar: 396,
    BabakanCiparay: 403,
    BandungKidul: 582,
    BandungWetan: 421,
    Batununggal: 220,
    Ujungberung: 281,
    SumurBandung: 230,
    BojongloaKaler: 438,
    BojongloaKidul: 516,
    Buahbatu: 263,
    CibeunyingKaler: 311,
    CibeunyingKidul: 174,
    Cibiru: 329,
    Cicendo: 169,
    Cidadap: 186,
    Cinambo: 363,
    Coblong: 206,
    Gedebage: 255,
    Kiaracondong: 884,
    Lengkong: 163,
    Mandalajati: 260,
    Panyileukan: 342,
    Rancasari: 392,
    Regol: 351,
    Sukajadi: 443,
    Sukasari: 580,
  };

  const getColor = (value) => {
    const batasBawah = 270.51;
    const batasAtas = 423.09;
    if (value < batasBawah) return "red";
    if (value > batasAtas) return "green";
    return "yellow";
  };

  const getStyle = (feature) => {
    const kecamatan = feature.properties.nama_kecamatan.replace(/\s+/g, "");
    const value = dataKendaraan[kecamatan] || 0;
    return {
      fillColor: getColor(value),
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

  const kecamatanNames = Object.keys(dataKendaraan);
  const kendaraanValues = Object.values(dataKendaraan);

  const chartData = {
    labels: kecamatanNames,
    datasets: [
      {
        label: "Jumlah Kendaraan",
        data: kendaraanValues,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
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
        ref={mapRef}
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
      <div className="flex">
        <div className="mt-4 mr-4">
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
        <button
          onClick={resetMap}
          className="mt-4 bg-blue-500 text-white px-4 rounded"
        >
          Reset Peta
        </button>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded flex">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Legenda</h2>
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-red-500 mr-2"></div>
            <span>Bawah Batas Bawah ({"<"} 270.51)</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-yellow-500 mr-2"></div>
            <span>Di Antara Batas Bawah dan Batas Atas (270.51 - 423.09)</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 mr-2"></div>
            <span>Di Atas Batas Atas ({">"} 423.09)</span>
          </div>
        </div>
        <div className="w-1/2">
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
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
