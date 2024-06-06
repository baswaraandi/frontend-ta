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
    <div>
      <div className="bg-white p-4 rounded shadow-md mx-4 max-w-6xl">
        <h2 className="text-xl font-bold mb-4">DASHBOARD ADMIN</h2>
        <div className="">
          {loading === true ? (
            <div>Loading....</div>
          ) : (
            <ChartTotal arrayTotalKendaran={dataKendaraan} />
          )}
        </div>
      </div>
      <div className="p-4 flex justify-between max-w-3xl">
        <div className="mt-4">
          <a
            href="/user-management"
            className="bg-blue-950 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Go to User Management
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/analisis-management"
            className="bg-blue-950 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Go to Analisis Management
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/kendaraan-management"
            className="bg-blue-950 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Go to Kendaraan Management
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
