import React from "react";

export default function Stock({ stock }) {
const {name, ticker, holdings, holdingType, favorite} = stock;

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
        <span className={favorite ? "activated-heart" : ""}>{favorite ? "♥" : "♡"}</span>
        <h4>{name} [{ticker}]</h4>
      </div>
      <p>{totalStocks} Shares</p>
      <p>Type: {holdingType}</p>
    </div>
  )
}