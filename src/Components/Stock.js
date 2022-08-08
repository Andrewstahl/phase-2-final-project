import React, { useState } from "react";

export default function Stock({ stock, onFavorite }) {
  const {id, name, ticker, totalStocksHeld, holdingType, favorite} = stock;
  const [favoriteSelection, setFavoriteSelection] = useState(favorite)

  // let totalStocks = 0;
  // const holdingsLength = holdings.length;
  // // console.log(holdingsLength -1)
  // for (let i = holdingsLength - 1; i > -1; i--) {
  //   totalStocks += holdings[i].amount;
  //   // console.log(totalStocks)
  // }

  function handleClick() {
    const newFavoriteSelection = !favoriteSelection;
    setFavoriteSelection(newFavoriteSelection)
    fetch(`http://localhost:4000/stocks/${id}`, {
      method: "PATCH",
      headers: {
        "CONTENT-TYPE": "application/json"
      },
      body: JSON.stringify({
        ...stock,
        "favorite": newFavoriteSelection
      })
    })
      .then(r => r.json())
      .then(data => onFavorite(data))
  }

  return (
    <div>
      <div className="stock-title">
        <span onClick={() => handleClick()} className={favoriteSelection ? "activated-heart" : ""}>{favoriteSelection ? "♥" : "♡"}</span>
        <h4>{name} [{ticker}]</h4>
      </div>
      <p>{totalStocksHeld} Shares</p>
      <p>Type: {holdingType}</p>
    </div>
  )
}