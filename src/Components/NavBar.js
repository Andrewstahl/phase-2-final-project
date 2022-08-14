import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "stretch",
  alignContent: "center",
  width: "100%",
  height: "20%",
  padding: "1em",
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

const navLinkStyles = {
  display: "flex",
  borderTop: "1px solid grey",
  borderBottom: "1px solid grey"
}

export default function NavBar() {
  return (
    <div style={{ margin: "0 200px" }}>
      <div style={{ ...navLinkStyles }}>
        <NavLink 
          to="/home"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Home
        </NavLink>
        <NavLink 
          to="/favorites"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Favorites
        </NavLink>
        <NavLink 
          to="/allocations"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Allocations
        </NavLink>
        <NavLink 
          to="/order"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          New Order
        </NavLink>
      </div>
    </div>
  )
}