import React from "react";

export default function Stock({ stock }) {
const {name, holdings, favorite} = stock;

  let totalStocks;
  for (let i = holdings.length() - 1; i >= 0; --i) {
    totalStocks += holdings[i].amount;
  }

  return (
    <div>
      <h4>{name}</h4>
      <p>{totalStocks}</p>
      <p>Favorite - {favorite}</p>
    </div>
  )
}