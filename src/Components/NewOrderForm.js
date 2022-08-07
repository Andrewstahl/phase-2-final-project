import React, { useState } from "react";

export default function NewOrderForm({ stocks }) {
  // const [userSelection, setUserSelection] = useState("Number");
  const [ticker, setTicker] = useState("");
  const [buySellOption, setBuySellOption] = useState("")
  const [orderOption, setOrderOption] = useState("Number of Stocks");
  const [buyAmount, setBuyAmount] = useState(0);

  function handleSelect(e) {
    e.preventDefault();
    if (e.target.name === "buy-sell-select") {
      setBuySellOption(e.target.options[e.target.selectedIndex].text)
    } else if (e.target.name === "buy-type-select") {
      setOrderOption(e.target.options[e.target.selectedIndex].text)
    }
  }

  const currentStocks = stocks.map(stock => {
    return <option key={stock.ticker} value={stock.ticker}>{stock.ticker}</option>
  })

  // const currentStockAmount = stocks.

  return (
    <div className="form-container">
      <form>
        <label htmlFor="buy-sell-select">Are You Buying or Selling Stock?</label>
        <select name="buy-sell-select" onChange={(e) => handleSelect(e)}>
          <option hidden value="">Pick an Option</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        {buySellOption !== "" 
          ? (
            <>
              <label htmlFor="stockTicker">Enter the Stock Ticker for this Stock</label>
              {buySellOption === "Buy"
                ? (
                  <input 
                    type="text"
                    name="stockTicker"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    placeholder="Enter Stock Ticker"
                  />
                  )
                : (
                  <select 
                    name="stockTicker" 
                    onChange={(e) => setTicker(e.target.value)}
                  >
                    <option hidden value="" >Pick a Ticker</option>
                    {currentStocks}
                  </select>
                )
              }
              
              <label htmlFor="buy-type-select">Enter Which Option You Are Looking to {buySellOption}</label>
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
              <button onClick={(e) => e.preventDefault()}>Check Current Price</button>
              <input type="submit" value="Submit"/>
            </>
          ) 
          : null
        }        
      </form>
    </div>
  )
}