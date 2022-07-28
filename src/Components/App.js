
// import  './App.css';
import React, { useEffect, useState} from "react";
import Header from "./Header";
import NavBar from "./NavBar";

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
  
  useEffect(() => {
    fetch("http://localhost:4000/stocks")
  }, [])
  
  return (
    <>
      <Header />
      <NavBar />
    </>
  );
}

export default App;
