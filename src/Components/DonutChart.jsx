import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DonutChart = (props) => {
  return (
    <>
      <Doughnut
      data={props.data}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
        }} />
    </>
  );
};

export default DonutChart;
