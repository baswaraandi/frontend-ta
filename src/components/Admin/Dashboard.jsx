import ChartTotal from "./ChartTotal";
import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";

function Dashboard() {
  const [dataKendaraan, setDataKendaraan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendApi.get("/total-kendaraan");
        setDataKendaraan(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-3 m-8 max-w-3xl">
      <div className="col-span-3 row-span-3">
        <div className="">
          {loading === true ? (
            <div>Loading....</div>
          ) : (
            <ChartTotal arrayTotalKendaran={dataKendaraan} />
          )}
        </div>
      </div>
      <div className="row-start-4">
        <a href="/user-management" className="btn btn-wide">
          Go to User Management
        </a>
      </div>
      <div className="row-start-4">
        <a href="/analisis-management" className="btn btn-wide">
          Go to Analisis Management
        </a>
      </div>
      <div className="row-start-4">
        <a href="/kendaraan-management" className="btn btn-wide">
          Go to Kendaraan Management
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
