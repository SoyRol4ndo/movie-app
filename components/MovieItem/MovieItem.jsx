import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { getMovieDetails } from '@/api/detailsApi';
import { movieSelect } from '@/features/movie/movieSlice';
import { useDispatch } from 'react-redux';

export const MovieItem = ({ id, poster_path, title }) => {

  const dispatch = useDispatch();

  const handleMovieClick = () => {

    // Consulta a la API para mostrar details
    getMovieDetails(id)
      .then((moviesData) => {
        dispatch(movieSelect(moviesData));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="py-4 w-60 mx-1"
      onClick={handleMovieClick}
    >
      <Card>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={poster_path}
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold mb-4">{title}</p>
        </CardHeader>
      </Card>
    </div>
  );
};
