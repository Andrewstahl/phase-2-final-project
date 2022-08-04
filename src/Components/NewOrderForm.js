import React, { useState } from "react";

export default function NewOrderForm() {
  // const [userSelection, setUserSelection] = useState("Number");
  const [ticker, setTicker] = useState("");
  const [orderOption, setOrderOption] = useState("Number of Stocks");
  const [buyAmount, setBuyAmount] = useState(0);

  function handleSelect(e) {
    e.preventDefault();
    setOrderOption(e.target.options[e.target.selectedIndex].text)
  }

  return (
    <div className="form-container">
      <form>
        <label htmlFor="stockTicker">Enter the Stock Ticker for this Stock</label>
        <input 
          type="text"
          name="stockTicker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter Stock Ticker"
          />
        <label htmlFor="buy-type-select">Enter Which Option You Are Looking to Buy</label>
        <select name="buy-type-select" onChange={(e) => handleSelect(e)}>
          <option value="number">Number of Stocks</option>
          <option value="dollars">Dollar Amount</option>
        </select>
        <label htmlFor="buyAmount">Enter The {orderOption}</label>
        <input 
          type="number" 
          name="buyAmount"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          placeholder={`Enter ${orderOption === "Number of Stocks" ? "Number" : "Amount"}`} 
          />
        <div>
          {/* <h3>Total Buy Amount: {
            orderOption === "Number of Stocks" ? 
          }
          </h3> */}
        </div>
        <button onClick={(e) => e.preventDefault()}>Check Current Price</button>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}