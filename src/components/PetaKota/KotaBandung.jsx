import { useState, useEffect, useRef, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
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
import backendApi from "../../utils/api-config";

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
  const [dataKendaraan, setDataKendaraan] = useState({});
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [selectedMap, setSelectedMap] = useState("Total");
  const [kendaraanTypes, setKendaraanTypes] = useState([]);
  const [statistics, setStatistics] = useState({
    std_dev: 0,
    avg: 0,
    batas_atas: 0,
    batas_bawah: 0,
  });
  const [loadingKendaraan, setLoadingKendaraan] = useState(true);
  const mapRef = useRef();

  const fetchData = async () => {
    try {
      const response = await backendApi.get(`/analisis-total/${selectedMap}`);
      const { kendaraan, std_dev, avg, batas_atas, batas_bawah } =
        response.data;

      const formattedData = kendaraan.reduce((acc, item) => {
        const kecamatan = item.kecamatan.nama.replace(/\s+/g, "");
        acc[kecamatan] = item.kecamatan.jumlah_kendaraan;
        return acc;
      }, {});
      setDataKendaraan(formattedData);

      batasWilayah.features.forEach((feature) => {
        const kecamatan = feature.properties.nama_kecamatan.replace(/\s+/g, "");
        feature.properties.dataKendaraan = formattedData[kecamatan] || 0;
      });

      const kecamatanNames = Object.keys(formattedData);
      const kendaraanValues = Object.values(formattedData);

      setChartData({
        labels: kecamatanNames,
        datasets: [
          {
            label: "Jumlah Kendaraan",
            data: kendaraanValues,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });

      setStatistics({ std_dev, avg, batas_atas, batas_bawah });

      if (kendaraanTypes.length === 0) {
        const jenisKendaraan = kendaraan[0].jenis_kendaraan.map(
          (type) => type.name
        );
        setKendaraanTypes(["Total", ...jenisKendaraan]);
      }
      setLoadingKendaraan(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedMap]);

  const toggleBoundary = () => {
    setShowBoundary(!showBoundary);
  };

  const resetMap = () => {
    const map = mapRef.current;
    if (map) {
      map.flyTo([-6.905977, 107.613144], 12);
    }
  };

  const getColor = (value) => {
    const { batas_bawah, batas_atas } = statistics;
    if (value < batas_bawah) return "red";
    if (value > batas_atas) return "green";
    return "yellow";
  };

  const getStyle = useCallback(
    (feature) => {
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
    },
    [dataKendaraan, statistics]
  );

  const onEachFeature = (feature, layer) => {
    const kecamatanName = feature.properties.nama_kecamatan;
    const jumlahKendaraan = feature.properties.dataKendaraan;
    const popupContent = `<b>Kecamatan:</b> ${kecamatanName} <br><br/> <b>Jumlah:</b> ${jumlahKendaraan}`;
    layer.bindPopup(popupContent);
  };

  if (loadingKendaraan == false) {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-extrabold text-blue-950 mb-6 border-b-4 border-blue-950 pb-2">
          Kota Bandung Map
        </h1>
        <div className="mt-4 mb-4">
          <label htmlFor="jenisKendaraan" className="mr-2">
            Pilih Jenis Kendaraan:{" "}
          </label>
          <select
            id="jenisKendaraan"
            onChange={(e) => setSelectedMap(e.target.value)}
            className="p-2 border rounded"
            value={selectedMap}
          >
            {kendaraanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <MapContainer
          center={[-6.905977, 107.613144]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "700px", width: "100%" }}
          ref={mapRef}
          key={selectedMap} // Tambahkan key agar GeoJSON dirender ulang saat selectedMap berubah
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
              <span>
                Bawah Batas Bawah ({"<"} {statistics.batas_bawah})
              </span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-yellow-500 mr-2"></div>
              <span>
                Rata-rata ({statistics.batas_bawah} -{" "}
                {statistics.batas_atas})
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 mr-2"></div>
              <span>
                Di Atas Batas Atas ({">"} {statistics.batas_atas})
              </span>
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
  } else {
    <p>Loading...</p>;
  }
}

export default KotaBandungMapComponent;
