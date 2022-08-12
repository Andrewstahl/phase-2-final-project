import React from "react";
// import { Chart, ChartJs, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart as ChartJs } from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
// Chart.register(
//   Tooltip, Title, ArcElement, Legend
// );

export default function Allocations({ stocks }) {
  
  const stockAllocations = {
    domestic: 0,
    international: 0,
    cryptocurrency: 0
  }
  
  for (let i = stocks.length - 1; i > 0; --i) {
    if (stocks[i].holdingType === "Domestic") {
      stockAllocations.domestic += 1
    } else if (stocks[i].holdingType === "International") {
      stockAllocations.international += 1
    } else if (stocks[i].holdingType === "Cryptocurrency") {
      stockAllocations.cryptocurrency += 1
    }
  }

  const data = {
    labels: [
      "Domestic",
      "International",
      "Cryptocurrency"
    ],
    dataSets: [
      {
        label: "Portfolio Allocations",
        // data: [stockAllocations.domestic, stockAllocations.international, stockAllocations.cryptocurrency],
        data: [25, 75, 20],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }
    ]
  }
  
  return(
    <div>
      <h3>Placeholder for Pie Chart</h3>
      <Pie data={data} />
      {/* <Pie data={data} options={pieOptions} /> */}
    </div>
  )
}