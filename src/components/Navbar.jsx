import React, { useContext, useEffect, useState } from "react";
import { AnimeContexte } from "../contexte/AnimeContexte";
import chercher from "../icons/chercher.svg";

const Navbar = () => {
  const { fetchBySearch, setAnimeAgerate, setAnimeAnnee, fetchAnime } =
    useContext(AnimeContexte);

  const [showAnnee, setShowAnnee] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [animeSearch, setAnimeSearch] = useState("");

  const showAnneefonc = () => {
    setShowAnnee(!showAnnee);
  };
  const showAgefonc = () => {
    setShowAge(!showAge);
  };
  const getAgerate = (age) => {
    setAnimeAgerate(age);
  };
  const getAnnee = (annee) => {
    setAnimeAnnee(annee);
  };
  const Age = [
    { id: 0, rateAge: "13" },
    { id: 1, rateAge: "14" },
    { id: 2, rateAge: "15" },
    { id: 3, rateAge: "16" },
    { id: 4, rateAge: "17" },
    { id: 5, rateAge: "18" },
  ];
  const Annee = [
    { id: 0, annee: "2015" },
    { id: 1, annee: "2016" },
    { id: 2, annee: "2017" },
    { id: 3, annee: "2018" },
    { id: 4, annee: "2019" },
    { id: 5, annee: "2020" },
    { id: 6, annee: "2021" },
    { id: 7, annee: "2022" },
    { id: 8, annee: "2023" },
  ];

  useEffect(() => {
    animeSearch !== "" ? fetchBySearch(animeSearch) : fetchAnime();
  }, [animeSearch]);

  return (
    <div className="menu">
      <div className="recherche">
        <input
          type="text"
          onChange={(e) => setAnimeSearch(e.target.value)}
          placeholder="Recherche"
        />
        <img src={chercher} alt="che" />
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={showAnneefonc}>
          <p>Année</p>
          <i className="arrow down"></i>
        </button>
        <div
          className={showAnnee ? "dropdown-content show" : "dropdown-content"}
        >
          {Annee.map((annee) => (
            <a onClick={() => getAnnee(annee.annee)} key={annee.id} href="#">
              {annee.annee}
            </a>
          ))}
        </div>

        <div className="dropdown2">
          <button className="dropbtn" onClick={showAgefonc}>
            <p>Âge recommandé</p>
            <i className="arrow down"></i>
          </button>
          <div
            className={showAge ? "dropdown-content show" : "dropdown-content"}
          >
            {Age.map((age) => (
              <a onClick={() => getAgerate(age.rateAge)} key={age.id} href="#">
                {age.rateAge}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
