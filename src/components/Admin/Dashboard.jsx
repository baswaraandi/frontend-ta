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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div>
            {loading ? (
              <div>Loading....</div>
            ) : (
              <ChartTotal arrayTotalKendaran={dataKendaraan} />
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:col-span-3">
          <a href="/user-management" className="btn btn-wide flex-1">
            Go to User Management
          </a>
          <a href="/analisis-management" className="btn btn-wide flex-1">
            Go to Analisis Management
          </a>
          <a href="/kendaraan-management" className="btn btn-wide flex-1">
            Go to Kendaraan Management
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
