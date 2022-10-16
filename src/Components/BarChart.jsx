import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement } from "chart.js";
Chart.register(BarElement)

const BarChart = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
