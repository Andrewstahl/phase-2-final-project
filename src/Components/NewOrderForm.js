import React, { useState } from "react";

export default function NewOrderForm({ stocks }) {
  // const [userSelection, setUserSelection] = useState("Number");
  const [ticker, setTicker] = useState("");
  // I created this as an object so I can track whether the user is trying to sellAll
  // without creating a new state
  const [buySellOption, setBuySellOption] = useState("")
  const [orderOption, setOrderOption] = useState("Number of Stocks");
  const [buyAmount, setBuyAmount] = useState({
    amount: 0,
    sellAll: false
  });
  
  function handleSelect(e) {
    e.preventDefault();
    if (e.target.name === "buy-sell-select") {
      setBuySellOption(e.target.options[e.target.selectedIndex].text)
    } else if (e.target.name === "buy-type-select") {
      setOrderOption(e.target.options[e.target.selectedIndex].text)
    }
  }

  function handleSellAll(e) {
    e.preventDefault();
    
    const totalShares = stocks.filter(stock => stock.ticker === ticker)
    
    console.log(totalShares)
 
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Grab the ticker ID so we can use it with the fetches
    const tickerId = stocks.map(stock => {
      return stock.ticker === ticker ? stock.id : null
    })
    if (buySellOption === "Buy") {
      fetch("http://localhost:4000/stocks", {
        headers: {
          "CONTENT-TYPE": "application.json"
        },
        body: JSON.stringify({

        })
      })
    } else if (buySellOption === "Sell") {
      
      fetch(`http://localhost:4000/stocks/${tickerId}`, {
        method: "PATCH",
        headers: {
          "CONTENT-TYPE": "application/json"
        },
        body: JSON.stringify({

        })
      })
    }
  }

  // This creates options for the select field if we are selling stock or buying more
  const currentStocks = stocks.map(stock => {
    return <option key={stock.id} value={stock.ticker}>{stock.ticker}</option>
  })

  // Add in a conditional section that uses a fetch to populate the stock name after it's been entered

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="buy-sell-select">Are You Buying or Selling Stock?</label>
        <select name="buy-sell-select" onChange={(e) => handleSelect(e)}>
          <option hidden value="">Pick an Option</option>
          <option value="buy-new">Buy New</option>
          <option value="buy-more">Buy More</option>
          <option value="sell">Sell</option>
        </select>
        {buySellOption !== "" 
          ? (
            <>
              <label htmlFor="stockTicker">Enter the Stock Ticker for this Stock</label>
              {buySellOption === "Buy New"
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
                    {currentStocks}
                  </select>
                )
              }
              {/* <label htmlFor="buy-type-select">Enter Which Option You Are Looking to {(buySellOption).split(" ")[0]}</label>
              <select name="buy-type-select" onChange={(e) => handleSelect(e)}>
                <option value="number">Number of Stocks</option>
                <option value="dollars">Dollar Amount</option>
              </select> */}

              <label htmlFor="buyAmount">Enter The {orderOption} You Are Looking to {(buySellOption).split(" ")[0]}</label>
              <input 
                type="number" 
                name="buyAmount"
                value={buyAmount.amount}
                onChange={(e) => setBuyAmount(e.target.value)}
                placeholder={`Enter ${orderOption === "Number of Stocks" ? "Number" : "Amount"}`} 
              />
              <div className="newOrderButtons">
                <button onClick={(e) => e.preventDefault()}>Check Current Price</button>
                {buySellOption === "Sell" 
                  ? <button onClick={(e) => handleSellAll(e)}>Sell All</button>
                  : null
                }
              </div>
              <input type="submit" value="Submit"/>
            </>
          ) 
          : null
        }        
      </form>
    </div>
  )
}