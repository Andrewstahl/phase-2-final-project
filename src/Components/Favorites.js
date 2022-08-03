import React from "react";
import Stock from "./Stock";

export default function Favorites({ stocks }) {
  const stockElements = stocks.filter(stock => stock.favorite === true).map(stock => {
    return <Stock key={stock.id} stock={stock} />
  })

  return (
    <div>
      {stockElements}
    </div>
  )
}