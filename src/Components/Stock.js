import React from "react";

export default function Stock({ stock }) {
const {name, holdings, favorite} = stock;

  let totalStocks;
  const holdingsLength = holdings.length;
  console.log(holdings, holdingsLength)
  for (let i = holdingsLength - 1; i > 0; i--) {
    // console.log(holdings[i]);
  }

  return (
    <div>
      <h4>{name}</h4>
      <p>{totalStocks}</p>
      <p>Favorite - {favorite}</p>
    </div>
  )
}