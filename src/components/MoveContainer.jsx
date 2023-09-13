import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "./Loading";

function MoveContainer() {
  const [movies, setMovies] = useState([]);
  const [checkDate, setCheckDate] = useState(false);

  useEffect(() => {
    const api_key = "5a720d777c64c5443dbf53bf7435cc54";
    const fetchData = async () => {
      const request = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1`
      );
      const { results } = await request.json();
      setMovies(results);

      setCheckDate(true);
    };

    fetchData();
  }, []);

  // console.log(movies)

  if (!checkDate) {
    return <Loading />;
  } else {
    return (
      <>
        <h4 className="text-white mt-6">The Popular Movies</h4>
        <div className="grid grid-cols-3 gap-3">
          {movies.map((mov, index) => {
            return <Movie mov={mov} key={index} />;
          })}
        </div>
      </>
    );
  }
}

export default MoveContainer;
