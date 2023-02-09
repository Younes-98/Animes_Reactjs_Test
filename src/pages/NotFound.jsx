import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 Page Not Found</h1>
      <p>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
      <div className="retour"></div>
      <Link to="/">
        <div className="retour">Retournez à la page d'accueil.</div>
      </Link>
    </div>
  );
};

export default NotFound;
