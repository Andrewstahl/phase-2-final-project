
import  '../../src/App.css';
import  '../../src/index.css';
import React, { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./Header";
import NavBar from "./NavBar";
import StockList from "./StockList"
import StockForm from './StockForm';
import Favorites from './Favorites';
import Allocations from './Allocations';

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
 * └─── Favorites (left-side)
 *      ├─── Stock
 *      ├─── Stock
 *      └─── Stock
 * └─── Allocations (left-side)
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
      <Routes>
        <Route exact path="/" element={<StockList stocks={stocks} />} />
        <Route path="/favorites" element={<Favorites stocks={stocks} />} />
        <Route path="/allocations" element={<Allocations stocks={stocks} />} />
      </Routes>
      <StockForm />
    </>
  );
}

export default App;
