import React, { useState } from "react";

export default function StockForm() {
  const [userSelection, setUserSelection] = useState("Number")

  return (
    <form>
      {/* <label htmlFor="stockTicker">Stock Amount</label> */}
      <input 
        type="text"
        name="stockTicker" 
        placeholder="Enter Stock Ticker"
        />
      <button>Check Current Price</button>
      <select onChange={() => setUserSelection(userSelection === "Dollars" ? "Number" : "Dollars")}>
        <option value="number">Number of Stocks</option>
        <option value="dollars">Dollar Amount</option>
      </select>
      <input type="number" placeholder={`Enter ${userSelection}`}></input>
      <button type="submit">Submit</button>
    </form>
  )
}