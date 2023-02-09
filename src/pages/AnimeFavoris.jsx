import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimeContexte } from "../contexte/AnimeContexte";
import Retour from "../icons/retour.png";

const AnimeFavoris = () => {
  const navigate = useNavigate();
  const { animeFavoris } = useContext(AnimeContexte);
  return (
    <div className="FavorisPage">
      <div className="favorisCatBout">
        <div className="Fav">Mes Favoris</div>
        <button className="btn" onClick={() => navigate("/")}>
          <img className="icon" src={Retour} alt="retour" />
          Retourner au catalogue
        </button>
      </div>
      {animeFavoris.length === 0 ? (
        <div className="animated-style">Il n'y a pas de favoris</div>
      ) : (
        <>
          <div className="AnimeFavoris">
            {animeFavoris.map((anime) => (
              <Link to={`/anime/${anime.id}`}>
                <img
                  className="imageCoverFav"
                  src={anime.attributes.posterImage.small}
                  alt="image"
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AnimeFavoris;
