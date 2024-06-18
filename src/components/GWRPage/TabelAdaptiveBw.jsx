import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";

function TabelAdaptiveBw() {
  const [dataAdaptive, setDataAdaptive] = useState([]);

  useEffect(() => {
    getAdaptive();
  }, []);

  const getAdaptive = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      // console.log("Using token:", token);
      const response = await backendApi.get("/adaptive-estimation", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setDataAdaptive(response.data);
      // console.log(response.data);
      // console.log("Data:", dataAdaptive);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <table className="table table-zebra">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th>Kecamatan</th>
            <th>Sum_W</th>
            <th>X_Intercept</th>
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
          {!!dataAdaptive &&
            dataAdaptive.map((adaptive) => (
              <tr key={adaptive.id}>
                <td>{adaptive.Kecamatan}</td>
                <td>{adaptive.SumW}</td>
                <td>{adaptive.XIntercept}</td>
                <td>{adaptive.X1}</td>
                <td>{adaptive.X2}</td>
                <td>{adaptive.X3}</td>
                <td>{adaptive.X4}</td>
                <td>{adaptive.X5}</td>
                <td>{adaptive.X6}</td>
                <td>{adaptive.X7}</td>
                <td>{adaptive.X8}</td>
                <td>{adaptive.X9}</td>
                <td>{adaptive.X10}</td>
                <td>{adaptive.X11}</td>
                <td>{adaptive.X12}</td>
                <td>{adaptive.X13}</td>
                <td>{adaptive.X14}</td>
                <td>{adaptive.X15}</td>
                <td>{adaptive.X16}</td>
                <td>{adaptive.X17}</td>
                <td>{adaptive.X18}</td>
                <td>{adaptive.X19}</td>
                <td>{adaptive.X20}</td>
                <td>{adaptive.X21}</td>
                <td>{adaptive.X22}</td>
                <td>{adaptive.X23}</td>
                <td>{adaptive.X24}</td>
                <td>{adaptive.X25}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelAdaptiveBw;
