import { useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import batasWilayah from "../../data/batas-administrasi.json";
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
import VehicleDetails from "./VehicleDetails";
import ResetMap from "./ResetMap";
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
  const [dataVehicle, setDataVehicle] = useState([]);
  const [selectedVehicleDetails, setSelectedVehicleDetails] = useState(null);
  const mapReset = useRef();

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

  const handleVehicleChange = async (value) => {
    const token = Cookies.get("token");
    setSelectedVehicle(value);
    console.log("value dropdown :", value);
    try {
      const response = await backendApi.get(`/kendaraan-tipe/${value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setDataVehicle(response.data);
      setSelectedVehicleDetails(response.data[0] || null);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData =
    selectedVehicle === "All"
      ? batasWilayahWithCounts
      : {
          ...batasWilayahWithCounts,
          features: batasWilayahWithCounts.features.filter(
            (feature) => feature.properties.tipe_kendaraan === selectedVehicle
          ),
        };

  return (
    <div className="p-10 flex">
      <div className="flex-grow">
        <h1 className="text-4xl font-extrabold text-blue-950 mb-6 border-b-4 border-blue-950 pb-2">
          Kota Bandung Map
        </h1>
        <div>
          <MapContainer
            center={[-6.905977, 107.613144]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "700px", width: "100%" }}
            ref={mapReset}
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
                      position={[
                        tipeKendaraan.Latitude,
                        tipeKendaraan.Longitude,
                      ]}
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
        </div>
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
          <ResetMap mapRef={mapReset} />
        </div>
      </div>
      <div className="flex flex-col items-center ml-6">
        <div className="mt-10">
          <details className="dropdown dropdown-end">
            <summary className="m-1 btn w-56">Filter Kendaraan</summary>
            <ul className="p-2 shadow poin dropdown-content z-[1] bg-base-100 rounded-box w-56 max-h-96 overflow-y-scroll">
              <li
                onClick={() => handleVehicleChange(null)}
                className="px-2 cursor-pointer hover:bg-slate-400 hover:text-white"
              >
                <a>Reset Filter</a>
              </li>
              {vehicles.map((vehicle) => (
                <li
                  key={vehicle}
                  value={vehicle}
                  onClick={() => handleVehicleChange(vehicle)}
                  className="hover:bg-slate-400 hover:text-white cursor-pointer px-2"
                >
                  <a>{vehicle}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Card untuk menampilkan detail kendaraan */}
        <VehicleDetails vehicle={selectedVehicleDetails} />
      </div>
    </div>
  );
}

export default MapComponent;
