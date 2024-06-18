import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: !m.favourite } : m
    );
    setMovies(updatedMovies);
    localStorage.setItem('favourites', JSON.stringify(movies.filter(m => m.favourite)));
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default UpcomingMoviesPage;
