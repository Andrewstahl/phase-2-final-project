
import  '../../src/App.css';
import  '../../src/index.css';
import React, { useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom"
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
      <Switch>
        <Route exact path="/">
          <StockList stocks={stocks} />
        </Route>
        <Route path="/favorites">
          <Favorites stocks={stocks} />
        </Route>
        <Route exact path="/allocations">
          <Allocations stocks={stocks} />
        </Route>
      </Switch>
      <StockForm />
    </>
  );
}

export default App;
