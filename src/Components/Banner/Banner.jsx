import React, { useState, useEffect } from "react";
import './Banner.css'
import axios from "../../axios";
import requests from "../../requests";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    };
    fetchData();
  }, []);
  console.log(movie);
  const truncate = (str , n) => {
return str?.length > n ? str.substr(0 , n-1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="banner_desc" >{truncate(movie?.overview , 150)}</h1>
      </div>
      <div className="banner_fadebottom"/>
    </header>
  );
};

export default Banner;
