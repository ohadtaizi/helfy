import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}
        >
          Products
        </NavLink>
        <NavLink
          to="/create-ingredient"
          className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}
        >
          Create Ingredient
        </NavLink>
        <NavLink
          to="/create-salad"
          className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}
        >
          Create Salad
        </NavLink>
        <NavLink
          to="/trivia"
          className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}
        >
          Trivia Game
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
