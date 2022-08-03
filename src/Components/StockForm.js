import React, { useState } from "react";

export default function StockForm() {
  const [userSelection, setUserSelection] = useState("Number")

  return (
    <div className="form-container">
      <form>
        <label htmlFor="stockTicker">Enter the Stock Ticker for this Stock</label>
        <input 
          type="text"
          name="stockTicker" 
          placeholder="Enter Stock Ticker"
          />
        <label htmlFor="buy-type-select">Enter Which Option You Are Looking to Buy</label>
        <select name="buy-type-select" onChange={() => setUserSelection(userSelection === "Dollars" ? "Number" : "Dollars")}>
          <option value="number">Number of Stocks</option>
          <option value="dollars">Dollar Amount</option>
        </select>
        
        <label htmlFor="buyAmount">Enter The Buy Amount</label>
        <input 
          type="number" 
          name="buyAmount"
          placeholder={`Enter ${userSelection}`} 
          />
        <button>Check Current Price</button>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}