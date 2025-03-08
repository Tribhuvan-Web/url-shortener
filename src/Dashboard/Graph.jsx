import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item, i) => `${item.clickDate}`);
  const userPerDaya = graphData?.map((item) => item.count);

  const data = {
    labels:
      graphData.length > 0
        ? labels
        : ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Clicks",
        data:
          graphData.length > 0
            ? userPerDaya
            : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
        backgroundColor:
          graphData.length > 0 ? "#76ABAE" : "rgba(118, 171, 174, 0.1)",
        borderColor: "#2c4850",
        pointBorderColor: "#2c4850",
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 1.5,
        barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#d3d1d1 ",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgb(100 120 139 )",
          font: {
            size: 12,
            weight: "bold",
          },
          callback: function (value) {
            if (Number.isInteger(value)) {
              return value.toString();
            }
            return "";
          },
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          color: "rgb(100 116 139 ",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)", 
        },
        ticks: {
          color: "rgb(100 116 139 ", 
          font: {
            size: 12,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Date",
          color: "rgb(100 116 139 ", 
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <Bar
      className="w-full bg-[#21363c] rounded-lg shadow-xl shadow-[#2c4850]"
      data={data}
      options={options}
    ></Bar>
  );
};

export default Graph;
