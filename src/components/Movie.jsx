import React from "react";

function Movie({ mov }) {
  return (
    <div className="rounded-md shadow-lg w-full flex-col bg-slate-600">
      <img
        className="cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`}
        alt=""
      />

      <h4 className="m-2">{mov.title}</h4>

      <div className="px-2 flex justify-between items-center py-2">
        <span className="rounded-md bg-white px-2 py-1">
          {mov.vote_average}
        </span>
        <span className="rounded-sm bg-white px-2 py-1">
          {mov.release_date}
        </span>
      </div>
    </div>
  );
}

export default Movie;
