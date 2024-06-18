import { useEffect, useState } from "react";
import backendApi from "../../../utils/api-config";
import Cookies from "js-cookie";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
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

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dataAnalisis);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DataAnalisis");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "DataAnalisis.xlsx");
  };

  return (
    <div className="bg-white p-4 rounded shadow-md m-4">
      <div>
        <h2 className="text-xl font-bold mb-4">Data Analisis</h2>
        <div className="flex justify-between">
          <p className="mb-4">
            Jumlah data kendaraan berdasarkan kecamatan di Kota Bandung pada
            bulan Januari sampai September 2023
          </p>
          <button onClick={exportToExcel} className="btn btn-wide mb-4">
            Unduh Data ke Excel
          </button>
        </div>
      </div>
      <div className="max-h-[750px] overflow-y-auto overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th>Kecamatan</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Y1</th>
              <th>X1</th>
              <th>X2</th>
              <th>X3</th>
              <th>X4</th>
              <th>X5</th>
              <th>X6</th>
              <th>X7</th>
              <th>X8</th>
              <th>X9</th>
              <th>X10</th>
              <th>X11</th>
              <th>X12</th>
              <th>X13</th>
              <th>X14</th>
              <th>X15</th>
              <th>X16</th>
              <th>X17</th>
              <th>X18</th>
              <th>X19</th>
              <th>X20</th>
              <th>X21</th>
              <th>X22</th>
              <th>X23</th>
              <th>X24</th>
              <th>X25</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {!!dataAnalisis &&
              dataAnalisis.map((analisis) => (
                <tr key={analisis.id}>
                  <td>{analisis.Kecamatan}</td>
                  <td>{analisis.Lat}</td>
                  <td>{analisis.Long}</td>
                  <td>{analisis.Y}</td>
                  <td>{analisis.X1}</td>
                  <td>{analisis.X2}</td>
                  <td>{analisis.X3}</td>
                  <td>{analisis.X4}</td>
                  <td>{analisis.X5}</td>
                  <td>{analisis.X6}</td>
                  <td>{analisis.X7}</td>
                  <td>{analisis.X8}</td>
                  <td>{analisis.X9}</td>
                  <td>{analisis.X10}</td>
                  <td>{analisis.X11}</td>
                  <td>{analisis.X12}</td>
                  <td>{analisis.X13}</td>
                  <td>{analisis.X14}</td>
                  <td>{analisis.X15}</td>
                  <td>{analisis.X16}</td>
                  <td>{analisis.X17}</td>
                  <td>{analisis.X18}</td>
                  <td>{analisis.X19}</td>
                  <td>{analisis.X20}</td>
                  <td>{analisis.X21}</td>
                  <td>{analisis.X22}</td>
                  <td>{analisis.X23}</td>
                  <td>{analisis.X24}</td>
                  <td>{analisis.X25}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalisisManagement;
