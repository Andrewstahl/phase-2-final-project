import React from "react";
// import { Chart, ChartJs, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs } from 'chart.js/auto';
// Chart.register(
//   Tooltip, Title, ArcElement, Legend
// );

export default function Allocations({ stocks }) {
  const stockAllocations = {
    domestic: 0,
    international: 0,
    crypto: 0
  }
  
  for (let i = stocks.length - 1; i > 0; --i) {
    if (stocks[i].holdingType === "Domestic") {
      stockAllocations.domestic += 1
    } else if (stocks[i].holdingType === "International") {
      stockAllocations.international += 1
    } else if (stocks[i].holdingType === "Crypto") {
      stockAllocations.crypto += 1
    }
  }

  const data = {
    labels: [
      "Domestic",
      "International",
      "Crypto"
    ],
    datasets: [
      {
        label: "Portfolio Allocations",
        data: [
          ((stockAllocations.domestic / stocks.length) * 100).toFixed(2), 
          ((stockAllocations.international / stocks.length) * 100).toFixed(2), 
          ((stockAllocations.crypto / stocks.length) * 100).toFixed(2)
        ],
        backgroundColor: [
          'rgb(1,31,75)',
          'rgb(0,91,150)',
          'rgb(179,205,224)'
        ],
        hoverOffset: 4
      }
    ]
  }
  
  return(
    <div className="pieChart">
      <h3 className="chartTitle">Break-out of Allocations by Holding Type</h3>
      <div style={{ width: 500, margin:"auto"  }}>
      {/* <div className="pieChart"> */}
        <Pie data={data} />
      </div> 
      {/* <Pie data={data} options={pieOptions} /> */}
    </div>
  )
}