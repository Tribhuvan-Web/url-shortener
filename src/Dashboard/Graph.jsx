import React from "react";
import { Line } from "react-chartjs-2"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
  PointElement,
  LineElement
);

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item, i) => `${item.clickDate}`);
  const userPerDaya = graphData?.map((item) => item.count);

  const data = {
    labels:
      graphData?.length > 0
        ? labels
        : ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Clicks",
        data:
          graphData?.length > 0
            ? userPerDaya
            : [1, 3, 1, 1,13, 1, 1, 5, 1, 1, 11, 1, 1],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(
            0,
            graphData?.length > 0 ? "#76ABAE80" : "rgba(54, 162, 235, 0.1)"
          );
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradient;
        },
        borderColor: "#76ABAE",
        pointBackgroundColor: "#76ABAE",
        pointBorderColor: "#76ABAE",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#000",
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
          color: "#000",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#000",
        },
        title: {
          display: true,
          text: "Date",
          color: "#000",
        },
      },
    },
  };

  return <Line className="w-full" data={data} options={options} />;
};

export default Graph;
