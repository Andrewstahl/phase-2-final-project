import React from "react";
import Stock from "./Stock";

export default function StockList({ stocks, onFavorite }) {
  const stockElements = stocks.map(stock => {
    return (
      <div className="stock-element">
        <Stock key={stock.id} stock={stock} onFavorite={onFavorite} />
      </div>
    )
  })

  return (
    <div>
      {stockElements}
    </div>
  )
}