import React from "react";

export default function Stock({ stock }) {
const {name, holdings, favorite} = stock;

  let totalStocks = 0;
  const holdingsLength = holdings.length;
  // console.log(holdingsLength -1)
  for (let i = holdingsLength - 1; i > -1; i--) {
    totalStocks += holdings[i].amount;
    // console.log(totalStocks)
  }

  return (
    <div>
      <h4>{name}</h4>
      <p>{totalStocks} Shares</p>
      <p>{favorite ? "Liked" : "Not Liked"}</p>
    </div>
  )
}