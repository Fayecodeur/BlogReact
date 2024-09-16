// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Mon Blog</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/add">Ajouter</Link>
        </div>
      </nav>
    </header>
  );
}
