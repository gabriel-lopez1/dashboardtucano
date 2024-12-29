import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Pais", "Población"],
  ["Mexico", 110],
  ["Alemania", 200],
  ["Estados Unidos", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["Francia", 600],
  ["RU", 700],
  ["India", 1200],
  ["China", 1000],
];

export  default function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="300px"
      data={data}
    />
  );
}