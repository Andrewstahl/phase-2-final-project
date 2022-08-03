import React from "react";

export default function Stock({ stock }) {
const {name, holdings, holdingType, favorite} = stock;

  let totalStocks = 0;
  const holdingsLength = holdings.length;
  // console.log(holdingsLength -1)
  for (let i = holdingsLength - 1; i > -1; i--) {
    totalStocks += holdings[i].amount;
    // console.log(totalStocks)
  }

  return (
    <div>
      <div className="stock-title">
        <h4>{name}</h4>
        <p>{favorite ? "Liked" : "Not Liked"}</p>
      </div>
      <p>{totalStocks} Shares</p>
      <p>{holdingType}</p>
    </div>
  )
}