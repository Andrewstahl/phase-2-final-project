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
  textDecoration: "none",
  color: "#171785",
  fontWeight: "bold",
  textAlign: "center",
  alignItems: "center"
};

const linkStylesActive = {
  ...linkStyles,
  background: "white"
}

export default function NavBar() {
  return (
    <div style={{ margin: "0 300px" }}>
      <div style={{ display: "flex" }}>
        {/* <h3>NavBar Placeholder</h3> */}
        <NavLink 
          to="/"
          exact
          // style={({ isActive }) => ({
          //   linkStyles,
          //   background: isActive ? "grey" : null
          // })}
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
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
    </div>
  )
}