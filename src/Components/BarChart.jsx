import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
Chart.register(BarElement);
Chart.register(CategoryScale)
Chart.register(LinearScale)

const BarChart = ({ chartData }) => {
  return <Bar 
    data={chartData}
    height={50}
     />;
};

export default BarChart;
