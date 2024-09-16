import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oups ! La page que vous recherchez n'existe pas.
        </p>
        <Link to="/" className="not-found-link">
          Retourner à l'accueil
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
