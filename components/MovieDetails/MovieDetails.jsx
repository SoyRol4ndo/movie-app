import React from 'react';
import { Card, CardHeader, CardBody, Image, Progress } from "@nextui-org/react";
import { useSelector } from 'react-redux';

export const MovieDetails = () => {

  const { title, namesString, overview, poster_path, vote_average, release_date, companiesString } = useSelector(state => state.movie.select);

  return (
    <Card className="max-w-[740px] m-10">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Image
            width={500}
            alt="NextUI hero Image"
            src={poster_path}
          />
          <CardBody className="px-3 py-0 text-small text-default-400 mt-5">
            <div className="flex flex-col gap-1 items-start justify-center ">
              <h4 className="text-small font-semibold leading-none text-default-600">{`Titulo: ${title}`}</h4>
            </div>
            <hr />
            <p className='mt-4'>
              <span className='text-white'>Sinopsis:</span> {overview}
            </p>
            <span className="pt-2 text-white">{`#${namesString}`}</span>
            <span className="pt-2">
              <span className='text-white'>Lanzamiento: </span>{release_date}
            </span>
            <span className="pt-2">
              <span className='text-white'>Productoras: </span>{companiesString}
            </span>

            <div className='flex pt-2'>
              <span className="mr-2 text-white">Calificacion: </span>
              <Progress
                aria-label="Downloading..."
                size="sm"
                value={vote_average * 10}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />
            </div>
          </CardBody>
        </div>

      </CardHeader>
    </Card>
  );
};
