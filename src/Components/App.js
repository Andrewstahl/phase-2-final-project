
import  '../../src/App.css';
import  '../../src/index.css';
import React, { useEffect, useState} from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import Header from "./Header";
import NavBar from "./NavBar";
import StockList from "./StockList"
import StockDetails from './StockDetails';
import NewOrderForm from './NewOrderForm';
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

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])
  
  function handleOrderPlaced(fetchMethod, orderStock) {
    let updatedStocks;
    console.log(fetchMethod, orderStock)
    if (fetchMethod === "POST") {
      updatedStocks = [...stocks, orderStock]
    } else if (fetchMethod === "PATCH") {
      updatedStocks = stocks.map(stock => {
        if (stock.ticker === orderStock.ticker) {
          return orderStock
        } else {
          return stock
        }
      })
    } else if (fetchMethod === "DELETE") {
      updatedStocks = stocks.filter(stock => stock.ticker !== orderStock.ticker)
    }

    setStocks(updatedStocks)

    navigate("/home")
  }

  function handleFavorite(newFavoriteStock) {
    const newStocks = stocks.map(stock => {
      if (stock.id === newFavoriteStock.id) {
        return newFavoriteStock
      } else {
        return stock
      }
    })

    setStocks(newStocks)
  }

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<StockList stocks={stocks}  onFavorite={handleFavorite} />} />
        <Route exact path="/home" element={<StockList stocks={stocks}  onFavorite={handleFavorite} />} />
        <Route exact path="/home/:ticker" element={<StockDetails stocks={stocks} />} />
        <Route exact path="/favorites" element={<Favorites stocks={stocks} onFavorite={handleFavorite} />} />
        <Route exact path="/allocations" element={<Allocations stocks={stocks} />} />
        <Route exact path="/order" element={<NewOrderForm stocks={stocks} onOrderPlaced={handleOrderPlaced} />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
