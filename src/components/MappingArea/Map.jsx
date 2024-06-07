import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";
import chroma from "chroma-js";
import VehiclePopup from "./VehiclePopUp";
import vehicleIcons from "./IconVehicle";
// L.noConflict();

ChartJS.register(BarElement, CategoryScale, LinearScale);

const vehicles = [
  "Agya",
  "Avanza",
  "Ayla",
  "Brio",
  "Mobilio",
  "Calya",
  "Ertiga",
  "Fortuner",
  "Grandmax",
  "Innova",
  // "Isuzu Traga",
  "Raize",
  "Rocky",
  "Sigra",
  "Stargazer",
  // "Suzuki carry pcu",
  "Terios",
  "Veloz",
  "Xenia",
  "Xpander",
  "Yaris Cross",
  "Zenix",
];

// Add dummy vehicle count to the GeoJSON data
const batasWilayahWithCounts = {
  ...batasWilayah,
  features: batasWilayah.features.map((feature) => ({
    ...feature,
    properties: {
      ...feature.properties,
      jumlah_kendaraan: Math.floor(Math.random() * 1000), // Dummy data between 0 and 999
    },
  })),
};

function MapComponent() {
  const [showBoundary, setShowBoundary] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState("All");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [dataVehicle, setDataVehicle] = useState([]);

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

  const toggleBoundary = () => {
    setShowBoundary(!showBoundary);
  };

  const handleVehicleChange = async (event) => {
    const token = Cookies.get("token");
    setSelectedVehicle(event.target.value);
    console.log("value dropdown :", event.target.value);
    try {
      const response = await backendApi.get(
        `/kendaraan-tipe/${event.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setDataVehicle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter data based on selected vehicle
  const filteredData =
    selectedVehicle === "All"
      ? batasWilayahWithCounts
      : {
          ...batasWilayahWithCounts,
          features: batasWilayahWithCounts.features.filter(
            (feature) => feature.properties.tipe_kendaraan === selectedVehicle
          ),
        };

  // Update chart data when selectedVehicle changes
  useEffect(() => {
    const newChartData = {
      labels: uniqueKecamatanNames.slice(0, 30), // Limit to maximum 30 entries
      datasets: [
        {
          label: "Jumlah Kendaraan",
          data: uniqueKecamatanNames.slice(0, 30).map((kecamatan) => {
            const feature = batasWilayahWithCounts.features.find(
              (feature) => feature.properties.nama_kecamatan === kecamatan
            );
            return feature ? feature.properties.jumlah_kendaraan : 0;
          }),
          backgroundColor: uniqueKecamatanNames
            .slice(0, 30)
            .map((kecamatan) => {
              const vehicleCount =
                batasWilayahWithCounts.features.find(
                  (feature) => feature.properties.nama_kecamatan === kecamatan
                )?.properties.jumlah_kendaraan || 0;
              if (vehicleCount > 600) {
                return "green";
              } else if (vehicleCount >= 300) {
                return "yellow";
              } else {
                return "red";
              }
            }),
          borderWidth: 1,
        },
      ],
    };

    setChartData(newChartData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVehicle]);

  return (
    <div className="p-10 flex">
      <div className="flex-grow">
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
              data={filteredData}
              style={getStyle}
              onEachFeature={onEachFeature}
            />
          )}
          {Array.isArray(dataVehicle) && dataVehicle.length > 0 ? (
            dataVehicle.map((tipeKendaraan) => {
              if (
                tipeKendaraan &&
                tipeKendaraan.id &&
                tipeKendaraan.Latitude &&
                tipeKendaraan.Longitude
              ) {
                // var vehicleType = tipeKendaraan.Tipe;
                // var icon = vehicleMarkerIcons[vehicleType] || L.icon.Default;
                return (
                  <Marker
                    key={tipeKendaraan.id}
                    position={[tipeKendaraan.Latitude, tipeKendaraan.Longitude]}
                    icon={vehicleIcons[tipeKendaraan.Tipe]}
                    eventHandlers={{
                      click: () => {
                        setSelectedVehicle(tipeKendaraan.id);
                      },
                    }}
                  >
                    <Popup className="min-w-96">
                      <VehiclePopup vehicleId={tipeKendaraan.id} />
                    </Popup>
                  </Marker>
                );
              }
              return null;
            })
          ) : (
            <div>No Data Available</div>
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
      <div className="flex flex-col items-center ml-6">
        <div className="mt-12 p-4 bg-blue-950 rounded-lg shadow-md">
          <h2 className="text-2xl text-white font-bold mb-2">
            Filter Kendaraan
          </h2>
          <select
            value={selectedVehicle}
            onChange={handleVehicleChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-950 focus:border-blue-950 transition duration-300 ease-in-out"
          >
            <option value="All">Pilih Kendaraan</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-2xl text-blue-950 font-bold mb-4">
            Statistik Kendaraan
          </h2>
          <div className="h-64 w-full">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                  duration: 1000,
                },
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
