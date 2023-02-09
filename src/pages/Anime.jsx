import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimeContexte } from "../contexte/AnimeContexte";
import Retour from "../icons/retour.png";
import imageCo from "../icons/co.png";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";

const Anime = () => {
  const { id } = useParams();
  const {
    loading,
    fetchById,
    animesbyId,
    animeFavoris,
    setAnimeFavoris,
    favoris,
    setFavoris,
  } = useContext(AnimeContexte);
  const navigate = useNavigate();
  const AjoutFavoris = (animeFavoris, id) => {
    !animeFavoris.some((anime) => anime.id === id) &&
      setAnimeFavoris([...animeFavoris, animesbyId]);
    setFavoris(false);
  };
  const Retirer = (animeFavoris, id) => {
    if (animeFavoris.some((anime) => anime.id === id)) {
      setAnimeFavoris(animeFavoris.filter((anime) => anime.id !== id));
      setFavoris(true);
    } else {
      setFavoris(false);
    }
  };

  useEffect(() => {
    fetchById(id);
    animeFavoris.some((anime) => anime.id === id)
      ? setFavoris(false)
      : setFavoris(true);
  }, []);

  Object.keys(animesbyId).length === 0 &&
    animesbyId.constructor === Object &&
    fetchById(id);

  return (
    <>
      {!loading ? (
        <div>
          <div className="cardAnime">
            <button className="btn" onClick={() => navigate("/")}>
              <img className="icon" src={Retour} alt="retour" />
              Retourner au catalogue
            </button>
            {animesbyId.attributes.coverImage == null ? (
              <p className="alertImagecover">
                <span>Pas d'image</span>
              </p>
            ) : (
              <img
                className="imagePoster"
                src={animesbyId.attributes.coverImage.original}
                alt="yy"
              />
            )}
            <img
              className="imageCover"
              src={animesbyId.attributes.posterImage.small}
              alt="yy"
            />
            <div className="infoAnime">
              <div className="titlerange">
                <div className="title">
                  {animesbyId.attributes.abbreviatedTitles[0]}
                </div>
                <div className="range">
                  Rang {animesbyId.attributes.ratingRank}
                </div>
              </div>
              <div className="ajoutRetir">
                {favoris ? (
                  <button
                    className="btnfav AjouFav"
                    onClick={() => AjoutFavoris(animeFavoris, id)}
                  >
                    <p>Ajouter aux favoris</p>
                    <img src={imageCo} alt="fav" />
                  </button>
                ) : (
                  <button
                    className="btnfav RetirFav"
                    onClick={() => Retirer(animeFavoris, id)}
                  >
                    <p>Retirer des favoris</p>
                    <img src={imageCo} alt="fav" />
                  </button>
                )}
              </div>
              <div className="descrip">{animesbyId.attributes.synopsis}</div>
            </div>
          </div>

          <Link to="/anime/favoris">
            <button className="Lesfavoris">
              <p>Voir les favoris</p>
              <img src={imageCo} alt="fav" />
            </button>
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Anime;
