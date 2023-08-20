"use client";
import React from 'react';
import { useSelector } from 'react-redux';

import { MovieItem } from '@/components/MovieItem/MovieItem';

export const MovieList = () => {

  // Traer del state la lista de peliculas
  const moviesList = useSelector(state => state.movie.movieList);
  return (
    <div className="flex flex-wrap pointer-events-auto">
      {
        moviesList.map((movie) => (
          <MovieItem
            key={movie.id}
            {...movie}
          />
        ))
      }
    </div>
  );
};
