import React from "react";
import { useSelector } from "react-redux";
import { getAllmovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.scss";
import { settings } from "../../common/apis/settings";
const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const series = useSelector(getAllSeries);
  let renderMovies,
    renderSeries = "";
  if (movies) {
    renderMovies =
      movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie} />;
        })
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>{" "}
        </div>
      );
  }

  if (series) {
    renderSeries =
      series.Response === "True" ? (
        series.Search.map((movie, index) => {
          return <MovieCard key={index} data={movie} />;
        })
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>{" "}
        </div>
      );
  }
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies} </Slider>
        </div>
      </div>
      <div className="series-list">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderSeries} </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
