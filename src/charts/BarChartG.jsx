import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Año", "Ventas", "Gastos", "Ganacias"],
  ["2021", 1000, 400, 600],
  ["2022", 1170, 460, 710],
  ["2023", 1260, 1120, 140],
  ["2024", 1030, 540, 490],
];

// Material chart options
export const options = {
  chart: {
    title: "Proyección de la Empresa",
    subtitle: "Ventas y Gastos 2021 - 2024",
  },
  colors: ["#1565c0", "#f44336", "#188310"],
};

function BarChartG() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      width="100%"
      height="320px"
      data={data}
      options={options}
    />
  );
}

export default BarChartG;
