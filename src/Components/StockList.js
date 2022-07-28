import React from "react";
import Stock from "./Stock";

export default function StockList({ stocks }) {
  const stockElements = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} />
  })

  return (
    <div>
      {stockElements}
    </div>
  )
}