import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import AnimeReducer from "./AnimeReducer";

export const AnimeContexte = createContext();

const AnimeProvider = ({ children }) => {
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [favoris, setFavoris] = useState(true);

  const [animeAgerate, setAnimeAgerate] = useState("");
  const [animeAnnee, setAnimeAnnee] = useState("");

  const [loading, setLoading] = useState(true);
  const Url = "https://kitsu.io/api/edge/";

  const initialState = {
    animes: [],
    // animesbysearch: [],
    animesbyId: {},
  };
  const [animeFavoris, setAnimeFavoris] = useState([]);

  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  const fetchData = async () => {
    setLoading2(true);
    try {
      const response = await fetch(
        `${Url}anime?page[limit]=10&page[offset]=${page}`
      );
      const result = await response.json();
      setDataTable(dataTable.concat(result.data));
      setHasMore(result.data.length > 0);
      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
    setLoading2(false);
  };

  const fetchAnime = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${Url}anime?page[limit]=10&page[offset]=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json",
          },
        }
      );
      dispatch({
        type: "GET_ANIMES",
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchBySearch = async (x) => {
    setLoading(true);
    try {
      const response = await axios.get(`${Url}anime?filter[text]==${x}`);
      dispatch({
        type: "GET_BYSEARCH",
        payload: response.data.data,
      });
      setDataTable(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${Url}anime/${id}`);
      dispatch({
        type: "GET_BYID",
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const clearAnimebyId = () => {
    dispatch({ type: "CLEAR_GETBYID" });
  };

  return (
    <AnimeContexte.Provider
      value={{
        page,
        setPage,
        hasMore,
        setHasMore,
        fetchData,
        dataTable,
        setDataTable,
        loading,
        fetchById,
        fetchAnime,
        animes: state.animes,
        fetchBySearch,
        animesbysearch: state.animesbysearch,
        animesbyId: state.animesbyId,
        clearAnimebyId,
        animeFavoris,
        setAnimeFavoris,
        favoris,
        setFavoris,
        animeAgerate,
        setAnimeAgerate,
        animeAnnee,
        setAnimeAnnee,
      }}
    >
      {children}
    </AnimeContexte.Provider>
  );
};

export default AnimeProvider;
