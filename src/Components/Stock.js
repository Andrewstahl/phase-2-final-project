import React, { useState } from "react";

export default function Stock({ stock, onFavorite }) {
  const {id, ticker, totalStocksHeld, holdingType, favorite} = stock;
  const [favoriteSelection, setFavoriteSelection] = useState(favorite)

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
        <h4>{ticker}</h4>
      </div>
      <p>{totalStocksHeld} Shares</p>
      <p>Type: {holdingType}</p>
    </div>
  )
}