import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const data = {
    labels: [
      "January 2023",
      "February 2023",
      "March 2023",
      "April 2023",
      "May 2023",
      "June 2023",
      "July 2023",
      "August 2023",
      "September 2023",
    ],
    datasets: [
      {
        label: "Kendaraan",
        data: [12, 19, 3, 5, 2, 3, 10, 15, 8],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Roda Empat Overview (Jan - Sep 2023)",
      },
    },
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow-md mx-4 max-w-6xl">
        <h2 className="text-xl font-bold mb-4">DASHBOARD ADMIN</h2>
        <div className="">
          <Line data={data} options={options} />
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
