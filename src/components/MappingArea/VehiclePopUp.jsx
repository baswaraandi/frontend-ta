import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";

const fetchVehicleDetails = async (vehicleId) => {
  const token = Cookies.get("token");
  try {
    const response = await backendApi.get(`/kendaraan/${vehicleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const VehiclePopup = ({ vehicleId }) => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchVehicleDetails(vehicleId);
      if (data) {
        setVehicle(data);
      } else {
        setError("Failed to fetch vehicle details");
      }
      setLoading(false);
    };

    fetchDetails();
  }, [vehicleId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {vehicle ? (
        <div className="">
          <p>
            <strong>Bulan:</strong> {vehicle.BLN_THN}
          </p>
          <p>
            <strong>Nopol:</strong> {vehicle.Nopol}
          </p>
          <p className="hidden">
            <strong>Nama:</strong> {vehicle.Nama}
          </p>
          <p>
            <strong>Alamat:</strong> {vehicle.Alamat}
          </p>
          <p>
            <strong>Kota/Kab:</strong> {vehicle.Kab_Kota}
          </p>
          <p>
            <strong>Kecamatan:</strong> {vehicle.Kecamatan}
          </p>
          <p>
            <strong>Merk:</strong> {vehicle.Merk}
          </p>
          <p>
            <strong>Type:</strong> {vehicle.Type}
          </p>
          <p>
            <strong>Tipe:</strong> {vehicle.Tipe}
          </p>
          <p>
            <strong>Modell:</strong> {vehicle.Modell}
          </p>
          <p>
            <strong>Jenis:</strong> {vehicle.Jenis}
          </p>
          <p>
            <strong>Model:</strong> {vehicle.Model}
          </p>
          <p>
            <strong>Tahun:</strong> {vehicle.Tahun}
          </p>
          <p>
            <strong>CC:</strong> {vehicle.CC}
          </p>
          <p>
            <strong>Nomor Rangka:</strong> {vehicle.NO_KA}
          </p>
          <p>
            <strong>Nomor Mesin:</strong> {vehicle.No_Mesin}
          </p>
          <p>
            <strong>Warna:</strong> {vehicle.Warna}
          </p>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default VehiclePopup;
