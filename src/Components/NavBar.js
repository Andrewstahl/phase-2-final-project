import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "stretch",
  alignContent: "center",
  float: "left",
  width: "100%",
  // padding: "12px",
  margin: "10px",
  fontSize: "20px",
  // background: "blue",
  textDecoration: "none",
  color: "#171785",
  fontWeight: "bold",
  textAlign: "center",
  alignItems: "center"
};

export default function NavBar() {
  return (
    <div style={{ display: "flex" }}>
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