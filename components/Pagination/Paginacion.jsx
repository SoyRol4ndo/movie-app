import React, { useState } from 'react';
import { Pagination } from "@nextui-org/react";
import { getPopularMovies } from '@/api/popularApi';
import { useDispatch, } from 'react-redux';
import { movieList } from '@/features/movie/movieSlice';

export const Paginacion = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  // Cargar inicialmente los resultados de la pag 1
  if (currentPage === 1) {

    // Consulta a la API para mostrar movie-list
    getPopularMovies(currentPage)
      .then((moviesData) => {
        dispatch(movieList(moviesData));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Change del paginador
  const handlePageChange = (page) => {
    setCurrentPage(page);

    getPopularMovies(page)
      .then((moviesData) => {
        dispatch(movieList(moviesData));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Pagination
      total={100}
      current={currentPage}
      onChange={handlePageChange}
    />
  );
};
