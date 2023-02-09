import React, { useEffect, useContext } from "react";
import { AnimeContexte } from "../contexte/AnimeContexte";

const Add = () => {
  const { fetchData, dataTable, page, setPage, hasMore } =
    useContext(AnimeContexte);

  useEffect(() => {
    fetchData();
  }, [page]);

  const numberOfElementsToRemove = 4;
  const startIndex = dataTable.length - numberOfElementsToRemove;

  const handleLoadMore = () => {
    setPage(page + 5);
  };
  const handleLoadMore2 = () => {
    dataTable.splice(startIndex, numberOfElementsToRemove);
  };

  return (
    <div>
      {hasMore &&
        window.addEventListener("scroll", () => {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            handleLoadMore();
          }
        })}
    </div>
  );
};

export default Add;
