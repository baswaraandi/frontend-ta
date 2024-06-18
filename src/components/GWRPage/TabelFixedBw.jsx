import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";

function TabelFixedBw() {
  const [dataFixed, setDataFixed] = useState([]);

  useEffect(() => {
    getFixed();
  }, []);

  const getFixed = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      // console.log("Using token:", token);
      const response = await backendApi.get("/fixed-estimation", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setDataFixed(response.data);
      // console.log(response.data);
      // console.log("Data:", dataFixed);
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
          {!!dataFixed &&
            dataFixed.map((fixed) => (
              <tr key={fixed.id}>
                <td>{fixed.Kecamatan}</td>
                <td>{fixed.SumW}</td>
                <td>{fixed.XIntercept}</td>
                <td>{fixed.X1}</td>
                <td>{fixed.X2}</td>
                <td>{fixed.X3}</td>
                <td>{fixed.X4}</td>
                <td>{fixed.X5}</td>
                <td>{fixed.X6}</td>
                <td>{fixed.X7}</td>
                <td>{fixed.X8}</td>
                <td>{fixed.X9}</td>
                <td>{fixed.X10}</td>
                <td>{fixed.X11}</td>
                <td>{fixed.X12}</td>
                <td>{fixed.X13}</td>
                <td>{fixed.X14}</td>
                <td>{fixed.X15}</td>
                <td>{fixed.X16}</td>
                <td>{fixed.X17}</td>
                <td>{fixed.X18}</td>
                <td>{fixed.X19}</td>
                <td>{fixed.X20}</td>
                <td>{fixed.X21}</td>
                <td>{fixed.X22}</td>
                <td>{fixed.X23}</td>
                <td>{fixed.X24}</td>
                <td>{fixed.X25}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelFixedBw;
