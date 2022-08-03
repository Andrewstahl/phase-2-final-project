import React from "react";
import Stock from "./Stock";

export default function StockList({ stocks }) {
  const stockElements = stocks.map(stock => {
    return (
      <div className="stockElement">
        <Stock key={stock.id} stock={stock} />
      </div>
    )
  })

  return (
    <div>
      {stockElements}
    </div>
  )
}