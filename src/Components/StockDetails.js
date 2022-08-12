import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StockDetails({ stocks }) {
  const [stockDetails, setStockDetails] = useState(null)  
  const params = useParams()
  
  // console.log(stocks[0].ticker)
  // console.log(returnedStock)
  
  useEffect(() => {
    fetch(`http://localhost:4000/stocks/`)
    .then(r => r.json())
    .then(data => {
      const returnedStock = data.filter(stock => stock.ticker.toLowerCase() === params.ticker.toLowerCase())[0]
      
      setStockDetails(returnedStock)
      })
  }, [params.ticker])

  if (stockDetails === null) return <h3>Waiting...</h3> 

  const {ticker, totalStocksHeld, holdingType} = stockDetails

  // const returnedStock = stocks.
  // console.log(params);
  
  return (
    <div className="stockDetailsDiv">
      <h4 className="stockDetailsHeader">{ticker}</h4>
      <table className="stockDetailsTable">
        <thead>
          <th>Investment Type</th>
          <th>Total Shares</th>
        </thead>
        <tbody>
          <tr>
            <td>{holdingType}</td>
            <td>{totalStocksHeld}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}