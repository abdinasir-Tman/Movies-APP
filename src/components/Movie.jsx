import React, { useEffect, useState } from "react";
import Model from "./Model";

function Movie({ mov }) {
  const [videoId, setVideoId] = useState();
  const [videoCode, setVideoCode] = useState();
  // show Modal
  const [isOpen, setIsOpen] = useState(false);
  //Fetching video
  useEffect(() => {
    const api_key = "5a720d777c64c5443dbf53bf7435cc54";
    const fetchVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${api_key}`
      );
      const { results } = await response.json();
      const video = results.find((res) => res.type === "Trailer");
      setVideoCode(video.key);
    };
    fetchVideo();
  }, [videoId]);

  return (
    <div className="rounded-md shadow-lg w-full flex-col bg-slate-600">
      <img
        onClick={() => {
          setVideoId(mov.id);
          setIsOpen(true);
        }}
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
      {isOpen && (
        <Model code={videoCode} setCode={setVideoCode} isTrue={true} />
      )}
    </div>
  );
}

export default Movie;
