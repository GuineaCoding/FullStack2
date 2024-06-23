import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner'; 

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery<BaseMovieProps[], Error>('upcomingMovies', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={data || []}  
      action={(movie) => <PlaylistAddIcon style={{ color: '#1976d2' }} />}
    />
  );
};

export default UpcomingMoviesPage;
