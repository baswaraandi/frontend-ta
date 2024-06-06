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

function ChartTotal({ arrayTotalKendaran }) {
  const values = Object.values(arrayTotalKendaran);
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
        data: values,
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
  console.log(arrayTotalKendaran, "chart");

  return <Line data={data} options={options} />;
}

export default ChartTotal;
