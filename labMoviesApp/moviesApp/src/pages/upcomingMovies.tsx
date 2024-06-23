import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'; // Ensure this import if it's not already there

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavourites = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.id === movie.id ? { ...m, favourite: !m.favourite } : m
    );
    setMovies(updatedMovies);
    localStorage.setItem('favourites', JSON.stringify(movies.filter(m => m.favourite)));
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon {...movie} onClick={() => addToFavourites(movie)} />}
    />
  );
};

export default UpcomingMoviesPage;
