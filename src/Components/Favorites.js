import React from "react";
import Stock from "./Stock";

export default function Favorites({ stocks, onFavorite }) {
  const stockElements = stocks.filter(stock => stock.favorite === true).map(stock => {
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