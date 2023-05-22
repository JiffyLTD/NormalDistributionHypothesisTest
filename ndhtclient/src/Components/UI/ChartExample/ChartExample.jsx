import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

const ChartExample = () => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );
  const data = {
    labels: ["Менее 975", "975-1000", "1000-1025", "1025-1050", "более 1050"],
    datasets: [
      {
        type: "line",
        label: "График нормального распределения",
        backgroundColor: "indigo",
        borderColor: "indigo",
        borderWidth: 4,
        data: [7.76, 31.6, 49.7, 31.6, 7.76],
      },
      {
        type: "bar",
        label: "Гистограмма распределения генеральной совокупности",
        backgroundColor: "MediumVioletRed",
        data: [6, 38, 44, 34, 8],
      },
    ]
  };
  return <Chart data={data} />;
};

export default ChartExample;
