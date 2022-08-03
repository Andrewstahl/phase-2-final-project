import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

export default function NavBar() {
  return (
    <div>
      {/* <h3>NavBar Placeholder</h3> */}
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/favorites"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Favorites
      </NavLink>
      <NavLink 
        to="/allocations"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Allocations
      </NavLink>
    </div>
  )
}