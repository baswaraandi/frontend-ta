import { useEffect, useState } from "react";
import backendApi from "../../../utils/api-config";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

function AnalisisManagement() {
  const [dataAnalisis, setDataAnalisis] = useState([]);

  useEffect(() => {
    getAnalisis();
  }, []);

  const getAnalisis = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      // console.log("Using token:", token);
      const response = await backendApi.get("/analisis", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setDataAnalisis(response.data);
      // console.log(response.data);
      // console.log("Data:", dataAnalisis);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div>
        <h2 className="text-xl font-bold mb-4">Data Analisis</h2>
        <p className="mb-4">
          Jumlah data kendaraan berdasarkan kecamatan di Kota Bandung pada bulan
          Januari sampai September 2023
        </p>
      </div>
      <div className="max-h-[600px] overflow-y-auto overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                Kecamatan
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                Lat
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                Long
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                Y
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X1
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X2
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X3
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X4
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X5
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X6
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X7
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X8
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X9
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X10
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X11
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X12
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X13
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X14
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X15
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X16
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X17
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X18
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X19
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X20
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X21
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X22
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X23
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X24
              </th>
              <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                X25
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {!!dataAnalisis &&
              dataAnalisis.map((analisis) => (
                <tr key={analisis.id}>
                  <td className="p-4 text-sm text-slate-800">
                    {analisis.Kecamatan}
                  </td>
                  <td className="p-4 text-sm text-slate-800">{analisis.Lat}</td>
                  <td className="p-4 text-sm text-slate-800">
                    {analisis.Long}
                  </td>
                  <td className="p-4 text-sm text-slate-800">{analisis.Y}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X1}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X2}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X3}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X4}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X5}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X6}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X7}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X8}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X9}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X10}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X11}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X12}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X13}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X14}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X15}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X16}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X17}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X18}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X19}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X20}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X21}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X22}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X23}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X24}</td>
                  <td className="p-4 text-sm text-slate-800">{analisis.X25}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalisisManagement;
