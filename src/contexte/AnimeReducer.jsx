const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMES":
      return {
        ...state,
        animes: action.payload,
        // loading: false,
      };
    case "GET_BYSEARCH":
      return {
        ...state,
        animesbysearch: action.payload,
        // loading: false,
      };
    case "GET_BYID":
      return {
        ...state,
        animesbyId: action.payload,
      };

    default:
      throw new Error();
  }
};

export default AnimeReducer;
