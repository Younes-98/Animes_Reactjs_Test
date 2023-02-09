import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimeContexte } from "../contexte/AnimeContexte";
import { BasicTable } from "../table/BasicTable";
import imageCo from "../icons/co.png";
import Loading from "../components/Loading";
import Scrollnf from "../components/Scrollnf";

const Home = () => {
  const { loading, loading2, fetchAnime, animes, animesbysearch } =
    useContext(AnimeContexte);
  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="Home">
      <p className="catalogue">Catalogue</p>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to="/anime/favoris">
            <button className="Lesfavoris">
              <p>Voir les favoris</p>
              <img src={imageCo} alt="fav" />
            </button>
          </Link>
          <BasicTable />
          <div className="Dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </>
      )}

      <Scrollnf />
    </div>
  );
};

export default Home;
