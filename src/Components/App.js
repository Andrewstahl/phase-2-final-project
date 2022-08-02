
import  '../../src/App.css';
import React, { useEffect, useState} from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import StockList from "./StockList"
import StockForm from './StockForm';

/**
 * App Hierarchy
 * 
 * App
 * ├─── Header 
 * ├─── NavBar
 * ├─── StockForm (right-side)
 * └─── StockList (left-side)
 *      ├─── Stock
 *      ├─── Stock
 *      └─── Stock
 * 
 */

function App() {
  
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])
  
  return (
    <>
      <Header />
      <NavBar />
      <StockList stocks={stocks} />
      <StockForm />
    </>
  );
}

export default App;
