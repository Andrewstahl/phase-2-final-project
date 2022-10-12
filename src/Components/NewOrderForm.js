import React, { useState } from "react";
// import Favorites from "./Favorites";

export default function NewOrderForm({ stocks, onOrderPlaced }) {
  // const [userSelection, setUserSelection] = useState("Number");
  const [formData, setFormData] = useState({
    orderOption: "Pick an Option",
    ticker: "",
    holdingType: "",
    orderAmount: 0,
    sellAll: false
  })

  const [currentStockPrice, setCurrentStockPrice] = useState("")
  
  function handleSelect(e) {
    
    setCurrentStockPrice("");

    e.preventDefault();
    setFormData({
      ...formData,
      orderOption: e.target.options[e.target.selectedIndex].text
    })
    
  }
  
  function handleSellAll(e) {
    e.preventDefault();
    
    const totalShares = stocks.filter(stock => stock.ticker === formData.ticker)[0].totalStocksHeld
    
    setFormData({
      ...formData,
      orderAmount: totalShares,
      sellAll: true
    })
 
  }

  function handleStockFetch(e) {
    e.preventDefault()
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${formData.ticker}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_KEY}`)
      .then(r => r.json())
      .then(data => {
        const quoteData = data["Global Quote"];
        if (Object.keys(quoteData).length === 0) {
          setCurrentStockPrice("No Ticker Found")
        } else {
          setCurrentStockPrice(`Current Price: ${parseFloat(quoteData["05. price"])}`)
        }
      })
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Grab the ticker ID so we can use it with the fetches
    
    let fetchMethod, endingUrl, body, stock, newHoldingAmount

    // Specifically for buying more or selling something that's in 
    // your portfolio, we will have different methods for fetching
    // this data
    if (formData.orderOption === "Sell" || formData.orderOption === "Buy More") {
      // For either of these, we're going to need the ticker ID
      // for the URL
      const returnedStock = stocks.filter(stock => {
        return stock.ticker === formData.ticker ? stock.id : null})[0];
      const tickerId = returnedStock.id;
      const currentStockAmount = returnedStock.totalStocksHeld;
      
      if (formData.orderOption === "Sell" && (formData.sellAll === true || formData.orderAmount >= currentStockAmount)) {
        // if we've selected to sell everything, we're going to need
        // to delete that item
        fetchMethod = "DELETE";
        body = {}
      } else {
        // Otherwise, we're going to just patch it with the 
        // number of stocks that we're going to purchase
        fetchMethod = "PATCH"
        // At this point, we'll need to either increase or decrease the 
        // holdings depending on if we're buying or selling
        if (formData.orderOption === "Sell") {
          // Use this variable so we can pass it through back to 
          // the App component and update the screen in real-time
          // after an order has been placed. Otherwise, after the order
          // it would go back to the home screen and not show the updated
          // amount
          newHoldingAmount = currentStockAmount - parseInt(formData.orderAmount);
          body = {
            totalStocksHeld: newHoldingAmount
          }
        } else {
          newHoldingAmount = currentStockAmount + parseInt(formData.orderAmount)
          body = {
            totalStocksHeld: newHoldingAmount
          }
        }
      }
      endingUrl = `/${tickerId}`
      stock = returnedStock
      
    } else if (formData.orderOption === "Buy New") {
      fetchMethod = "POST";
      endingUrl = "";
      body = {
        ticker: formData.ticker,
        totalStocksHeld: parseInt(formData.orderAmount),
        favorite: false,
        holdingType: formData.holdingType
      }
      stock = body
    }
    
    handleFetch(fetchMethod, endingUrl, body, stock, newHoldingAmount)
  }

  function handleFetch(fetchMethod, endingUrl, body, stock, newHoldingAmount) {
    fetch(`http://localhost:4000/stocks${endingUrl}`, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(data => null)
    
    setFormData({
      orderOption: "Pick an Option",
      ticker: "",
      holdingType: "",
      orderAmount: 0,
      sellAll: false
    })
    console.log("New Order Form - ", stock)
    onOrderPlaced(fetchMethod, stock, newHoldingAmount)
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
        {formData.orderOption !== "Pick an Option" 
          ? (
            <>
              <label htmlFor="stockTicker">Enter the Stock Ticker for this Stock</label>
              {formData.orderOption === "Buy New"
                ? (
                  <>
                    <input 
                      type="text"
                      name="stockTicker"
                      value={formData.ticker}
                      onChange={(e) => setFormData({...formData, ticker: e.target.value})}
                      placeholder="Enter Stock Ticker"
                    />
                    <label htmlFor="investmentType">Choose the Investment Type</label>
                    <select
                      name="investmentType"
                      onChange={(e) => setFormData({...formData, holdingType: e.target.value}) }
                    >
                      <option hidden default>Pick an Investment Type</option>
                      <option value="Domestic">Domestic</option>
                      <option value="International">International</option>
                      <option value="Crypto">Crypto</option>
                    </select>
                  </>
                  )
                : (
                  <select 
                    name="stockTicker"
                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                  >
                    <option hidden default>Pick a Ticker</option>
                    {currentStocks}
                  </select>
                )
              }
              {formData.ticker !== ""
                ? (
                  <>  
                    <label htmlFor="orderAmount">Enter The Amount You Are Looking to {(formData.orderOption).split(" ")[0]}</label>
                    <input 
                      type="number" 
                      name="orderAmount"
                      value={formData.orderAmount}
                      onChange={(e) => setFormData({
                        ...formData, 
                        orderAmount: e.target.value, 
                        sellAll: false
                      })}
                      placeholder={`Enter Number of Stocks`} 
                    />
                    <div className="newOrderButtons">
                      <button onClick={(e) => handleStockFetch(e)}>Check Current Price</button>
                      {formData.orderOption === "Sell" 
                        ? <button onClick={(e) => handleSellAll(e)}>Sell All</button>
                        : null
                      }
                    </div>
                    <input type="submit" value="Submit"/>
                  </>
                )
                : null
              }
            </>
          ) 
          : null
        }        
      </form>
      {currentStockPrice !== "" 
        ? 
        <p>
          {currentStockPrice}
        </p>
        : 
          null
      }
    </div>
  )
}