import vehicleIcons from "./IconVehicle"; // Import icon kendaraan

const VehicleDetails = ({ vehicle }) => {
  if (!vehicle) {
    return null;
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            src={vehicleIcons[vehicle.Tipe].options.iconUrl}
            alt={vehicle.Tipe}
            className="w-full h-48 object-cover mb-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {vehicle.Tipe}
            <div className="badge badge-secondary">{vehicle.Merk}</div>
          </h2>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{vehicle.Type}</div>
            <div className="badge badge-outline">{vehicle.Modell}</div>
            <div className="badge badge-outline">{vehicle.Model}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
